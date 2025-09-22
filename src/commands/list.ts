import { Command } from 'commander';
import { listRepositories } from '../services/bitbucket.js';
import { getToken } from '../utils/token.js';
import { selectRepository, selectAction } from '../utils/interactive.js';
import { cloneRepository, openInBrowser } from '../utils/actions.js';
import { consola } from 'consola';

const listRepos = new Command('list');

listRepos
  .description('List repositories in a workspace')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .option('-f, --filter <filter>', 'Filter repositories by name (case insensitive)')
  .action(async (options) => {
    try {
      const token = await getToken();
      const repos = await listRepositories(options.workspace, token);
      
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
