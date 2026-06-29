import { Command } from 'commander';
import { consola } from 'consola';
import { addPrOptions, addJsonOption, runAction, confirm } from '../../utils/command';
import { prContext } from './context';
import * as prs from '../../services/pullrequests';
import { printJson, printPullRequestDetails } from '../../utils/pr-format';
import type { PullrequestMergeParameters } from '../../api/generated/bitbucket-api';

export function approveCommand(): Command {
  const command = new Command('approve');
  addPrOptions(command)
    .description('Approve a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        await prs.approve(api, ref);
        consola.success(`Approved pull request #${ref.prId}`);
      }),
    );
  return command;
}

export function unapproveCommand(): Command {
  const command = new Command('unapprove');
  addPrOptions(command)
    .description('Remove your approval from a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        await prs.unapprove(api, ref);
        consola.success(`Removed approval from pull request #${ref.prId}`);
      }),
    );
  return command;
}

export function requestChangesCommand(): Command {
  const command = new Command('request-changes');
  addPrOptions(command)
    .description('Request changes on a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        await prs.requestChanges(api, ref);
        consola.success(`Requested changes on pull request #${ref.prId}`);
      }),
    );
  return command;
}

export function unrequestChangesCommand(): Command {
  const command = new Command('unrequest-changes');
  addPrOptions(command)
    .description('Remove your change request from a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        await prs.removeChangeRequest(api, ref);
        consola.success(`Removed change request from pull request #${ref.prId}`);
      }),
    );
  return command;
}

export function declineCommand(): Command {
  const command = new Command('decline');
  addJsonOption(addPrOptions(command))
    .description('Decline (reject) a pull request')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        if (!options.yes && !(await confirm(`Decline pull request #${ref.prId}?`))) {
          return consola.info('Cancelled.');
        }
        const declined = await prs.decline(api, ref);
        if (options.json) return printJson(declined);
        consola.success(`Declined pull request #${ref.prId}`);
      }),
    );
  return command;
}

const MERGE_STRATEGIES = ['merge_commit', 'squash', 'fast_forward', 'squash_fast_forward', 'rebase_fast_forward', 'rebase_merge'];

export function mergeCommand(): Command {
  const command = new Command('merge');
  addJsonOption(addPrOptions(command))
    .description('Merge a pull request')
    .option('--strategy <strategy>', `Merge strategy (${MERGE_STRATEGIES.join(', ')})`)
    .option('-m, --message <message>', 'Commit message for the merge')
    .option('--close-source-branch', 'Close the source branch after merging')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);

        if (options.strategy && !MERGE_STRATEGIES.includes(options.strategy)) {
          consola.error(`Invalid strategy "${options.strategy}". Expected one of: ${MERGE_STRATEGIES.join(', ')}.`);
          process.exit(1);
        }
        if (!options.yes && !(await confirm(`Merge pull request #${ref.prId}?`))) {
          return consola.info('Cancelled.');
        }

        const merged = await prs.merge(api, ref, {
          message: options.message,
          closeSourceBranch: options.closeSourceBranch,
          mergeStrategy: options.strategy as PullrequestMergeParameters['merge_strategy'],
        });
        if (options.json) return printJson(merged);
        consola.success(`Merged pull request #${ref.prId}`);
        printPullRequestDetails(merged);
      }),
    );
  return command;
}

export function mergeStatusCommand(): Command {
  const command = new Command('merge-status');
  addJsonOption(addPrOptions(command))
    .description('Check the status of an asynchronous merge task')
    .requiredOption('--task <id>', 'Merge task id returned by an async merge')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const status = await prs.getMergeStatus(api, ref, options.task);
        if (options.json) return printJson(status);
        const result = status as { task_status?: string };
        consola.info(`Merge task status: ${result.task_status ?? JSON.stringify(status)}`);
      }),
    );
  return command;
}
