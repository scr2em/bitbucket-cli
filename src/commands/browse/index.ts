import { Command } from 'commander';
import { getToken } from '../../utils/token';
import { listWorkspaces, listProjects, listRepositoriesByProject } from '../../services/bitbucket';
import { selectWorkspace, selectProject, selectRepository, selectAction } from '../../utils/interactive';
import { cloneRepository, openInBrowser } from '../../utils/actions';
import { consola } from 'consola';

const browseCommand = new Command('browse');

browseCommand
  .description('Browse workspaces, projects, and repositories interactively')
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
      
      // Step 1: List and select workspace
      consola.info('Fetching workspaces...');
      const workspaces = await listWorkspaces(token);
      
      if (workspaces.length === 0) {
        consola.warn('No workspaces found.');
        return;
      }
      
      const selectedWorkspace = await selectWorkspace(workspaces);
      consola.info(`Selected workspace: ${selectedWorkspace.name} (${selectedWorkspace.slug})`);
      
      // Step 2: List and select project
      consola.info('Fetching projects...');
      const projects = await listProjects(selectedWorkspace.slug, token);
      
      if (projects.length === 0) {
        consola.warn('No projects found in this workspace.');
        return;
      }
      
      const selectedProject = await selectProject(projects);
      consola.info(`Selected project: ${selectedProject.name} (${selectedProject.key})`);
      
      // Step 3: List and select repository
      consola.info('Fetching repositories...');
      const repositories = await listRepositoriesByProject(selectedWorkspace.slug, selectedProject.key, token, role);
      
      if (repositories.length === 0) {
        consola.warn('No repositories found in this project.');
        return;
      }
      
      const selectedRepo = await selectRepository(repositories);
      consola.info(`Selected repository: ${selectedRepo.name}`);
      
      // Step 4: Choose action
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

export { browseCommand };
