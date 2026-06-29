import { Command } from 'commander';
import { consola } from 'consola';
import { addRepoOptions, addJsonOption, runAction, confirm } from '../../utils/command';
import { branchRepoContext } from './context';
import * as refs from '../../services/refs';
import { printJson } from '../../utils/pr-format';
import { printRefs, printBranch } from '../../utils/ref-format';

export function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addRepoOptions(command))
    .description('List branches')
    .option('-q, --query <query>', 'Bitbucket filter expression (e.g. \'name ~ "release"\')')
    .option('--sort <field>', 'Sort field (e.g. name, -target.date)')
    .option('-l, --limit <n>', 'Maximum branches to fetch', '50')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const branches = await refs.listBranches(api, ref, {
          query: options.query,
          sort: options.sort,
          limit: Number(options.limit) || undefined,
        });
        if (options.json) return printJson(branches);
        if (branches.length === 0) return consola.info('No branches found.');
        printRefs(branches, 'branch');
      }),
    );
  return command;
}

export function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addRepoOptions(command))
    .description('Show a branch')
    .requiredOption('-n, --name <name>', 'Branch name')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const branch = await refs.getBranch(api, ref, options.name);
        if (options.json) return printJson(branch);
        printBranch(branch);
      }),
    );
  return command;
}

export function createCommand(): Command {
  const command = new Command('create');
  addJsonOption(addRepoOptions(command))
    .description('Create a branch')
    .requiredOption('-n, --name <name>', 'New branch name')
    .requiredOption('-f, --from <target>', 'Source commit hash or branch name to branch from')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const branch = await refs.createBranch(api, ref, options.name, options.from);
        if (options.json) return printJson(branch);
        consola.success(`Created branch '${branch.name}'`);
        printBranch(branch);
      }),
    );
  return command;
}

export function deleteCommand(): Command {
  const command = new Command('delete');
  addRepoOptions(command)
    .description('Delete a branch')
    .requiredOption('-n, --name <name>', 'Branch name')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        if (!options.yes && !(await confirm(`Delete branch '${options.name}'?`))) {
          return consola.info('Cancelled.');
        }
        await refs.deleteBranch(api, ref, options.name);
        consola.success(`Deleted branch '${options.name}'`);
      }),
    );
  return command;
}
