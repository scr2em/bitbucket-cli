import { Command } from 'commander';
import { listCommand } from './list';
import { showCommand } from './show';

const commitsCommand = new Command('commits');

commitsCommand
  .description('Commit management commands')
  .addCommand(listCommand)
  .addCommand(showCommand);

export { commitsCommand };
