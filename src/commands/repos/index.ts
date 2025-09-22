import { Command } from 'commander';
import { listCommand } from './list';
import { cloneCommand } from './clone';

const reposCommand = new Command('repos');

reposCommand
  .description('Repository management commands')
  .addCommand(listCommand)
  .addCommand(cloneCommand);

export { reposCommand };
