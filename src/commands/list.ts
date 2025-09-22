import { Command } from 'commander';
import { listRepositories } from '../services/bitbucket';
import { getToken } from '../utils/token';
import { selectRepository, selectAction } from '../utils/interactive';
import { cloneRepository, openInBrowser } from '../utils/actions';
import { consola } from 'consola';

const listRepos = new Command('list');

listRepos
  .description('List repositories in a workspace')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .option('-f, --filter <filter>', 'Filter repositories by name (case insensitive)')
  .option('--admin', 'Show only repositories where user has admin access')
  .option('--member', 'Show only repositories where user has read access')
  .option('--contributor', 'Show only repositories where user has write access')
  .option('--owner', 'Show only repositories owned by the user')
  .action(async (options) => {
    try {
      // Determine the role based on the options
      let role: string | undefined;
      if (options.admin) role = 'admin';
      else if (options.member) role = 'member';
      else if (options.contributor) role = 'contributor';
      else if (options.owner) role = 'owner';
      
      if (role) {
        consola.info(`Filtering repositories by role: ${role}`);
      }
      
      const token = await getToken();
      const repos = await listRepositories(options.workspace, token, role);
      
      let filteredRepos = repos;
      if (options.filter) {
        const filterLower = options.filter.toLowerCase();
        filteredRepos = repos.filter(repo => 
          repo.name.toLowerCase().includes(filterLower)
        );
      }

      if (filteredRepos.length === 0) {
        consola.warn('No repositories found matching the criteria.');
        return;
      }
      const selectedRepo = await selectRepository(filteredRepos);
      const action = await selectAction();
      
      if (action === 'clone') {
        await cloneRepository(selectedRepo);
      } else if (action === 'open') {
        await openInBrowser(selectedRepo);
      }
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { listRepos };
