import { getApi, BitbucketApi } from '../../api/client';
import { resolveWorkspace } from '../../utils/command';

export interface RepoRef {
  workspace: string;
  repo: string;
}

/** Resolves a repository-scoped context (workspace + repo) and an API client. */
export async function branchRepoContext(options: { workspace?: string; repo: string }): Promise<{ api: BitbucketApi; ref: RepoRef }> {
  return { api: await getApi(), ref: { workspace: resolveWorkspace(options.workspace), repo: options.repo } };
}
