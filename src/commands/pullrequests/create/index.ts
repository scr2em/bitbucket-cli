import { Command } from 'commander';
import { consola } from 'consola';
import { getDefaultWorkspace } from '../../../utils/token';

const createCommand = new Command('create');

createCommand
  .description('Create a new pull request')
  .option('-w, --workspace <workspace>', 'Bitbucket workspace name (uses default if not specified)')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .requiredOption('-s, --source <source>', 'Source branch')
  .requiredOption('-d, --destination <destination>', 'Destination branch')
  .option('-t, --title <title>', 'Pull request title')
  .option('-m, --message <message>', 'Pull request description')
  .action(async (options) => {
    try {
      // Use default workspace if not provided
      const workspace = options.workspace || getDefaultWorkspace();
      if (!workspace) {
        consola.error('No workspace specified and no default workspace configured.');
        consola.info('Please specify a workspace with -w/--workspace or set a default workspace.');
        process.exit(1);
      }
      
      consola.info(`Creating pull request for ${workspace}/${options.repo}`);
      consola.info(`Source: ${options.source} -> Destination: ${options.destination}`);
      
      // TODO: Implement pull request creation
      consola.warn('Pull request creation not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { createCommand };
