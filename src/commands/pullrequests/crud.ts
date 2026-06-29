import { Command } from 'commander';
import { consola } from 'consola';
import {
  addRepoOptions,
  addPrOptions,
  addJsonOption,
  runAction,
  resolveWorkspace,
  prompt,
} from '../../utils/command';
import { getApi } from '../../api/client';
import { repoContext, prContext } from './context';
import * as prs from '../../services/pullrequests';
import { printJson, printPullRequestList, printPullRequestDetails } from '../../utils/pr-format';
import type { Pullrequest } from '../../api/generated/bitbucket-api';

const STATES = ['OPEN', 'MERGED', 'DECLINED', 'SUPERSEDED'] as const;
type State = (typeof STATES)[number];

function collectState(value: string, previous: State[]): State[] {
  const upper = value.toUpperCase() as State;
  if (!STATES.includes(upper)) {
    consola.error(`Invalid state "${value}". Expected one of: ${STATES.join(', ')}.`);
    process.exit(1);
  }
  return [...previous, upper];
}

export function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addRepoOptions(command))
    .description('List pull requests for a repository')
    .option('--state <state>', 'Filter by state (OPEN, MERGED, DECLINED, SUPERSEDED); repeatable', collectState, [])
    .option('--all', 'Include pull requests in every state')
    .option('-q, --query <query>', 'Bitbucket filter expression (e.g. \'author.nickname="jdoe"\')')
    .option('--sort <field>', 'Sort field (e.g. -updated_on)')
    .option('--commit <hash>', 'Only list pull requests that contain this commit')
    .option('-l, --limit <n>', 'Maximum pull requests to fetch', '25')
    .action(
      runAction(async (options) => {
        const { api, ref } = await repoContext(options);
        const limit = Number(options.limit) || undefined;

        const pullRequests = options.commit
          ? await prs.listPullRequestsForCommit(api, ref, options.commit, { limit })
          : await prs.listPullRequests(api, ref, {
              state: options.all ? [...STATES] : options.state.length ? options.state : undefined,
              query: options.query,
              sort: options.sort,
              limit,
            });

        if (options.json) return printJson(pullRequests);
        if (pullRequests.length === 0) return consola.info('No pull requests found.');
        printPullRequestList(pullRequests);
      }),
    );
  return command;
}

export function authoredCommand(): Command {
  const command = new Command('authored');
  addJsonOption(command)
    .description('List workspace pull requests authored by a user')
    .option('-w, --workspace <workspace>', 'Bitbucket workspace (uses configured default if omitted)')
    .requiredOption('-u, --user <user>', 'Account id or UUID of the author')
    .option('--state <state>', 'Filter by state (OPEN, MERGED, DECLINED, SUPERSEDED); repeatable', collectState, [])
    .option('--all', 'Include pull requests in every state')
    .option('-l, --limit <n>', 'Maximum pull requests to fetch', '25')
    .action(
      runAction(async (options) => {
        const workspace = resolveWorkspace(options.workspace);
        const api = await getApi();
        const pullRequests = await prs.listUserPullRequests(api, workspace, options.user, {
          state: options.all ? [...STATES] : options.state.length ? options.state : undefined,
          limit: Number(options.limit) || undefined,
        });

        if (options.json) return printJson(pullRequests);
        if (pullRequests.length === 0) return consola.info('No pull requests found.');
        printPullRequestList(pullRequests);
      }),
    );
  return command;
}

export function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addPrOptions(command))
    .description('Show details of a pull request')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const pr = await prs.getPullRequest(api, ref);
        if (options.json) return printJson(pr);
        printPullRequestDetails(pr);
      }),
    );
  return command;
}

export function createCommand(): Command {
  const command = new Command('create');
  addJsonOption(addRepoOptions(command))
    .description('Create a new pull request')
    .requiredOption('-s, --source <branch>', 'Source branch')
    .option('-d, --destination <branch>', 'Destination branch (defaults to the repository main branch)')
    .option('-t, --title <title>', 'Pull request title (prompted if omitted)')
    .option('-m, --description <text>', 'Pull request description')
    .option('--reviewer <uuid>', 'Reviewer account UUID; repeatable', (v: string, acc: string[]) => [...acc, v], [])
    .option('--close-source-branch', 'Close the source branch after merge')
    .option('--draft', 'Create the pull request as a draft')
    .action(
      runAction(async (options) => {
        const { api, ref } = await repoContext(options);

        const title = options.title || (await prompt('Pull request title', { required: true }));

        const body = {
          title,
          source: { branch: { name: options.source } },
          ...(options.destination ? { destination: { branch: { name: options.destination } } } : {}),
          ...(options.description ? { description: options.description } : {}),
          ...(options.reviewer.length ? { reviewers: options.reviewer.map((uuid: string) => ({ uuid })) } : {}),
          ...(options.closeSourceBranch ? { close_source_branch: true } : {}),
          ...(options.draft ? { draft: true } : {}),
        } as Pullrequest;

        const created = await prs.createPullRequest(api, ref, body);
        if (options.json) return printJson(created);
        consola.success(`Created pull request #${created.id}`);
        printPullRequestDetails(created);
      }),
    );
  return command;
}

export function updateCommand(): Command {
  const command = new Command('update');
  addJsonOption(addPrOptions(command))
    .description('Update a pull request (title, description, or destination branch)')
    .option('-t, --title <title>', 'New title')
    .option('-m, --description <text>', 'New description')
    .option('-d, --destination <branch>', 'New destination branch')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);

        if (!options.title && options.description === undefined && !options.destination) {
          consola.error('Nothing to update. Provide --title, --description, and/or --destination.');
          process.exit(1);
        }

        const body = {
          ...(options.title ? { title: options.title } : {}),
          ...(options.description !== undefined ? { description: options.description } : {}),
          ...(options.destination ? { destination: { branch: { name: options.destination } } } : {}),
        } as Pullrequest;

        const updated = await prs.updatePullRequest(api, ref, body);
        if (options.json) return printJson(updated);
        consola.success(`Updated pull request #${updated.id}`);
        printPullRequestDetails(updated);
      }),
    );
  return command;
}
