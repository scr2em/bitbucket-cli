import { BitbucketApi, paginate, unwrap } from '../api/client';
import type { Ref, Branch, Tag } from '../api/generated/bitbucket-api';

/**
 * Facade over the generated client for the Refs API group (branches and tags).
 * Mirrors the structure of services/pullrequests.ts.
 */

export interface RepoRef {
  workspace: string;
  repo: string;
}

interface ListOptions {
  query?: string;
  sort?: string;
  limit?: number;
}

// --- combined refs --------------------------------------------------------

export function listRefs(api: BitbucketApi, ref: RepoRef, options: ListOptions = {}): Promise<Ref[]> {
  return paginate<Ref>(
    api,
    api.repositories.refsList(ref.repo, ref.workspace, { q: options.query, sort: options.sort }),
    { limit: options.limit },
  );
}

// --- branches -------------------------------------------------------------

export function listBranches(api: BitbucketApi, ref: RepoRef, options: ListOptions = {}): Promise<Branch[]> {
  return paginate<Branch>(
    api,
    api.repositories.refsBranchesList(ref.repo, ref.workspace, { q: options.query, sort: options.sort }),
    { limit: options.limit },
  );
}

export function getBranch(api: BitbucketApi, ref: RepoRef, name: string): Promise<Branch> {
  return unwrap(api.repositories.refsBranchesDetail(name, ref.repo, ref.workspace));
}

export async function createBranch(api: BitbucketApi, ref: RepoRef, name: string, target: string): Promise<Branch> {
  // The generated `refsBranchesCreate` has no request-body parameter (the spec
  // omits its body schema), so post directly. Auth is applied via instance defaults.
  const response = await api.instance.post<Branch>(
    `/repositories/${ref.workspace}/${ref.repo}/refs/branches`,
    { name, target: { hash: target } },
  );
  return response.data;
}

export async function deleteBranch(api: BitbucketApi, ref: RepoRef, name: string): Promise<void> {
  await api.repositories.refsBranchesDelete(name, ref.repo, ref.workspace);
}

// --- tags -----------------------------------------------------------------

export function listTags(api: BitbucketApi, ref: RepoRef, options: ListOptions = {}): Promise<Tag[]> {
  return paginate<Tag>(
    api,
    api.repositories.refsTagsList(ref.repo, ref.workspace, { q: options.query, sort: options.sort }),
    { limit: options.limit },
  );
}

export function getTag(api: BitbucketApi, ref: RepoRef, name: string): Promise<Tag> {
  return unwrap(api.repositories.refsTagsDetail(name, ref.repo, ref.workspace));
}

export function createTag(api: BitbucketApi, ref: RepoRef, name: string, target: string, message?: string): Promise<Tag> {
  const body = {
    name,
    target: { hash: target },
    ...(message ? { message } : {}),
  } as Tag;
  return unwrap(api.repositories.refsTagsCreate(ref.repo, ref.workspace, body));
}

export async function deleteTag(api: BitbucketApi, ref: RepoRef, name: string): Promise<void> {
  await api.repositories.refsTagsDelete(name, ref.repo, ref.workspace);
}
