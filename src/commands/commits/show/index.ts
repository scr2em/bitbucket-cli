import { Command } from 'commander';
import { consola } from 'consola';

const showCommand = new Command('show');

showCommand
  .description('Show details of a specific commit')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .requiredOption('-c, --commit <commit>', 'Commit hash or short hash')
  .option('--diff', 'Show the diff for the commit')
  .option('--stat', 'Show file statistics for the commit')
  .action(async (options) => {
    try {
      consola.info(`Showing commit ${options.commit} for ${options.workspace}/${options.repo}`);
      
      // TODO: Implement commit details
      consola.warn('Commit details not implemented yet.');
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { showCommand };
