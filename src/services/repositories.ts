import { BitbucketApi, paginate } from '../api/client';
import type { Repository } from '../api/generated/bitbucket-api';

/** Facade over the generated client for listing repositories. */

export type Role = 'admin' | 'contributor' | 'member' | 'owner';

/** Lists repositories owned by a workspace, optionally narrowed by the user's role. */
export function listRepositories(
  api: BitbucketApi,
  workspace: string,
  options: { role?: Role; query?: string; sort?: string; limit?: number } = {},
): Promise<Repository[]> {
  return paginate<Repository>(
    api,
    api.repositories.repositoriesDetail(workspace, {
      role: options.role,
      q: options.query,
      sort: options.sort,
    }),
    { limit: options.limit },
  );
}

/** Lists all repositories the authenticated user can access (across workspaces). */
export function listAccessibleRepositories(
  api: BitbucketApi,
  options: { role?: Role; query?: string; sort?: string; limit?: number } = {},
): Promise<Repository[]> {
  return paginate<Repository>(
    api,
    api.repositories.repositoriesList({
      role: options.role,
      q: options.query,
      sort: options.sort,
    }),
    { limit: options.limit },
  );
}
