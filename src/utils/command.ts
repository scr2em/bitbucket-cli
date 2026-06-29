import { Command } from 'commander';
import { consola } from 'consola';
import inquirer from 'inquirer';
import { getDefaultWorkspace } from './token';

/**
 * Resolves the workspace from an explicit `--workspace` flag, falling back to
 * the configured default. Exits with a helpful message when neither is set.
 */
export function resolveWorkspace(explicit?: string): string {
  const workspace = explicit || getDefaultWorkspace();
  if (!workspace) {
    consola.error('No workspace specified and no default workspace configured.');
    consola.info('Pass -w/--workspace, or set a default with: bitbucket config set-workspace');
    process.exit(1);
  }
  return workspace;
}

/** Parses a positive-integer id (PR id, comment id, task id), exiting on bad input. */
export function parseId(value: string, label = 'id'): number {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    consola.error(`Invalid ${label}: "${value}". Provide a positive integer.`);
    process.exit(1);
  }
  return parsed;
}

/**
 * Wraps a command action with consistent error handling so every subcommand
 * does not repeat the same try/catch/exit boilerplate.
 */
export function runAction<TArgs extends unknown[]>(
  action: (...args: TArgs) => Promise<void>,
): (...args: TArgs) => Promise<void> {
  return async (...args: TArgs) => {
    try {
      await action(...args);
    } catch (error) {
      consola.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  };
}

/** Yes/no prompt used to guard destructive actions. */
export async function confirm(message: string, defaultValue = false): Promise<boolean> {
  const { confirmed } = await inquirer.prompt([
    { type: 'confirm', name: 'confirmed', message, default: defaultValue },
  ]);
  return confirmed;
}

/** Single-line text prompt with optional default and required validation. */
export async function prompt(message: string, options: { default?: string; required?: boolean } = {}): Promise<string> {
  const { value } = await inquirer.prompt([
    {
      type: 'input',
      name: 'value',
      message,
      default: options.default,
      validate: (input: string) =>
        options.required && !input.trim() ? 'This value is required.' : true,
    },
  ]);
  return value;
}

/** Opens the user's $EDITOR to compose multi-line content (PR/comment bodies). */
export async function editor(message: string, defaultValue = ''): Promise<string> {
  const { value } = await inquirer.prompt([
    { type: 'editor', name: 'value', message, default: defaultValue },
  ]);
  return value;
}

/**
 * Adds the `-w/--workspace` and `-r/--repo` options shared by every
 * repository-scoped command. Returns the command for chaining.
 */
export function addRepoOptions(command: Command): Command {
  return command
    .option('-w, --workspace <workspace>', 'Bitbucket workspace (uses configured default if omitted)')
    .requiredOption('-r, --repo <repo>', 'Repository name');
}

/** Adds repo options plus the required `-p/--pr` pull-request id. */
export function addPrOptions(command: Command): Command {
  return addRepoOptions(command).requiredOption('-p, --pr <id>', 'Pull request id');
}

/** Adds the `--json` flag used by read commands for machine-readable output. */
export function addJsonOption(command: Command): Command {
  return command.option('--json', 'Output raw JSON');
}
