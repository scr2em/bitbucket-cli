import { consola } from 'consola';
import { renderTable } from './table';
import type { Ref, Branch, Tag } from '../api/generated/bitbucket-api';

function shortHash(ref: Ref): string {
  return (ref.target?.hash ?? '').slice(0, 8) || '—';
}

/** Tabular list of branches and/or tags with their target commit. */
export function printRefs(refs: Ref[], label = 'ref'): void {
  consola.success(`Found ${refs.length} ${label}(s):`);
  const rows = refs.map((ref) => [
    ref.type === 'tag' ? 'tag' : 'branch',
    ref.name ?? '?',
    shortHash(ref),
    (ref.target?.message ?? '').split('\n')[0],
  ]);
  consola.log(
    renderTable(
      [{ header: 'Type' }, { header: 'Name', max: 40 }, { header: 'Target' }, { header: 'Message', max: 50 }],
      rows,
    ),
  );
}

/** Detail view for a single branch. */
export function printBranch(branch: Branch): void {
  consola.log('');
  consola.log(`🌿 Branch: ${branch.name ?? '?'}`);
  consola.log(`   Target: ${shortHash(branch)}`);
  if (branch.default_merge_strategy) consola.log(`   Default merge strategy: ${branch.default_merge_strategy}`);
  if (branch.target?.message) consola.log(`   ${branch.target.message.split('\n')[0]}`);
  if (branch.links?.html?.href) consola.log(`   ${branch.links.html.href}`);
  consola.log('');
}

/** Detail view for a single tag. */
export function printTag(tag: Tag): void {
  consola.log('');
  consola.log(`🏷  Tag: ${tag.name ?? '?'}`);
  consola.log(`   Target: ${shortHash(tag)}`);
  if (tag.tagger?.raw) consola.log(`   Tagger: ${tag.tagger.raw}`);
  if (tag.date) consola.log(`   Date: ${new Date(tag.date).toLocaleString()}`);
  if (tag.message) consola.log(`   ${tag.message.split('\n')[0]}`);
  if (tag.links?.html?.href) consola.log(`   ${tag.links.html.href}`);
  consola.log('');
}
