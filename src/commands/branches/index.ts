import { Command } from 'commander';
import { listCommand } from './list';
import { createCommand } from './create';
import { deleteCommand } from './delete';

const branchesCommand = new Command('branches');

branchesCommand
  .description('Branch management commands')
  .addCommand(listCommand)
  .addCommand(createCommand)
  .addCommand(deleteCommand);

export { branchesCommand };
