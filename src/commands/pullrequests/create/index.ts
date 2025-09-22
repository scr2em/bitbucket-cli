import { Command } from 'commander';
import { consola } from 'consola';

const createCommand = new Command('create');

createCommand
  .description('Create a new pull request')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .requiredOption('-s, --source <source>', 'Source branch')
  .requiredOption('-d, --destination <destination>', 'Destination branch')
  .option('-t, --title <title>', 'Pull request title')
  .option('-m, --message <message>', 'Pull request description')
  .action(async (options) => {
    try {
      consola.info(`Creating pull request for ${options.workspace}/${options.repo}`);
      consola.info(`Source: ${options.source} -> Destination: ${options.destination}`);
      
      // TODO: Implement pull request creation
      consola.warn('Pull request creation not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { createCommand };
