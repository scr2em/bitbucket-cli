import { Command } from 'commander';
import { consola } from 'consola';
import { addJsonOption, runAction, resolveWorkspace } from '../../../utils/command';
import { getApi } from '../../../api/client';
import * as repositories from '../../../services/repositories';
import { printJson } from '../../../utils/pr-format';
import { printRepositoryList } from '../../../utils/repo-format';

const listCommand = new Command('list');

function resolveRole(options: { admin?: boolean; member?: boolean; contributor?: boolean; owner?: boolean }): repositories.Role | undefined {
  if (options.admin) return 'admin';
  if (options.member) return 'member';
  if (options.contributor) return 'contributor';
  if (options.owner) return 'owner';
  return undefined;
}

addJsonOption(listCommand)
  .description('List repositories in a workspace')
  .option('-w, --workspace <workspace>', 'Bitbucket workspace (uses configured default if omitted)')
  .option('--all', 'List every repository you can access, across all workspaces')
  .option('-f, --filter <filter>', 'Filter by name (case-insensitive substring, client-side)')
  .option('-q, --query <query>', 'Bitbucket filter expression (server-side; requires a role)')
  .option('--sort <field>', 'Sort field (e.g. -updated_on, name)')
  .option('-l, --limit <n>', 'Maximum repositories to fetch', '50')
  .option('--admin', 'Only repositories where you have admin access')
  .option('--member', 'Only repositories where you have read access')
  .option('--contributor', 'Only repositories where you have write access')
  .option('--owner', 'Only repositories you own')
  .action(
    runAction(async (options) => {
      const role = resolveRole(options);
      const listOptions = { role, query: options.query, sort: options.sort, limit: Number(options.limit) || undefined };

      const api = await getApi();
      let repos = options.all
        ? await repositories.listAccessibleRepositories(api, listOptions)
        : await repositories.listRepositories(api, resolveWorkspace(options.workspace), listOptions);

      if (options.filter) {
        const needle = options.filter.toLowerCase();
        repos = repos.filter((repo) => (repo.name ?? '').toLowerCase().includes(needle));
      }

      if (options.json) return printJson(repos);
      if (repos.length === 0) return consola.info('No repositories found matching the criteria.');
      printRepositoryList(repos);
    }),
  );

export { listCommand };
