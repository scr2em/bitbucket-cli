import axios, { AxiosResponse } from 'axios';
import { logger } from './logger';

export interface PaginatedResponse<T> {
  size: number;
  page: number;
  pagelen: number;
  next?: string;
  previous?: string;
  values: T[];
}

export const ACCESS_TOKEN_NO_WORKSPACES =
  'Listing workspaces is not available with an access token. Pass --workspace <workspace> or set a default with `bb config set-workspace -w <workspace>`.';

/**
 * Returns true when the saved credentials are a Bitbucket access token
 * (repository / project / workspace) rather than `username:api_token`.
 */
export function isAccessToken(credentials: string): boolean {
  return !credentials.includes(':');
}

/**
 * Creates an Authorization header from credentials
 * @param credentials - Format: "username:api_token" or a bare access token
 * @returns Basic Auth header string, or Bearer header for access tokens
 */
export function createAuthHeader(credentials: string): string {
  if (!credentials || credentials.trim() === '') {
    throw new Error('Credentials cannot be empty');
  }

  if (isAccessToken(credentials)) {
    return `Bearer ${credentials.trim()}`;
  }

  const [username, apiToken] = credentials.split(':');
  if (!username || !apiToken) {
    throw new Error('Invalid credentials format. Both username and API token are required.');
  }
  
  return `Basic ${Buffer.from(`${username.trim()}:${apiToken.trim()}`).toString('base64')}`;
}

/**
 * Fetches all pages of a paginated API endpoint
 * @param baseUrl - The initial API endpoint URL
 * @param authHeader - Basic Auth header string
 * @param resourceName - Name of the resource being fetched (for logging)
 * @returns Promise with array of all items from all pages
 */
export async function fetchAllPages<T>(
  baseUrl: string, 
  authHeader: string, 
  resourceName: string
): Promise<T[]> {
  const allItems: T[] = [];
  let nextUrl: string | undefined = baseUrl;
  let pageCount = 0;
  
  while (nextUrl) {
    pageCount++;
    logger.info(`Fetching ${resourceName} page ${pageCount}...`);
    
    const response: AxiosResponse<PaginatedResponse<T>> = await axios.get(nextUrl, {
      headers: {
        Authorization: authHeader,
        Accept: 'application/json'
      }
    });
    
    allItems.push(...response.data.values);
    
    nextUrl = response.data.next;
  }
  
  return allItems;
}

/**
 * Handles common API errors and throws appropriate error messages
 * @param error - The error object
 * @param context - Context information for error messages
 */
export function handleApiError(error: unknown, context: { workspace?: string; projectKey?: string }): never {
  if (axios.isAxiosError(error)) {
    const { workspace, projectKey } = context;
    
    if (error.response?.status === 401) {
      throw new Error('Invalid credentials. Please check your Bitbucket username and API token.');
    } else if (error.response?.status === 403) {
      throw new Error('Access forbidden. You may not have permission to access this resource.');
    } else if (error.response?.status === 404) {
      if (workspace && projectKey) {
        throw new Error(`Workspace '${workspace}' or project '${projectKey}' not found.`);
      } else if (workspace) {
        throw new Error(`Workspace '${workspace}' not found.`);
      } else {
        throw new Error('Resource not found.');
      }
    } else {
      throw new Error(`API request failed: ${error.response?.status} ${error.response?.statusText}`);
    }
  }
  
  throw new Error('Failed to fetch data from Bitbucket API');
}
