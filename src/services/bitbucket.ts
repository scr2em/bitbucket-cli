import axios, { AxiosResponse } from 'axios';

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

export async function listRepositories(workspace: string, token: string): Promise<Repository[]> {
  try {
    // Validate token format
    if (!token.includes(':')) {
      throw new Error('Invalid credentials format. Please use: username:app-password');
    }
    
    const [username, appPassword] = token.split(':');
    if (!username || !appPassword) {
      throw new Error('Invalid credentials format. Both username and app-password are required.');
    }
    
    const response: AxiosResponse<PaginatedRepositories> = await axios.get(
      `${BITBUCKET_API_BASE}/repositories/${workspace}`,
      {
        auth: {
          username: username,
          password: appPassword
        },
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    return response.data.values;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Invalid credentials. Please check your Bitbucket username and app password. Make sure you\'re using the format: username:app-password');
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
