import { Command } from 'commander';
import { consola } from 'consola';

const listCommand = new Command('list');

listCommand
  .description('List pull requests for a repository')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('--state <state>', 'Filter by state (open, merged, declined, superseded)', 'open')
  .action(async (options) => {
    try {
      consola.info(`Listing pull requests for ${options.workspace}/${options.repo}`);
      consola.info(`State filter: ${options.state}`);
      
      // TODO: Implement pull request listing
      consola.warn('Pull request listing not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { listCommand };
