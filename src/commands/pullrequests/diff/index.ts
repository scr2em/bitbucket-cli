import { Command } from 'commander';
import { consola } from 'consola';
import { getPullRequestDiff } from '../../../services/bitbucket';
import { getToken, getDefaultWorkspace } from '../../../utils/token';
import { viewPullRequestDiff } from '../../../utils/actions';

const diffCommand = new Command('diff');

diffCommand
  .description('View pull request diff')
  .option('-w, --workspace <workspace>', 'Bitbucket workspace name (uses default if not specified)')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .requiredOption('-p, --pr <pr>', 'Pull request ID')
  .action(async (options) => {
    try {
      // Use default workspace if not provided
      const workspace = options.workspace || getDefaultWorkspace();
      if (!workspace) {
        consola.error('No workspace specified and no default workspace configured.');
        consola.info('Please specify a workspace with -w/--workspace or set a default workspace.');
        process.exit(1);
      }
      
      const prId = parseInt(options.pr);
      if (isNaN(prId)) {
        consola.error('Invalid pull request ID. Please provide a valid number.');
        process.exit(1);
      }
      
      consola.info(`Fetching diff for PR #${prId} in ${workspace}/${options.repo}...`);
      
      const credentials = await getToken();
      const diffContent = await getPullRequestDiff(workspace, options.repo, prId, credentials);
      
   
      
      await viewPullRequestDiff(prId, diffContent);
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { diffCommand };
