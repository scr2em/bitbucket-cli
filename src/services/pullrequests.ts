import { AxiosResponse } from 'axios';
import { BitbucketApi, paginate, unwrap } from '../api/client';
import type {
  Pullrequest,
  PullrequestComment,
  Comment,
  PullrequestCommentTask,
  PullrequestMergeParameters,
  PullrequestTaskCreate,
  PullrequestTaskUpdate,
  ApplicationProperty,
  Participant,
  CommentResolution,
} from '../api/generated/bitbucket-api';

/**
 * Thin, intention-revealing facade over the generated Bitbucket client.
 *
 * The generated methods have awkward, position-sensitive argument orders (e.g.
 * `pullrequestsCommentsDelete(commentId, prId, repoSlug, workspace)`). This layer
 * hides that behind consistent `(api, ref, …)` signatures, handles pagination,
 * and unwraps axios responses so commands stay declarative.
 */

export interface RepoRef {
  workspace: string;
  repo: string;
}

export interface PrRef extends RepoRef {
  prId: number;
}

type State = 'OPEN' | 'MERGED' | 'DECLINED' | 'SUPERSEDED';

// Some endpoints have no response schema in the spec and are generated as
// `AxiosResponse<void>`; this alias lets `paginate` consume them.
type AnyPage = Promise<AxiosResponse<{ values?: unknown[]; next?: string }>>;

// ---------------------------------------------------------------------------
// Core CRUD
// ---------------------------------------------------------------------------

export function listPullRequests(
  api: BitbucketApi,
  ref: RepoRef,
  options: { state?: State[]; query?: string; sort?: string; limit?: number } = {},
): Promise<Pullrequest[]> {
  const query = {
    state: options.state,
    q: options.query,
    sort: options.sort,
  };
  return paginate<Pullrequest>(
    api,
    api.repositories.pullrequestsList(ref.repo, ref.workspace, query as { state?: State }),
    { limit: options.limit },
  );
}

export function getPullRequest(api: BitbucketApi, ref: PrRef): Promise<Pullrequest> {
  return unwrap(api.repositories.pullrequestsDetail(ref.prId, ref.repo, ref.workspace));
}

export function createPullRequest(api: BitbucketApi, ref: RepoRef, data: Pullrequest): Promise<Pullrequest> {
  return unwrap(api.repositories.pullrequestsCreate(ref.repo, ref.workspace, data));
}

export function updatePullRequest(api: BitbucketApi, ref: PrRef, data: Pullrequest): Promise<Pullrequest> {
  return unwrap(api.repositories.pullrequestsUpdate(ref.prId, ref.repo, ref.workspace, data));
}

export function listUserPullRequests(
  api: BitbucketApi,
  workspace: string,
  selectedUser: string,
  options: { state?: State[]; limit?: number } = {},
): Promise<Pullrequest[]> {
  return paginate<Pullrequest>(
    api,
    api.workspaces.pullrequestsDetail(selectedUser, workspace, { state: options.state } as { state?: State }),
    { limit: options.limit },
  );
}

export function listPullRequestsForCommit(
  api: BitbucketApi,
  ref: RepoRef,
  commit: string,
  options: { limit?: number } = {},
): Promise<Pullrequest[]> {
  return paginate<Pullrequest>(
    api,
    api.repositories.getPullrequestsForCommit(ref.workspace, ref.repo, commit),
    { limit: options.limit },
  );
}

// ---------------------------------------------------------------------------
// Review actions
// ---------------------------------------------------------------------------

export function approve(api: BitbucketApi, ref: PrRef): Promise<Participant> {
  return unwrap(api.repositories.pullrequestsApproveCreate(ref.prId, ref.repo, ref.workspace));
}

export async function unapprove(api: BitbucketApi, ref: PrRef): Promise<void> {
  await api.repositories.pullrequestsApproveDelete(ref.prId, ref.repo, ref.workspace);
}

export function requestChanges(api: BitbucketApi, ref: PrRef): Promise<Participant> {
  return unwrap(api.repositories.pullrequestsRequestChangesCreate(ref.prId, ref.repo, ref.workspace));
}

export async function removeChangeRequest(api: BitbucketApi, ref: PrRef): Promise<void> {
  await api.repositories.pullrequestsRequestChangesDelete(ref.prId, ref.repo, ref.workspace);
}

export function decline(api: BitbucketApi, ref: PrRef): Promise<Pullrequest> {
  return unwrap(api.repositories.pullrequestsDeclineCreate(ref.prId, ref.repo, ref.workspace));
}

export interface MergeOptions {
  message?: string;
  closeSourceBranch?: boolean;
  mergeStrategy?: PullrequestMergeParameters['merge_strategy'];
}

export function merge(api: BitbucketApi, ref: PrRef, options: MergeOptions = {}): Promise<Pullrequest> {
  const body = {
    message: options.message,
    close_source_branch: options.closeSourceBranch,
    merge_strategy: options.mergeStrategy,
  } as PullrequestMergeParameters;
  return unwrap(api.repositories.pullrequestsMergeCreate(ref.prId, ref.repo, ref.workspace, body));
}

export function getMergeStatus(api: BitbucketApi, ref: PrRef, taskId: string): Promise<unknown> {
  return unwrap(api.repositories.pullrequestsMergeTaskStatusDetail(ref.prId, ref.repo, taskId, ref.workspace));
}

// ---------------------------------------------------------------------------
// Content (diff / patch / commits / statuses / conflicts / activity)
// ---------------------------------------------------------------------------

export async function getDiff(api: BitbucketApi, ref: PrRef): Promise<string> {
  return unwrap(api.repositories.pullrequestsDiffList(ref.prId, ref.repo, ref.workspace, { format: 'text' })) as Promise<string>;
}

export async function getPatch(api: BitbucketApi, ref: PrRef): Promise<string> {
  return unwrap(api.repositories.pullrequestsPatchList(ref.prId, ref.repo, ref.workspace, { format: 'text' })) as Promise<string>;
}

export function getDiffstat(api: BitbucketApi, ref: PrRef): Promise<unknown[]> {
  return paginate(api, api.repositories.pullrequestsDiffstatList(ref.prId, ref.repo, ref.workspace) as unknown as AnyPage);
}

export function listCommits(api: BitbucketApi, ref: PrRef): Promise<unknown[]> {
  return paginate(api, api.repositories.pullrequestsCommitsList(ref.prId, ref.repo, ref.workspace) as unknown as AnyPage);
}

export function getConflicts(api: BitbucketApi, ref: PrRef): Promise<unknown[]> {
  return paginate(api, api.repositories.pullrequestsConflictsList(ref.prId, ref.repo, ref.workspace) as unknown as AnyPage);
}

export function listStatuses(api: BitbucketApi, ref: PrRef): Promise<unknown[]> {
  return paginate(api, api.repositories.pullrequestsStatusesList(ref.prId, ref.repo, ref.workspace) as unknown as AnyPage);
}

export function listActivity(api: BitbucketApi, ref: PrRef): Promise<unknown[]> {
  return paginate(api, api.repositories.pullrequestsActivityList2(ref.prId, ref.repo, ref.workspace) as unknown as AnyPage);
}

export function listRepoActivity(api: BitbucketApi, ref: RepoRef): Promise<unknown[]> {
  return paginate(api, api.repositories.pullrequestsActivityList(ref.repo, ref.workspace) as unknown as AnyPage);
}

// ---------------------------------------------------------------------------
// Comments
// ---------------------------------------------------------------------------

export interface InlineLocation {
  path: string;
  to?: number;
  from?: number;
}

export function listComments(api: BitbucketApi, ref: PrRef, options: { limit?: number } = {}): Promise<Comment[]> {
  return paginate<Comment>(
    api,
    api.repositories.pullrequestsCommentsList(ref.prId, ref.repo, ref.workspace),
    { limit: options.limit },
  );
}

export function getComment(api: BitbucketApi, ref: PrRef, commentId: number): Promise<Comment> {
  return unwrap(api.repositories.pullrequestsCommentsDetail(commentId, ref.prId, ref.repo, ref.workspace));
}

export function createComment(
  api: BitbucketApi,
  ref: PrRef,
  content: string,
  options: { inline?: InlineLocation; parentId?: number } = {},
): Promise<Comment> {
  const body = {
    content: { raw: content },
    ...(options.inline ? { inline: options.inline } : {}),
    ...(options.parentId ? { parent: { id: options.parentId } } : {}),
  } as PullrequestComment;
  return unwrap(api.repositories.pullrequestsCommentsCreate(ref.prId, ref.repo, ref.workspace, body));
}

export function updateComment(api: BitbucketApi, ref: PrRef, commentId: number, content: string): Promise<Comment> {
  const body = { content: { raw: content } } as PullrequestComment;
  return unwrap(api.repositories.pullrequestsCommentsUpdate(commentId, ref.prId, ref.repo, ref.workspace, body));
}

export async function deleteComment(api: BitbucketApi, ref: PrRef, commentId: number): Promise<void> {
  await api.repositories.pullrequestsCommentsDelete(commentId, ref.prId, ref.repo, ref.workspace);
}

export function resolveComment(api: BitbucketApi, ref: PrRef, commentId: number): Promise<CommentResolution> {
  return unwrap(api.repositories.pullrequestsCommentsResolveCreate(commentId, ref.prId, ref.repo, ref.workspace));
}

export async function reopenComment(api: BitbucketApi, ref: PrRef, commentId: number): Promise<void> {
  await api.repositories.pullrequestsCommentsResolveDelete(commentId, ref.prId, ref.repo, ref.workspace);
}

// ---------------------------------------------------------------------------
// Tasks
// ---------------------------------------------------------------------------

export function listTasks(api: BitbucketApi, ref: PrRef, options: { limit?: number } = {}): Promise<PullrequestCommentTask[]> {
  return paginate<PullrequestCommentTask>(
    api,
    api.repositories.pullrequestsTasksList(ref.prId, ref.repo, ref.workspace),
    { limit: options.limit },
  );
}

export function getTask(api: BitbucketApi, ref: PrRef, taskId: number): Promise<PullrequestCommentTask> {
  return unwrap(api.repositories.pullrequestsTasksDetail(ref.prId, ref.repo, taskId, ref.workspace));
}

export function createTask(
  api: BitbucketApi,
  ref: PrRef,
  content: string,
  options: { commentId?: number; pending?: boolean } = {},
): Promise<PullrequestCommentTask> {
  const body = {
    content: { raw: content },
    ...(options.commentId ? { comment: { id: options.commentId } } : {}),
    ...(options.pending !== undefined ? { pending: options.pending } : {}),
  } as PullrequestTaskCreate;
  return unwrap(api.repositories.pullrequestsTasksCreate(ref.prId, ref.repo, ref.workspace, body));
}

export function updateTask(
  api: BitbucketApi,
  ref: PrRef,
  taskId: number,
  data: { content?: string; state?: 'RESOLVED' | 'UNRESOLVED' },
): Promise<PullrequestCommentTask> {
  const body = {
    ...(data.content ? { content: { raw: data.content } } : {}),
    ...(data.state ? { state: data.state } : {}),
  } as PullrequestTaskUpdate;
  return unwrap(api.repositories.pullrequestsTasksUpdate(ref.prId, ref.repo, taskId, ref.workspace, body));
}

export async function deleteTask(api: BitbucketApi, ref: PrRef, taskId: number): Promise<void> {
  await api.repositories.pullrequestsTasksDelete(ref.prId, ref.repo, taskId, ref.workspace);
}

// ---------------------------------------------------------------------------
// Application properties
// ---------------------------------------------------------------------------

export function getProperty(api: BitbucketApi, ref: PrRef, appKey: string, propertyName: string): Promise<ApplicationProperty> {
  return unwrap(
    api.repositories.getPullRequestHostedPropertyValue(ref.workspace, ref.repo, String(ref.prId), appKey, propertyName),
  );
}

export async function setProperty(
  api: BitbucketApi,
  ref: PrRef,
  appKey: string,
  propertyName: string,
  value: ApplicationProperty,
): Promise<void> {
  await api.repositories.updatePullRequestHostedPropertyValue(
    ref.workspace,
    ref.repo,
    String(ref.prId),
    appKey,
    propertyName,
    value,
  );
}

export async function deleteProperty(api: BitbucketApi, ref: PrRef, appKey: string, propertyName: string): Promise<void> {
  await api.repositories.deletePullRequestHostedPropertyValue(ref.workspace, ref.repo, String(ref.prId), appKey, propertyName);
}
