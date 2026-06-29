import { Command } from 'commander';
import { consola } from 'consola';
import { addRepoOptions, addPrOptions, addJsonOption, runAction, parseId, resolveWorkspace } from '../../utils/command';
import { getApi } from '../../api/client';
import { prContext } from './context';
import * as prs from '../../services/pullrequests';
import { viewPullRequestDiff } from '../../utils/actions';
import {
  printJson,
  printCommits,
  printStatuses,
  printDiffstat,
  printActivity,
} from '../../utils/pr-format';

export function diffCommand(): Command {
  const command = new Command('diff');
  addPrOptions(command)
    .description('View the diff for a pull request')
    .option('--raw', 'Print the raw unified diff instead of the rich split view')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const diff = await prs.getDiff(api, ref);
        if (options.raw) {
          process.stdout.write(diff);
          return;
        }
        await viewPullRequestDiff(ref.prId, diff);
      }),
    );
  return command;
}

export function patchCommand(): Command {
  const command = new Command('patch');
  addPrOptions(command)
    .description('Print the patch (diff with commit metadata) for a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const patch = await prs.getPatch(api, ref);
        process.stdout.write(patch);
      }),
    );
  return command;
}

export function diffstatCommand(): Command {
  const command = new Command('diffstat');
  addJsonOption(addPrOptions(command))
    .description('Show the per-file change summary for a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const entries = await prs.getDiffstat(api, ref);
        if (options.json) return printJson(entries);
        printDiffstat(entries as never[]);
      }),
    );
  return command;
}

export function commitsCommand(): Command {
  const command = new Command('commits');
  addJsonOption(addPrOptions(command))
    .description('List the commits in a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const commits = await prs.listCommits(api, ref);
        if (options.json) return printJson(commits);
        printCommits(commits as never[]);
      }),
    );
  return command;
}

export function conflictsCommand(): Command {
  const command = new Command('conflicts');
  addJsonOption(addPrOptions(command))
    .description('List file conflicts for a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const conflicts = await prs.getConflicts(api, ref);
        if (options.json) return printJson(conflicts);
        if (conflicts.length === 0) return consola.success('No conflicts.');
        consola.warn(`${conflicts.length} conflict(s):`);
        conflicts.forEach((conflict) => {
          const entry = conflict as { path?: string; type?: string };
          consola.log(`   ${entry.type ?? 'conflict'}  ${entry.path ?? JSON.stringify(conflict)}`);
        });
      }),
    );
  return command;
}

export function statusesCommand(): Command {
  const command = new Command('statuses');
  addJsonOption(addPrOptions(command))
    .description('List build/commit statuses for a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const statuses = await prs.listStatuses(api, ref);
        if (options.json) return printJson(statuses);
        if (statuses.length === 0) return consola.info('No statuses found.');
        printStatuses(statuses as never[]);
      }),
    );
  return command;
}

export function activityCommand(): Command {
  const command = new Command('activity');
  addJsonOption(addRepoOptions(command))
    .description('Show the activity log for a pull request, or the whole repository')
    .option('-p, --pr <id>', 'Pull request id (omit for repository-wide activity)')
    .action(
      runAction(async (options) => {
        // Activity is repo-scoped; the PR id is optional, so resolve manually.
        const workspace = resolveWorkspace(options.workspace);
        const api = await getApi();
        const result = options.pr
          ? await prs.listActivity(api, { workspace, repo: options.repo, prId: parseId(options.pr, 'pull request id') })
          : await prs.listRepoActivity(api, { workspace, repo: options.repo });

        if (options.json) return printJson(result);
        if (result.length === 0) return consola.info('No activity found.');
        printActivity(result as never[]);
      }),
    );
  return command;
}
