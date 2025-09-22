import { Command } from 'commander';
import { consola } from 'consola';
import { getDefaultWorkspace } from '../../../utils/token';

const listCommand = new Command('list');

listCommand
  .description('List commits for a repository or branch')
  .option('-w, --workspace <workspace>', 'Bitbucket workspace name (uses default if not specified)')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('-b, --branch <branch>', 'Branch name (defaults to main)')
  .option('-l, --limit <limit>', 'Number of commits to show', '20')
  .option('--author <author>', 'Filter by author')
  .option('--since <since>', 'Show commits since date (YYYY-MM-DD)')
  .action(async (options) => {
    try {
      // Use default workspace if not provided
      const workspace = options.workspace || getDefaultWorkspace();
      if (!workspace) {
        consola.error('No workspace specified and no default workspace configured.');
        consola.info('Please specify a workspace with -w/--workspace or set a default workspace.');
        process.exit(1);
      }
      
      consola.info(`Listing commits for ${workspace}/${options.repo}`);
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
