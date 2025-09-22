import axios, { AxiosResponse } from 'axios';
import { consola } from 'consola';

export interface Repository {
  type: string;
  uuid: string;
  full_name: string;
  name: string;
  description: string;
  is_private: boolean;
  scm: string;
  created_on: string;
  updated_on: string;
  size: number;
  language: string;
  has_issues: boolean;
  has_wiki: boolean;
  fork_policy: string;
  links: {
    self: { href: string };
    html: { href: string };
    avatar: { href: string };
    pullrequests: { href: string };
    commits: { href: string };
    forks: { href: string };
    watchers: { href: string };
    downloads: { href: string };
    clone: Array<{ href: string; name: string }>;
    hooks: { href: string };
  };
  owner: {
    type: string;
    display_name: string;
    uuid: string;
    account_id: string;
    nickname: string;
  };
  project?: {
    type: string;
    key: string;
    uuid: string;
    name: string;
  };
  mainbranch: {
    type: string;
    name: string;
  };
}

export interface PaginatedRepositories {
  size: number;
  page: number;
  pagelen: number;
  next?: string;
  previous?: string;
  values: Repository[];
}

const BITBUCKET_API_BASE = 'https://api.bitbucket.org/2.0';

export async function listRepositories(workspace: string, credentials: string, role?: string): Promise<Repository[]> {
  try {
    // Validate credentials format
    if (!credentials || credentials.trim() === '') {
      throw new Error('Credentials cannot be empty');
    }
    
    // Parse username:api_token format
    if (!credentials.includes(':')) {
      throw new Error('Invalid credentials format. Please use: username:api_token');
    }
    
    const [username, apiToken] = credentials.split(':');
    if (!username || !apiToken) {
      throw new Error('Invalid credentials format. Both username and API token are required.');
    }
    
    const authHeader = `Basic ${Buffer.from(`${username.trim()}:${apiToken.trim()}`).toString('base64')}`;
    const allRepositories: Repository[] = [];
    
    // Build the initial URL with role parameter if provided
    let baseUrl = `${BITBUCKET_API_BASE}/repositories/${workspace}`;
    if (role) {
      baseUrl += `?role=${role}`;
    }
    
    let nextUrl: string | undefined = baseUrl;
    let pageCount = 0;
    
    // Fetch all pages recursively
    while (nextUrl) {
      pageCount++;
      consola.info(`Fetching page ${pageCount}...`);
      
      const response: AxiosResponse<PaginatedRepositories> = await axios.get(nextUrl, {
        headers: {
          Authorization: authHeader,
          Accept: 'application/json'
        }
      });
      
      // Add repositories from current page
      allRepositories.push(...response.data.values);
      consola.info(`Found ${response.data.values.length} repositories on page ${pageCount} (Total: ${allRepositories.length})`);
      
      // Check if there's a next page
      nextUrl = response.data.next;
      
     
    }
    
    consola.success(`Finished fetching all repositories. Total: ${allRepositories.length} repositories across ${pageCount} pages.`);

    return allRepositories;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      
      if (error.response?.status === 401) {
        throw new Error('Invalid credentials. Please check your Bitbucket username and API token. Make sure you\'re using the format: username:api_token');
      } else if (error.response?.status === 403) {
        throw new Error('Access forbidden. You may not have permission to access this workspace.');
      } else if (error.response?.status === 404) {
        throw new Error(`Workspace '${workspace}' not found.`);
      } else {
        throw new Error(`API request failed: ${error.response?.status} ${error.response?.statusText}`);
      }
    }
    throw new Error('Failed to fetch repositories from Bitbucket API');
  }
}
