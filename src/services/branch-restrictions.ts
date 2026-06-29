import { BitbucketApi, paginate, unwrap } from '../api/client';
import type { Branchrestriction } from '../api/generated/bitbucket-api';

/** Facade over the generated client for the Branch restrictions API group. */

export interface RepoRef {
  workspace: string;
  repo: string;
}

export function listRestrictions(
  api: BitbucketApi,
  ref: RepoRef,
  options: { kind?: string; pattern?: string; limit?: number } = {},
): Promise<Branchrestriction[]> {
  return paginate<Branchrestriction>(
    api,
    api.repositories.branchRestrictionsList(ref.repo, ref.workspace, { kind: options.kind, pattern: options.pattern }),
    { limit: options.limit },
  );
}

export function getRestriction(api: BitbucketApi, ref: RepoRef, id: string): Promise<Branchrestriction> {
  return unwrap(api.repositories.branchRestrictionsDetail(id, ref.repo, ref.workspace));
}

export function createRestriction(api: BitbucketApi, ref: RepoRef, data: Branchrestriction): Promise<Branchrestriction> {
  return unwrap(api.repositories.branchRestrictionsCreate(ref.repo, ref.workspace, data));
}

export function updateRestriction(api: BitbucketApi, ref: RepoRef, id: string, data: Branchrestriction): Promise<Branchrestriction> {
  return unwrap(api.repositories.branchRestrictionsUpdate(id, ref.repo, ref.workspace, data));
}

export async function deleteRestriction(api: BitbucketApi, ref: RepoRef, id: string): Promise<void> {
  await api.repositories.branchRestrictionsDelete(id, ref.repo, ref.workspace);
}
