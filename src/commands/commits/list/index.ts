import { Command } from 'commander';
import { consola } from 'consola';
import { addJsonOption, addRepoOptions, runAction, resolveWorkspace } from '../../../utils/command';
import { getApi } from '../../../api/client';
import * as commits from '../../../services/commits';
import { printCommits, printJson } from '../../../utils/pr-format';
import type { BaseCommit } from '../../../api/generated/bitbucket-api';

const listCommand = new Command('list');

/** Parses a `--since` value, exiting on anything Date cannot read. */
function parseSince(value: string): Date {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    consola.error(`Invalid date: "${value}". Use YYYY-MM-DD.`);
    process.exit(1);
  }
  return date;
}

function matchesAuthor(commit: BaseCommit, needle: string): boolean {
  const author = `${commit.author?.raw ?? ''} ${commit.author?.user?.display_name ?? ''}`;
  return author.toLowerCase().includes(needle);
}

addJsonOption(addRepoOptions(listCommand))
  .description('List commits for a repository or branch')
  .option('-b, --branch <branch>', 'Branch, tag, or hash (defaults to every ref, like git log --all)')
  .option('-l, --limit <n>', 'Maximum commits to fetch', '20')
  .option('--author <author>', 'Filter by author name or email (case-insensitive substring, client-side)')
  .option('--since <since>', 'Only commits dated on or after this date (YYYY-MM-DD, client-side)')
  .action(
    runAction(async (options) => {
      const api = await getApi();
      let found = await commits.listCommits(
        api,
        { workspace: resolveWorkspace(options.workspace), repo: options.repo, revision: options.branch },
        { limit: Number(options.limit) || undefined },
      );

      // Both filters run over the newest `--limit` commits that were fetched, so they narrow
      // that window rather than searching further back through history.
      if (options.author) {
        const needle = options.author.toLowerCase();
        found = found.filter((commit) => matchesAuthor(commit, needle));
      }
      if (options.since) {
        const since = parseSince(options.since);
        found = found.filter((commit) => !!commit.date && new Date(commit.date) >= since);
      }

      if (options.json) return printJson(found);
      if (found.length === 0) return consola.info('No commits found matching the criteria.');
      printCommits(found);
    }),
  );

export { listCommand };
