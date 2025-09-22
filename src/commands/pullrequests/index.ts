import { Command } from 'commander';
import { listCommand } from './list';
import { createCommand } from './create';
import { diffCommand } from './diff';

const pullRequestsCommand = new Command('pr');

pullRequestsCommand
  .description('Pull request management commands')
  .addCommand(listCommand)
  .addCommand(createCommand)
  .addCommand(diffCommand);

export { pullRequestsCommand };
