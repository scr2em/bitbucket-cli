import { Command } from 'commander';
import { consola } from 'consola';
import { listPullRequests } from '../../../services/bitbucket';
import { getToken } from '../../../utils/token';

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
      
      const credentials = await getToken();
      const pullRequests = await listPullRequests(options.workspace, options.repo, credentials, options.state);
      
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
