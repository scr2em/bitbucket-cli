import { BitbucketApi, paginate, unwrap } from '../api/client';
import type { BaseCommit, Commit, Diffstat } from '../api/generated/bitbucket-api';

/** Facade over the generated client for repository commits. */

export interface CommitRef {
  workspace: string;
  repo: string;
  commit: string;
}

export interface RepoRef {
  workspace: string;
  repo: string;
  /** Branch, tag, or hash to walk back from; every ref when omitted (like `git log --all`). */
  revision?: string;
}

/** Commits in reverse chronological order, newest first. */
export function listCommits(api: BitbucketApi, ref: RepoRef, options: { limit?: number } = {}): Promise<BaseCommit[]> {
  const firstPage = ref.revision
    ? api.repositories.commitsDetail(ref.repo, ref.revision, ref.workspace)
    : api.repositories.commitsList(ref.repo, ref.workspace);

  return paginate<BaseCommit>(api, firstPage, { limit: options.limit });
}

export function getCommit(api: BitbucketApi, ref: CommitRef): Promise<Commit> {
  return unwrap(api.repositories.commitDetail(ref.commit, ref.repo, ref.workspace));
}

/**
 * The raw git-style diff of the commit against its first parent. The endpoint answers
 * `text/plain`, which the generated client types as `void`.
 */
export function getDiff(api: BitbucketApi, ref: CommitRef): Promise<string> {
  return unwrap(
    api.repositories.diffDetail(ref.repo, ref.commit, ref.workspace, undefined, { format: 'text' }),
  ) as unknown as Promise<string>;
}

export function getDiffstat(api: BitbucketApi, ref: CommitRef): Promise<Diffstat[]> {
  return paginate<Diffstat>(api, api.repositories.diffstatDetail(ref.repo, ref.commit, ref.workspace));
}
