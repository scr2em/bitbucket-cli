import { consola } from 'consola';
import { renderTable, Cell } from './table';
import { colorForUser } from './colors';
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

function shortDate(value?: string): string {
  return value ? new Date(value).toLocaleDateString() : '—';
}

function authorName(account?: { display_name?: string; nickname?: string }): string {
  return account?.display_name || account?.nickname || 'unknown';
}

/** A table cell for a user/author name, tinted by a per-user color. */
function userCell(name: string): Cell {
  return { value: name, color: colorForUser(name) };
}

/** Tabular list of pull requests. */
export function printPullRequestList(prs: Pullrequest[]): void {
  consola.success(`Found ${prs.length} pull request(s):`);
  const rows = prs.map((pr) => [
    `#${pr.id}`,
    `${pr.state ?? ''}${pr.draft ? ' (draft)' : ''}`,
    pr.title ?? '',
    userCell(authorName(pr.author)),
    `${pr.source?.branch?.name ?? '?'} → ${pr.destination?.branch?.name ?? '?'}`,
    shortDate(pr.updated_on),
  ]);
  consola.log(
    renderTable(
      [
        { header: 'ID' },
        { header: 'State' },
        { header: 'Title', max: 50 },
        { header: 'Author', max: 22 },
        { header: 'Branches', max: 34 },
        { header: 'Updated' },
      ],
      rows,
    ),
  );
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
    return `${inline.path}${line ? `:${line}` : ''}`;
  }
  return 'general';
}

/** Tabular list of comments (replies marked with ↳). */
export function printComments(comments: Comment[]): void {
  consola.success(`Found ${comments.length} comment(s):`);
  const rows = comments.map((comment) => [
    `${comment.parent ? '↳ ' : ''}#${comment.id}`,
    userCell(authorName(comment.user)),
    commentLocation(comment),
    (comment.content?.raw ?? '').replace(/\s+/g, ' ').trim(),
    (comment as { resolution?: unknown }).resolution ? 'yes' : comment.deleted ? 'deleted' : '',
  ]);
  consola.log(
    renderTable(
      [
        { header: 'ID' },
        { header: 'Author', max: 22 },
        { header: 'Location', max: 28 },
        { header: 'Comment', max: 50 },
        { header: 'Resolved' },
      ],
      rows,
    ),
  );
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

/** Tabular list of tasks. */
export function printTasks(tasks: PullrequestCommentTask[]): void {
  consola.success(`Found ${tasks.length} task(s):`);
  const rows = tasks.map((task) => [
    `#${task.id}`,
    task.state === 'RESOLVED' ? 'resolved' : 'open',
    (task.content?.raw ?? '').replace(/\s+/g, ' ').trim(),
  ]);
  consola.log(
    renderTable(
      [{ header: 'ID' }, { header: 'State' }, { header: 'Task', max: 70 }],
      rows,
    ),
  );
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

/** Tabular list of the commits that make up a pull request. */
export function printCommits(commits: CommitLike[]): void {
  consola.success(`Found ${commits.length} commit(s):`);
  const rows = commits.map((commit) => {
    const author = commit.author?.user?.display_name || commit.author?.raw || 'unknown';
    return [(commit.hash ?? '').slice(0, 8), (commit.message ?? '').split('\n')[0], userCell(author), shortDate(commit.date)];
  });
  consola.log(
    renderTable(
      [{ header: 'Hash' }, { header: 'Message', max: 56 }, { header: 'Author', max: 24 }, { header: 'Date' }],
      rows,
    ),
  );
}

interface StatusLike {
  key?: string;
  name?: string;
  state?: string;
  url?: string;
  description?: string;
}

/** Tabular list of build/commit statuses. */
export function printStatuses(statuses: StatusLike[]): void {
  consola.success(`Found ${statuses.length} status(es):`);
  const rows = statuses.map((status) => [
    status.state ?? '?',
    status.name || status.key || '',
    (status.description ?? '').replace(/\s+/g, ' ').trim(),
  ]);
  consola.log(
    renderTable(
      [{ header: 'State' }, { header: 'Name', max: 32 }, { header: 'Description', max: 50 }],
      rows,
    ),
  );
}

interface DiffstatLike {
  status?: string;
  lines_added?: number;
  lines_removed?: number;
  old?: { path?: string } | null;
  new?: { path?: string } | null;
}

/** Tabular per-file added/removed line summary. */
export function printDiffstat(entries: DiffstatLike[]): void {
  consola.success(`${entries.length} file(s) changed:`);
  const rows = entries.map((entry) => [
    entry.status ?? 'modified',
    `+${entry.lines_added ?? 0}`,
    `-${entry.lines_removed ?? 0}`,
    entry.new?.path || entry.old?.path || '?',
  ]);
  consola.log(
    renderTable(
      [
        { header: 'Status' },
        { header: 'Added', align: 'right' },
        { header: 'Removed', align: 'right' },
        { header: 'Path', max: 60 },
      ],
      rows,
    ),
  );
}

interface ActivityLike {
  update?: { state?: string; date?: string; author?: { display_name?: string } };
  approval?: { date?: string; user?: { display_name?: string } };
  changes_requested?: { date?: string; user?: { display_name?: string } };
  comment?: Comment;
}

/** Tabular pull request activity log. */
export function printActivity(entries: ActivityLike[]): void {
  consola.success(`${entries.length} activity entr(ies):`);
  const rows: Cell[][] = entries.map((entry) => {
    if (entry.approval) return ['approved', userCell(authorName(entry.approval.user)), '', shortDate(entry.approval.date)];
    if (entry.changes_requested)
      return ['changes requested', userCell(authorName(entry.changes_requested.user)), '', shortDate(entry.changes_requested.date)];
    if (entry.update)
      return ['update', userCell(authorName(entry.update.author)), entry.update.state ?? '', shortDate(entry.update.date)];
    if (entry.comment)
      return ['comment', userCell(authorName(entry.comment.user)), (entry.comment.content?.raw ?? '').replace(/\s+/g, ' ').trim(), ''];
    return ['?', '', '', ''];
  });
  consola.log(
    renderTable(
      [{ header: 'Type' }, { header: 'Who', max: 22 }, { header: 'Detail', max: 50 }, { header: 'Date' }],
      rows,
    ),
  );
}
