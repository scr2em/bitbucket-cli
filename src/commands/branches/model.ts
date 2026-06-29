import { Command } from 'commander';
import { consola } from 'consola';
import { addRepoOptions, addJsonOption, runAction, resolveWorkspace } from '../../utils/command';
import { getApi } from '../../api/client';
import { branchRepoContext } from './context';
import * as model from '../../services/branching-model';
import { printJson } from '../../utils/pr-format';
import { printBranchingModel } from '../../utils/branch-format';
import type { BranchingModelSettings } from '../../api/generated/bitbucket-api';

function parseBody(raw: string): BranchingModelSettings {
  try {
    return JSON.parse(raw);
  } catch {
    consola.error('--body must be valid JSON.');
    process.exit(1);
  }
}

// --- repository-level -----------------------------------------------------

function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addRepoOptions(command))
    .description('Get the active branching model for a repository')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const result = await model.getModel(api, ref);
        if (options.json) return printJson(result);
        printBranchingModel(result, `Branching model for ${ref.repo}`);
      }),
    );
  return command;
}

function effectiveCommand(): Command {
  const command = new Command('effective');
  addJsonOption(addRepoOptions(command))
    .description('Get the effective (currently applied) branching model for a repository')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const result = await model.getEffectiveModel(api, ref);
        if (options.json) return printJson(result);
        printBranchingModel(result, `Effective branching model for ${ref.repo}`);
      }),
    );
  return command;
}

function settingsCommand(): Command {
  const command = new Command('settings');
  addJsonOption(addRepoOptions(command))
    .description('Get the branching model configuration for a repository')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const result = await model.getSettings(api, ref);
        if (options.json) return printJson(result);
        printBranchingModel(result, `Branching model settings for ${ref.repo}`);
      }),
    );
  return command;
}

function updateSettingsCommand(): Command {
  const command = new Command('update-settings');
  addJsonOption(addRepoOptions(command))
    .description('Update the branching model configuration for a repository')
    .requiredOption('--body <json>', 'Settings body as JSON (development, production, branch_types, default_branch_deletion)')
    .action(
      runAction(async (options) => {
        const { api, ref } = await branchRepoContext(options);
        const result = await model.updateSettings(api, ref, parseBody(options.body));
        if (options.json) return printJson(result);
        consola.success(`Updated branching model settings for ${ref.repo}`);
        printBranchingModel(result, 'Updated settings');
      }),
    );
  return command;
}

// --- project-level --------------------------------------------------------

function projectGetCommand(): Command {
  const command = new Command('project-get');
  addJsonOption(command)
    .description('Get the branching model for a project')
    .option('-w, --workspace <workspace>', 'Bitbucket workspace (uses configured default if omitted)')
    .requiredOption('--project <key>', 'Project key')
    .action(
      runAction(async (options) => {
        const workspace = resolveWorkspace(options.workspace);
        const api = await getApi();
        const result = await model.getProjectModel(api, workspace, options.project);
        if (options.json) return printJson(result);
        printBranchingModel(result, `Branching model for project ${options.project}`);
      }),
    );
  return command;
}

function projectSettingsCommand(): Command {
  const command = new Command('project-settings');
  addJsonOption(command)
    .description('Get the branching model configuration for a project')
    .option('-w, --workspace <workspace>', 'Bitbucket workspace (uses configured default if omitted)')
    .requiredOption('--project <key>', 'Project key')
    .action(
      runAction(async (options) => {
        const workspace = resolveWorkspace(options.workspace);
        const api = await getApi();
        const result = await model.getProjectSettings(api, workspace, options.project);
        if (options.json) return printJson(result);
        printBranchingModel(result, `Branching model settings for project ${options.project}`);
      }),
    );
  return command;
}

function projectUpdateSettingsCommand(): Command {
  const command = new Command('project-update-settings');
  addJsonOption(command)
    .description('Update the branching model configuration for a project')
    .option('-w, --workspace <workspace>', 'Bitbucket workspace (uses configured default if omitted)')
    .requiredOption('--project <key>', 'Project key')
    .requiredOption('--body <json>', 'Settings body as JSON')
    .action(
      runAction(async (options) => {
        const workspace = resolveWorkspace(options.workspace);
        const api = await getApi();
        const result = await model.updateProjectSettings(api, workspace, options.project, parseBody(options.body));
        if (options.json) return printJson(result);
        consola.success(`Updated branching model settings for project ${options.project}`);
        printBranchingModel(result, 'Updated settings');
      }),
    );
  return command;
}

/** The `branches model` command group. */
export function modelCommand(): Command {
  return new Command('model')
    .description('Inspect and configure the branching model (repository and project)')
    .addCommand(getCommand())
    .addCommand(effectiveCommand())
    .addCommand(settingsCommand())
    .addCommand(updateSettingsCommand())
    .addCommand(projectGetCommand())
    .addCommand(projectSettingsCommand())
    .addCommand(projectUpdateSettingsCommand());
}
