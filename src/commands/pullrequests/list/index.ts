import { Command } from 'commander';
import { consola } from 'consola';
import { listPullRequests } from '../../../services/bitbucket';
import { getToken, getDefaultWorkspace } from '../../../utils/token';

const listCommand = new Command('list');

listCommand
  .description('List pull requests for a repository')
  .option('-w, --workspace <workspace>', 'Bitbucket workspace name (uses default if not specified)')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('--state <state>', 'Filter by state (open, merged, declined, superseded)', 'open')
  .action(async (options) => {
    try {
      // Use default workspace if not provided
      const workspace = options.workspace || getDefaultWorkspace();
      if (!workspace) {
        consola.error('No workspace specified and no default workspace configured.');
        consola.info('Please specify a workspace with -w/--workspace or set a default workspace.');
        process.exit(1);
      }
      
      consola.info(`Listing pull requests for ${workspace}/${options.repo}`);
      consola.info(`State filter: ${options.state}`);
      
      const credentials = await getToken();
      const pullRequests = await listPullRequests(workspace, options.repo, credentials, options.state);
      
      if (pullRequests.length === 0) {
        consola.info('No pull requests found.');
        return;
      }
      
      consola.success(`Found ${pullRequests.length} pull request(s):`);
      consola.log('');
      
      pullRequests.forEach((pr, index) => {
        const stateEmoji = {
          'OPEN': '🟢',
          'MERGED': '✅',
          'DECLINED': '❌',
          'SUPERSEDED': '🔄'
        }[pr.state] || '❓';
        
        consola.log(`${index + 1}. ${stateEmoji} #${pr.id} - ${pr.title}`);
        consola.log(`   Author: ${pr.author.display_name}`);
        consola.log(`   Source: ${pr.source.branch.name} → ${pr.destination.branch.name}`);
        consola.log(`   Created: ${new Date(pr.created_on).toLocaleDateString()}`);
        consola.log(`   URL: ${pr.links.html.href}`);
        consola.log('');
      });
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { listCommand };
