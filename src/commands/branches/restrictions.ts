import { Command } from 'commander';
import { consola } from 'consola';
import { addRepoOptions, addJsonOption, runAction, confirm } from '../../utils/command';
import { branchRepoContext } from './context';
import * as restrictions from '../../services/branch-restrictions';
import { printJson } from '../../utils/pr-format';
import { printRestrictions, printRestriction } from '../../utils/branch-format';
import type { Branchrestriction } from '../../api/generated/bitbucket-api';

const collect = (value: string, previous: string[]) => [...previous, value];

/**
 * Builds a Branchrestriction body from flags, or parses a full JSON body when
 * `--body` is provided (for kinds with fields the flags do not cover).
 */
function buildBody(options: {
  body?: string;
  kind?: string;
  pattern?: string;
  branchType?: string;
  value?: string;
  user: string[];
  group: string[];
}): Branchrestriction {
  if (options.body) {
    try {
      return JSON.parse(options.body);
    } catch {
      consola.error('--body must be valid JSON.');
      process.exit(1);
    }
  }

  const body: Record<string, unknown> = {};
  if (options.kind) body.kind = options.kind;
  if (options.branchType) {
    body.branch_match_kind = 'branching_model';
    body.branch_type = options.branchType;
  } else if (options.pattern) {
    body.branch_match_kind = 'glob';
    body.pattern = options.pattern;
  }
  if (options.value !== undefined) body.value = Number(options.value);
  if (options.user.length) body.users = options.user.map((uuid) => ({ uuid }));
  if (options.group.length) body.groups = options.group.map((slug) => ({ slug }));
  return body as Branchrestriction;
}

function restrictionFlags(command: Command): Command {
  return command
    .option('--kind <kind>', 'Restriction kind (e.g. push, force, delete, require_approvals_to_merge)')
    .option('--pattern <glob>', 'Branch glob pattern (glob match)')
    .option('--branch-type <type>', 'Branch type for branching_model match (e.g. development, production)')
    .option('--value <n>', 'Numeric value (e.g. number of required approvals)')
    .option('--user <uuid>', 'Exempt user UUID; repeatable', collect, [])
    .option('--group <slug>', 'Exempt group slug; repeatable', collect, [])
    .option('--body <json>', 'Full restriction body as JSON (overrides the flags above)');
}

function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addRepoOptions(command))
    .description('List branch restriction rules')
    .option('--kind <kind>', 'Filter by restriction kind')
    .option('--pattern <pattern>', 'Filter by branch pattern')
    .option('-l, --limit <n>', 'Maximum rules to fetch', '50')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const rules = await restrictions.listRestrictions(api, ref, {
          kind: options.kind,
          pattern: options.pattern,
          limit: Number(options.limit) || undefined,
        });
        if (options.json) return printJson(rules);
        if (rules.length === 0) return consola.info('No branch restrictions found.');
        printRestrictions(rules);
      }),
    );
  return command;
}

function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addRepoOptions(command))
    .description('Show a branch restriction rule')
    .requiredOption('--id <id>', 'Restriction rule id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const rule = await restrictions.getRestriction(api, ref, options.id);
        if (options.json) return printJson(rule);
        printRestriction(rule);
      }),
    );
  return command;
}

function createCommand(): Command {
  const command = restrictionFlags(addJsonOption(addRepoOptions(new Command('create'))));
  command
    .description('Create a branch restriction rule')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const body = buildBody(options);
        if (!body.kind) {
          consola.error('A restriction kind is required (use --kind or --body).');
          process.exit(1);
        }
        const created = await restrictions.createRestriction(api, ref, body);
        if (options.json) return printJson(created);
        consola.success(`Created branch restriction #${created.id} (${created.kind})`);
        printRestriction(created);
      }),
    );
  return command;
}

function updateCommand(): Command {
  const command = restrictionFlags(addJsonOption(addRepoOptions(new Command('update'))));
  command
    .description('Update a branch restriction rule')
    .requiredOption('--id <id>', 'Restriction rule id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const body = buildBody(options);
        const updated = await restrictions.updateRestriction(api, ref, options.id, body);
        if (options.json) return printJson(updated);
        consola.success(`Updated branch restriction #${updated.id}`);
        printRestriction(updated);
      }),
    );
  return command;
}

function deleteCommand(): Command {
  const command = new Command('delete');
  addRepoOptions(command)
    .description('Delete a branch restriction rule')
    .requiredOption('--id <id>', 'Restriction rule id')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        if (!options.yes && !(await confirm(`Delete branch restriction #${options.id}?`))) {
          return consola.info('Cancelled.');
        }
        await restrictions.deleteRestriction(api, ref, options.id);
        consola.success(`Deleted branch restriction #${options.id}`);
      }),
    );
  return command;
}

/** The `branches restrictions` command group. */
export function restrictionsCommand(): Command {
  return new Command('restrictions')
    .description('Manage branch restriction rules')
    .addCommand(listCommand())
    .addCommand(getCommand())
    .addCommand(createCommand())
    .addCommand(updateCommand())
    .addCommand(deleteCommand());
}
