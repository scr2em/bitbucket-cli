import { BitbucketApi, paginate, unwrap } from '../api/client';
import type { Commit, Diffstat } from '../api/generated/bitbucket-api';

/** Facade over the generated client for a single commit. */

export interface CommitRef {
  workspace: string;
  repo: string;
  commit: string;
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
