import { Command } from 'commander';
import { consola } from 'consola';
import { addPrOptions, addJsonOption, runAction, confirm } from '../../utils/command';
import { prContext } from './context';
import * as prs from '../../services/pullrequests';
import { printJson } from '../../utils/pr-format';
import type { ApplicationProperty } from '../../api/generated/bitbucket-api';

function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addPrOptions(command))
    .description('Get a pull request application property')
    .requiredOption('--app-key <key>', 'Connect app key')
    .requiredOption('--name <name>', 'Property name')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const value = await prs.getProperty(api, ref, options.appKey, options.name);
        if (options.json) return printJson(value);
        consola.log(JSON.stringify(value, null, 2));
      }),
    );
  return command;
}

function setCommand(): Command {
  const command = new Command('set');
  addPrOptions(command)
    .description('Create or update a pull request application property')
    .requiredOption('--app-key <key>', 'Connect app key')
    .requiredOption('--name <name>', 'Property name')
    .requiredOption('--value <json>', 'Property value as a JSON object')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        let value: ApplicationProperty;
        try {
          value = JSON.parse(options.value);
        } catch {
          consola.error('--value must be valid JSON.');
          process.exit(1);
        }
        await prs.setProperty(api, ref, options.appKey, options.name, value);
        consola.success(`Set property ${options.appKey}/${options.name} on pull request #${ref.prId}`);
      }),
    );
  return command;
}

function deleteCommand(): Command {
  const command = new Command('delete');
  addPrOptions(command)
    .description('Delete a pull request application property')
    .requiredOption('--app-key <key>', 'Connect app key')
    .requiredOption('--name <name>', 'Property name')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        if (!options.yes && !(await confirm(`Delete property ${options.appKey}/${options.name}?`))) {
          return consola.info('Cancelled.');
        }
        await prs.deleteProperty(api, ref, options.appKey, options.name);
        consola.success(`Deleted property ${options.appKey}/${options.name}`);
      }),
    );
  return command;
}

/** The `pr properties` command group (Connect app properties). */
export function propertiesCommand(): Command {
  return new Command('properties')
    .description('Manage pull request application properties (Connect apps)')
    .addCommand(getCommand())
    .addCommand(setCommand())
    .addCommand(deleteCommand());
}
