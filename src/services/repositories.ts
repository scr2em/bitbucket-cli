import { BitbucketApi, paginate } from '../api/client';
import type { Repository, WorkspaceAccess } from '../api/generated/bitbucket-api';

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

/**
 * Lists all repositories the authenticated user can access (across workspaces).
 *
 * The global `GET /repositories` endpoint was removed by Bitbucket (CHANGE-2770),
 * so this walks the caller's workspaces and lists each one in turn. Results are
 * therefore grouped by workspace; `sort` applies within a workspace, not across.
 */
export async function listAccessibleRepositories(
  api: BitbucketApi,
  options: { role?: Role; query?: string; sort?: string; limit?: number } = {},
): Promise<Repository[]> {
  const workspaces = await paginate<WorkspaceAccess>(api, api.user.workspacesList());

  const repos: Repository[] = [];
  for (const { workspace } of workspaces) {
    if (!workspace?.slug) continue;

    const remaining = options.limit ? options.limit - repos.length : undefined;
    if (remaining !== undefined && remaining <= 0) break;

    repos.push(...(await listRepositories(api, workspace.slug, { ...options, limit: remaining })));
  }
  return repos;
}
