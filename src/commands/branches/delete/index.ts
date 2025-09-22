import { Command } from 'commander';
import { consola } from 'consola';

const deleteCommand = new Command('delete');

deleteCommand
  .description('Delete a branch')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .requiredOption('-n, --name <name>', 'Branch name to delete')
  .option('--force', 'Force delete without confirmation')
  .action(async (options) => {
    try {
      consola.info(`Deleting branch ${options.name} from ${options.workspace}/${options.repo}`);
      
      // TODO: Implement branch deletion
      consola.warn('Branch deletion not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { deleteCommand };
