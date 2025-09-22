import { Command } from 'commander';
import { getToken } from '../../../utils/token';
import { listRepositories } from '../../../services/bitbucket';
import { selectRepository } from '../../../utils/interactive';
import { cloneRepository } from '../../../utils/actions';
import { consola } from 'consola';

const cloneCommand = new Command('clone');

cloneCommand
  .description('Clone a repository from a workspace')
  .requiredOption('-w, --workspace <workspace>', 'Bitbucket workspace name')
  .option('-r, --repo <repo>', 'Repository name to clone (if not provided, will show interactive list)')
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
      
      const token = await getToken();
      
      if (options.repo) {
        // Direct clone if repo name is provided
        consola.info(`Cloning repository: ${options.repo}`);
        // TODO: Implement direct clone without listing all repos
        consola.warn('Direct clone not implemented yet. Please use interactive selection.');
        return;
      }
      
      // Show interactive list for selection
      const repos = await listRepositories(options.workspace, token, role);
      
      if (repos.length === 0) {
        consola.warn('No repositories found matching the criteria.');
        return;
      }
      
      const selectedRepo = await selectRepository(repos);
      await cloneRepository(selectedRepo);
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { cloneCommand };
