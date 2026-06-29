import { Command } from 'commander';
import { listCommand } from './list';

const reposCommand = new Command('repos');

reposCommand
  .description('Repository management commands')
  .addCommand(listCommand)

export { reposCommand };
