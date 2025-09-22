import { Command } from 'commander';
import { consola } from 'consola';

const listCommand = new Command('list');

listCommand
  .description('List branches for a repository')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('--main', 'Show only main branch')
  .option('--feature', 'Show only feature branches')
  .option('--merged', 'Show only merged branches')
  .action(async (options) => {
    try {
      consola.info(`Listing branches for ${options.workspace}/${options.repo}`);
      
      // TODO: Implement branch listing
      consola.warn('Branch listing not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { listCommand };
