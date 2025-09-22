import { Command } from 'commander';
import { consola } from 'consola';

const listCommand = new Command('list');

listCommand
  .description('List commits for a repository or branch')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('-b, --branch <branch>', 'Branch name (defaults to main)')
  .option('-l, --limit <limit>', 'Number of commits to show', '20')
  .option('--author <author>', 'Filter by author')
  .option('--since <since>', 'Show commits since date (YYYY-MM-DD)')
  .action(async (options) => {
    try {
      consola.info(`Listing commits for ${options.workspace}/${options.repo}`);
      if (options.branch) {
        consola.info(`Branch: ${options.branch}`);
      }
      consola.info(`Limit: ${options.limit}`);
      
      // TODO: Implement commit listing
      consola.warn('Commit listing not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { listCommand };
