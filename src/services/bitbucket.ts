import { createAuthHeader, fetchAllPages, handleApiError, PaginatedResponse } from '../utils/api';

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

export interface Workspace {
  type: string;
  uuid: string;
  name: string;
  slug: string;
  is_private: boolean;
  created_on: string;
  updated_on: string;
  links: {
    self: { href: string };
    html: { href: string };
    avatar: { href: string };
  };
}

export interface Project {
  type: string;
  uuid: string;
  key: string;
  name: string;
  description?: string;
  is_private: boolean;
  created_on: string;
  updated_on: string;
  links: {
    self: { href: string };
    html: { href: string };
    avatar: { href: string };
  };
}

export interface PullRequest {
  type: string;
  id: number;
  title: string;
  description: string;
  state: 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED';
  author: {
    type: string;
    display_name: string;
    uuid: string;
    account_id: string;
    nickname: string;
    links: {
      self: { href: string };
      html: { href: string };
      avatar: { href: string };
    };
  };
  source: {
    branch: {
      name: string;
    };
    commit: {
      hash: string;
    };
    repository: {
      type: string;
      name: string;
      full_name: string;
      uuid: string;
      links: {
        self: { href: string };
        html: { href: string };
        avatar: { href: string };
      };
    };
  };
  destination: {
    branch: {
      name: string;
    };
    commit: {
      hash: string;
    };
    repository: {
      type: string;
      name: string;
      full_name: string;
      uuid: string;
      links: {
        self: { href: string };
        html: { href: string };
        avatar: { href: string };
      };
    };
  };
  created_on: string;
  updated_on: string;
  links: {
    self: { href: string };
    html: { href: string };
    diff: { href: string };
    commits: { href: string };
    approve: { href: string };
    decline: { href: string };
    statuses: { href: string };
  };
}

const BITBUCKET_API_BASE = 'https://api.bitbucket.org/2.0';

export async function listWorkspaces(credentials: string): Promise<Workspace[]> {
  try {
    const authHeader = createAuthHeader(credentials);
    return await fetchAllPages<Workspace>(
      `${BITBUCKET_API_BASE}/workspaces`,
      authHeader,
      'workspaces'
    );
  } catch (error) {
    handleApiError(error, {});
  }
}

export async function listProjects(workspace: string, credentials: string): Promise<Project[]> {
  try {
    const authHeader = createAuthHeader(credentials);
    return await fetchAllPages<Project>(
      `${BITBUCKET_API_BASE}/workspaces/${workspace}/projects`,
      authHeader,
      'projects'
    );
  } catch (error) {
    handleApiError(error, { workspace });
  }
}

export async function listRepositoriesByProject(workspace: string, projectKey: string, credentials: string, role?: string): Promise<Repository[]> {
  try {
    const authHeader = createAuthHeader(credentials);
    
    // Build the initial URL with project filter and role parameter if provided
    let baseUrl = `${BITBUCKET_API_BASE}/repositories/${workspace}?q=project.key="${projectKey}"`;
    if (role) {
      baseUrl += `&role=${role}`;
    }
    
    return await fetchAllPages<Repository>(
      baseUrl,
      authHeader,
      'repositories'
    );
  } catch (error) {
    handleApiError(error, { workspace, projectKey });
  }
}

export async function listRepositories(workspace: string, credentials: string, role?: string): Promise<Repository[]> {
  try {
    const authHeader = createAuthHeader(credentials);
    
    // Build the initial URL with role parameter if provided
    let baseUrl = `${BITBUCKET_API_BASE}/repositories/${workspace}`;
    if (role) {
      baseUrl += `?role=${role}`;
    }
    
    return await fetchAllPages<Repository>(
      baseUrl,
      authHeader,
      'repositories'
    );
  } catch (error) {
    handleApiError(error, { workspace });
  }
}

export async function listPullRequests(workspace: string, repo: string, credentials: string, state?: string): Promise<PullRequest[]> {
  try {
    const authHeader = createAuthHeader(credentials);
    
    // Build the initial URL with state parameter if provided
    let baseUrl = `${BITBUCKET_API_BASE}/repositories/${workspace}/${repo}/pullrequests`;
    if (state) {
      baseUrl += `?state=${state.toUpperCase()}`;
    }
    
    return await fetchAllPages<PullRequest>(
      baseUrl,
      authHeader,
      'pull requests'
    );
  } catch (error) {
    handleApiError(error, { workspace });
  }
}
