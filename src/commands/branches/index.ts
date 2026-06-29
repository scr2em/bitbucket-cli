import { Command } from 'commander';
import { listCommand, getCommand, createCommand, deleteCommand } from './crud';
import { restrictionsCommand } from './restrictions';
import { modelCommand } from './model';

const branchesCommand = new Command('branches');

branchesCommand
  .description('Branch management: branches, restrictions, and branching model')
  // Branch CRUD (Refs API)
  .addCommand(listCommand())
  .addCommand(getCommand())
  .addCommand(createCommand())
  .addCommand(deleteCommand())
  // Grouped resources
  .addCommand(restrictionsCommand())
  .addCommand(modelCommand());

export { branchesCommand };
