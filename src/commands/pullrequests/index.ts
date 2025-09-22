import { Command } from 'commander';
import { listCommand } from './list';
import { createCommand } from './create';

const pullRequestsCommand = new Command('pr');

pullRequestsCommand
  .description('Pull request management commands')
  .addCommand(listCommand)
  .addCommand(createCommand);

export { pullRequestsCommand };
