import { getApi, BitbucketApi } from '../../api/client';
import { resolveWorkspace, parseId } from '../../utils/command';
import { PrRef, RepoRef } from '../../services/pullrequests';

/** Resolves a repository-scoped context (workspace + repo) and an API client. */
export async function repoContext(options: { workspace?: string; repo: string }): Promise<{ api: BitbucketApi; ref: RepoRef }> {
  const ref: RepoRef = { workspace: resolveWorkspace(options.workspace), repo: options.repo };
  return { api: await getApi(), ref };
}

/** Resolves a pull-request-scoped context (workspace + repo + prId) and an API client. */
export async function prContext(options: { workspace?: string; repo: string; pr: string }): Promise<{ api: BitbucketApi; ref: PrRef }> {
  const ref: PrRef = {
    workspace: resolveWorkspace(options.workspace),
    repo: options.repo,
    prId: parseId(options.pr, 'pull request id'),
  };
  return { api: await getApi(), ref };
}
