import { consola } from 'consola';
import type {
  Pullrequest,
  Comment,
  PullrequestCommentTask,
} from '../api/generated/bitbucket-api';

const STATE_EMOJI: Record<string, string> = {
  OPEN: '🟢',
  MERGED: '✅',
  DECLINED: '❌',
  SUPERSEDED: '🔄',
};

const STATUS_EMOJI: Record<string, string> = {
  SUCCESSFUL: '✅',
  FAILED: '❌',
  INPROGRESS: '⏳',
  STOPPED: '⏹️',
};

/** Prints data as pretty JSON on stdout (used by `--json`). */
export function printJson(data: unknown): void {
  console.log(JSON.stringify(data, null, 2));
}

export function stateBadge(state?: string): string {
  if (!state) return '❓';
  return `${STATE_EMOJI[state] ?? '❓'} ${state}`;
}

export function formatDate(value?: string): string {
  return value ? new Date(value).toLocaleString() : 'unknown';
}

function authorName(account?: { display_name?: string; nickname?: string }): string {
  return account?.display_name || account?.nickname || 'unknown';
}

/** One-line summary of a pull request, used in list output. */
export function printPullRequestList(prs: Pullrequest[]): void {
  consola.success(`Found ${prs.length} pull request(s):`);
  consola.log('');
  prs.forEach((pr) => {
    const emoji = STATE_EMOJI[pr.state ?? ''] ?? '❓';
    const draft = pr.draft ? ' [draft]' : '';
    consola.log(`${emoji} #${pr.id}${draft}  ${pr.title}`);
    consola.log(`   ${authorName(pr.author)}  ·  ${pr.source?.branch?.name ?? '?'} → ${pr.destination?.branch?.name ?? '?'}  ·  ${formatDate(pr.updated_on)}`);
    if (pr.links?.html?.href) consola.log(`   ${pr.links.html.href}`);
    consola.log('');
  });
}

/** Full detail view of a single pull request. */
export function printPullRequestDetails(pr: Pullrequest): void {
  consola.log('');
  consola.log(`📋 Pull Request #${pr.id} — ${stateBadge(pr.state)}${pr.draft ? '  [draft]' : ''}`);
  consola.log(`   ${pr.title ?? ''}`);
  consola.log('');
  consola.log(`👤 Author:   ${authorName(pr.author)}`);
  consola.log(`🌿 Source:   ${pr.source?.branch?.name ?? '?'}`);
  consola.log(`🎯 Target:   ${pr.destination?.branch?.name ?? '?'}`);
  consola.log(`📅 Created:  ${formatDate(pr.created_on)}`);
  consola.log(`🔄 Updated:  ${formatDate(pr.updated_on)}`);
  if (typeof pr.comment_count === 'number') consola.log(`💬 Comments: ${pr.comment_count}`);
  if (typeof pr.task_count === 'number') consola.log(`☑️  Tasks:    ${pr.task_count}`);
  consola.log(`🔀 Close source branch: ${pr.close_source_branch ? 'yes' : 'no'}`);

  const reviewers = (pr.participants ?? []).filter((p) => p.role === 'REVIEWER' || p.approved || p.state);
  if (reviewers.length > 0) {
    consola.log('');
    consola.log('👥 Reviewers:');
    reviewers.forEach((p) => {
      const mark = p.approved ? '✅ approved' : p.state === 'changes_requested' ? '🔴 changes requested' : '⚪ pending';
      consola.log(`   ${mark}  ${authorName(p.user)}`);
    });
  }

  if (pr.summary?.raw || pr.description) {
    consola.log('');
    consola.log('📝 Description:');
    consola.log(pr.summary?.raw || pr.description || '');
  }

  if (pr.links?.html?.href) {
    consola.log('');
    consola.log(`🔗 ${pr.links.html.href}`);
  }
  consola.log('');
}

function commentLocation(comment: Comment): string {
  const inline = comment.inline as { path?: string; to?: number; from?: number } | undefined;
  if (inline?.path) {
    const line = inline.to ?? inline.from;
    return `📄 ${inline.path}${line ? `:${line}` : ''}`;
  }
  return '💬 general';
}

/** Lists comments, indenting replies under their parent. */
export function printComments(comments: Comment[]): void {
  consola.success(`Found ${comments.length} comment(s):`);
  consola.log('');
  comments.forEach((comment) => {
    const indent = comment.parent ? '   ↳ ' : '';
    const resolved = (comment as { resolution?: unknown }).resolution ? ' ✔ resolved' : '';
    const deleted = comment.deleted ? ' (deleted)' : '';
    consola.log(`${indent}#${comment.id}  ${authorName(comment.user)}  ·  ${commentLocation(comment)}${resolved}${deleted}`);
    const raw = comment.content?.raw ?? '';
    raw.split('\n').forEach((line) => consola.log(`${indent}   ${line}`));
    consola.log('');
  });
}

/** Single comment detail. */
export function printComment(comment: Comment): void {
  consola.log('');
  consola.log(`💬 Comment #${comment.id}  ·  ${authorName(comment.user)}  ·  ${commentLocation(comment)}`);
  consola.log(`   ${formatDate(comment.created_on)}`);
  consola.log('');
  consola.log(comment.content?.raw ?? '');
  consola.log('');
}

/** Lists tasks with their resolution state. */
export function printTasks(tasks: PullrequestCommentTask[]): void {
  consola.success(`Found ${tasks.length} task(s):`);
  consola.log('');
  tasks.forEach((task) => {
    const done = task.state === 'RESOLVED' ? '☑' : '☐';
    consola.log(`${done} #${task.id}  ${task.content?.raw ?? ''}`);
  });
  consola.log('');
}

/** Single task detail. */
export function printTask(task: PullrequestCommentTask): void {
  const done = task.state === 'RESOLVED' ? '☑ RESOLVED' : '☐ UNRESOLVED';
  consola.log('');
  consola.log(`${done}  Task #${task.id}`);
  consola.log(`   ${task.content?.raw ?? ''}`);
  consola.log('');
}

interface CommitLike {
  hash?: string;
  message?: string;
  author?: { raw?: string; user?: { display_name?: string } };
  date?: string;
}

/** Lists the commits that make up a pull request. */
export function printCommits(commits: CommitLike[]): void {
  consola.success(`Found ${commits.length} commit(s):`);
  consola.log('');
  commits.forEach((commit) => {
    const shortHash = (commit.hash ?? '').slice(0, 8);
    const subject = (commit.message ?? '').split('\n')[0];
    const who = commit.author?.user?.display_name || commit.author?.raw || 'unknown';
    consola.log(`${shortHash}  ${subject}`);
    consola.log(`         ${who}  ·  ${formatDate(commit.date)}`);
  });
  consola.log('');
}

interface StatusLike {
  key?: string;
  name?: string;
  state?: string;
  url?: string;
  description?: string;
}

/** Lists build/commit statuses attached to a pull request. */
export function printStatuses(statuses: StatusLike[]): void {
  consola.success(`Found ${statuses.length} status(es):`);
  consola.log('');
  statuses.forEach((status) => {
    const emoji = STATUS_EMOJI[status.state ?? ''] ?? '❓';
    consola.log(`${emoji} ${status.state ?? '?'}  ${status.name || status.key || ''}`);
    if (status.description) consola.log(`   ${status.description}`);
    if (status.url) consola.log(`   ${status.url}`);
  });
  consola.log('');
}

interface DiffstatLike {
  status?: string;
  lines_added?: number;
  lines_removed?: number;
  old?: { path?: string } | null;
  new?: { path?: string } | null;
}

/** Per-file added/removed line summary. */
export function printDiffstat(entries: DiffstatLike[]): void {
  consola.success(`${entries.length} file(s) changed:`);
  consola.log('');
  entries.forEach((entry) => {
    const path = entry.new?.path || entry.old?.path || '?';
    const added = entry.lines_added ?? 0;
    const removed = entry.lines_removed ?? 0;
    consola.log(`   ${entry.status ?? 'modified'}  +${added} -${removed}  ${path}`);
  });
  consola.log('');
}

interface ActivityLike {
  update?: { state?: string; date?: string; author?: { display_name?: string } };
  approval?: { date?: string; user?: { display_name?: string } };
  changes_requested?: { date?: string; user?: { display_name?: string } };
  comment?: Comment;
}

/** Renders a pull request activity log (updates, approvals, comments). */
export function printActivity(entries: ActivityLike[]): void {
  consola.success(`${entries.length} activity entr(ies):`);
  consola.log('');
  entries.forEach((entry) => {
    if (entry.approval) {
      consola.log(`✅ approved by ${authorName(entry.approval.user)}  ·  ${formatDate(entry.approval.date)}`);
    } else if (entry.changes_requested) {
      consola.log(`🔴 changes requested by ${authorName(entry.changes_requested.user)}  ·  ${formatDate(entry.changes_requested.date)}`);
    } else if (entry.update) {
      consola.log(`🔄 update (${entry.update.state ?? '?'}) by ${authorName(entry.update.author)}  ·  ${formatDate(entry.update.date)}`);
    } else if (entry.comment) {
      const raw = (entry.comment.content?.raw ?? '').split('\n')[0];
      consola.log(`💬 comment by ${authorName(entry.comment.user)}: ${raw}`);
    }
  });
  consola.log('');
}
