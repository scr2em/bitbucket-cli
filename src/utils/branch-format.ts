import { consola } from 'consola';
import { renderTable } from './table';
import type { Branchrestriction } from '../api/generated/bitbucket-api';

function restrictionTarget(r: Branchrestriction): string {
  if (r.branch_match_kind === 'branching_model') return `type:${r.branch_type ?? '?'}`;
  return `glob:${r.pattern ?? '*'}`;
}

function restrictionExtras(r: Branchrestriction): string {
  const parts: string[] = [];
  if (typeof r.value === 'number') parts.push(`value=${r.value}`);
  if (r.users?.length) parts.push(`users=${r.users.length}`);
  if (r.groups?.length) parts.push(`groups=${r.groups.length}`);
  return parts.join(', ');
}

/** Tabular list of branch restriction rules. */
export function printRestrictions(restrictions: Branchrestriction[]): void {
  consola.success(`Found ${restrictions.length} branch restriction(s):`);
  const rows = restrictions.map((r) => [`#${r.id}`, r.kind ?? '?', restrictionTarget(r), restrictionExtras(r)]);
  consola.log(
    renderTable(
      [{ header: 'ID' }, { header: 'Kind', max: 36 }, { header: 'Match', max: 30 }, { header: 'Details', max: 30 }],
      rows,
    ),
  );
}

/** Detail view for a single branch restriction rule. */
export function printRestriction(r: Branchrestriction): void {
  consola.log('');
  consola.log(`🔒 Branch restriction #${r.id}`);
  consola.log(`   Kind:    ${r.kind}`);
  consola.log(`   Match:   ${r.branch_match_kind} (${restrictionTarget(r)})`);
  if (typeof r.value === 'number') consola.log(`   Value:   ${r.value}`);
  if (r.users?.length) consola.log(`   Users:   ${r.users.map((u) => u.display_name || u.nickname || u.uuid).join(', ')}`);
  if (r.groups?.length) consola.log(`   Groups:  ${r.groups.map((g) => g.name || g.slug).join(', ')}`);
  consola.log('');
}

interface BranchSide {
  name?: string;
  branch?: { name?: string };
  use_mainbranch?: boolean;
  enabled?: boolean;
}

interface ModelLike {
  development?: BranchSide;
  production?: BranchSide;
  branch_types?: { kind?: string; prefix?: string; enabled?: boolean }[];
}

function describeSide(side?: BranchSide): string {
  if (!side) return 'not set';
  if (side.enabled === false) return 'disabled';
  if (side.use_mainbranch) return 'main branch';
  return side.branch?.name || side.name || 'not set';
}

/** Compact summary of a branching model or its settings. */
export function printBranchingModel(model: ModelLike, label = 'Branching model'): void {
  consola.log('');
  consola.log(`🌳 ${label}`);
  consola.log(`   Development: ${describeSide(model.development)}`);
  consola.log(`   Production:  ${describeSide(model.production)}`);
  const types = (model.branch_types ?? []).filter((t) => t.enabled !== false);
  if (types.length) {
    consola.log('   Branch types:');
    types.forEach((t) => consola.log(`     ${t.kind}: ${t.prefix ?? ''}`));
  }
  consola.log('');
}
