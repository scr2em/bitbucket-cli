import { Command } from 'commander';
import { consola } from 'consola';
import { addRepoOptions, addJsonOption, runAction } from '../../utils/command';
import { refRepoContext } from './context';
import * as refs from '../../services/refs';
import { printJson } from '../../utils/pr-format';
import { printRefs } from '../../utils/ref-format';
import { branchesCommand } from './branches';
import { tagsCommand } from './tags';

function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addRepoOptions(command))
    .description('List all branches and tags')
    .option('-q, --query <query>', 'Bitbucket filter expression')
    .option('--sort <field>', 'Sort field (e.g. name)')
    .option('-l, --limit <n>', 'Maximum refs to fetch', '50')
    .action(
      runAction(async (options) => {
        const { api, ref } = await refRepoContext(options);
        const allRefs = await refs.listRefs(api, ref, {
          query: options.query,
          sort: options.sort,
          limit: Number(options.limit) || undefined,
        });
        if (options.json) return printJson(allRefs);
        if (allRefs.length === 0) return consola.info('No refs found.');
        printRefs(allRefs, 'ref');
      }),
    );
  return command;
}

const refsCommand = new Command('refs');

refsCommand
  .description('Branch and tag (refs) management commands')
  .addCommand(listCommand())
  .addCommand(branchesCommand())
  .addCommand(tagsCommand());

export { refsCommand };
