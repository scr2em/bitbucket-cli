import { consola } from 'consola';
import { formatDate } from './pr-format';
import type { Commit } from '../api/generated/bitbucket-api';

function personName(person?: { raw?: string; user?: { display_name?: string } }): string {
  return person?.user?.display_name || person?.raw || 'unknown';
}

/** Commit metadata followed by its full message. */
export function printCommitDetails(commit: Commit): void {
  const message = commit.message ?? '';
  const [subject, ...body] = message.split('\n');

  consola.log('');
  consola.log(`🔨 Commit ${(commit.hash ?? '').slice(0, 12)}`);
  consola.log(`   ${subject}`);
  consola.log('');
  consola.log(`👤 Author:  ${personName(commit.author)}`);
  consola.log(`📅 Date:    ${formatDate(commit.date)}`);
  const parents = (commit.parents ?? []).map((parent) => (parent.hash ?? '').slice(0, 12));
  if (parents.length > 0) {
    consola.log(`🌳 Parents: ${parents.join(', ')}`);
  }

  const remainder = body.join('\n').trim();
  if (remainder) {
    consola.log('');
    consola.log('📝 Message:');
    consola.log(remainder);
  }

  if (commit.links?.html?.href) {
    consola.log('');
    consola.log(`🔗 ${commit.links.html.href}`);
  }
  consola.log('');
}
