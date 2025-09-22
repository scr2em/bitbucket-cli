import { Command } from 'commander';
import { consola } from 'consola';
import { getDefaultWorkspace } from '../../../utils/token';

const listCommand = new Command('list');

listCommand
  .description('List branches for a repository')
  .option('-w, --workspace <workspace>', 'Bitbucket workspace name (uses default if not specified)')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('--main', 'Show only main branch')
  .option('--feature', 'Show only feature branches')
  .option('--merged', 'Show only merged branches')
  .action(async (options) => {
    try {
      // Use default workspace if not provided
      const workspace = options.workspace || getDefaultWorkspace();
      if (!workspace) {
        consola.error('No workspace specified and no default workspace configured.');
        consola.info('Please specify a workspace with -w/--workspace or set a default workspace.');
        process.exit(1);
      }
      
      consola.info(`Listing branches for ${workspace}/${options.repo}`);
      
      // TODO: Implement branch listing
      consola.warn('Branch listing not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { listCommand };
