import { Command } from 'commander';
import { consola } from 'consola';
import { addRepoOptions, addJsonOption, runAction, confirm } from '../../utils/command';
import { refRepoContext } from './context';
import * as refs from '../../services/refs';
import { printJson } from '../../utils/pr-format';
import { printRefs, printTag } from '../../utils/ref-format';

function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addRepoOptions(command))
    .description('List tags')
    .option('-q, --query <query>', 'Bitbucket filter expression (e.g. \'name ~ "v1"\')')
    .option('--sort <field>', 'Sort field (e.g. name, -target.date)')
    .option('-l, --limit <n>', 'Maximum tags to fetch', '50')
    .action(
      runAction(async (options) => {
        const { api, ref } = await refRepoContext(options);
        const tags = await refs.listTags(api, ref, {
          query: options.query,
          sort: options.sort,
          limit: Number(options.limit) || undefined,
        });
        if (options.json) return printJson(tags);
        if (tags.length === 0) return consola.info('No tags found.');
        printRefs(tags, 'tag');
      }),
    );
  return command;
}

function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addRepoOptions(command))
    .description('Show a tag')
    .requiredOption('-n, --name <name>', 'Tag name')
    .action(
      runAction(async (options) => {
        const { api, ref } = await refRepoContext(options);
        const tag = await refs.getTag(api, ref, options.name);
        if (options.json) return printJson(tag);
        printTag(tag);
      }),
    );
  return command;
}

function createCommand(): Command {
  const command = new Command('create');
  addJsonOption(addRepoOptions(command))
    .description('Create a tag')
    .requiredOption('-n, --name <name>', 'New tag name')
    .requiredOption('--target <hash>', 'Commit hash the tag points to')
    .option('-m, --message <text>', 'Annotation message')
    .action(
      runAction(async (options) => {
        const { api, ref } = await refRepoContext(options);
        const tag = await refs.createTag(api, ref, options.name, options.target, options.message);
        if (options.json) return printJson(tag);
        consola.success(`Created tag '${tag.name}'`);
        printTag(tag);
      }),
    );
  return command;
}

function deleteCommand(): Command {
  const command = new Command('delete');
  addRepoOptions(command)
    .description('Delete a tag')
    .requiredOption('-n, --name <name>', 'Tag name')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await refRepoContext(options);
        if (!options.yes && !(await confirm(`Delete tag '${options.name}'?`))) {
          return consola.info('Cancelled.');
        }
        await refs.deleteTag(api, ref, options.name);
        consola.success(`Deleted tag '${options.name}'`);
      }),
    );
  return command;
}

/** The `refs tags` command group. */
export function tagsCommand(): Command {
  return new Command('tags')
    .description('Manage repository tags')
    .addCommand(listCommand())
    .addCommand(getCommand())
    .addCommand(createCommand())
    .addCommand(deleteCommand());
}
