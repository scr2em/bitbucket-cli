import { Command } from 'commander';
import { getToken } from '../../utils/token';
import { listWorkspaces, listProjects, listRepositoriesByProject, listPullRequests } from '../../services/bitbucket';
import { selectWorkspace, selectProject, selectRepository, selectAction, selectPRState, selectPullRequest, selectPRAction } from '../../utils/interactive';
import { cloneRepository, openInBrowser, openPullRequestInBrowser, displayPullRequestDetails } from '../../utils/actions';
import { consola } from 'consola';
import { logger } from '../../utils/logger';

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
      const workspaces = await listWorkspaces(token);
      
      if (workspaces.length === 0) {
        consola.warn('No workspaces found.');
        return;
      }
      
      const selectedWorkspace = await selectWorkspace(workspaces);
      logger.info(`Selected workspace: ${selectedWorkspace.name} (${selectedWorkspace.slug})`);
      
      // Step 2: List and select project
      const projects = await listProjects(selectedWorkspace.slug, token);
      
      if (projects.length === 0) {
        consola.warn('No projects found in this workspace.');
        return;
      }
      
      const selectedProject = await selectProject(projects);
      logger.info(`Selected project: ${selectedProject.name} (${selectedProject.key})`);
      
      const repositories = await listRepositoriesByProject(selectedWorkspace.slug, selectedProject.key, token, role);
      
      if (repositories.length === 0) {
        consola.warn('No repositories found in this project.');
        return;
      }
      
      const selectedRepo = await selectRepository(repositories);
      logger.info(`Selected repository: ${selectedRepo.name}`);
      
      // Step 4: Choose action
      const action = await selectAction();
      
      if (action === 'clone') {
        await cloneRepository(selectedRepo);
      } else if (action === 'open') {
        await openInBrowser(selectedRepo);
      } else if (action === 'list-prs') {
        // Step 5: Select PR state filter
        const prState = await selectPRState();
        const stateFilter = prState === 'all' ? undefined : prState;
        
        consola.info(`Fetching pull requests for ${selectedWorkspace.slug}/${selectedRepo.name}...`);
        const pullRequests = await listPullRequests(selectedWorkspace.slug, selectedRepo.name, token, stateFilter);
        
        if (pullRequests.length === 0) {
          consola.info('No pull requests found.');
          return;
        }
        
        consola.success(`Found ${pullRequests.length} pull request(s)`);
        
        // Step 6: Select a specific PR
        const selectedPR = await selectPullRequest(pullRequests);
        
        // Step 7: Choose what to do with the PR
        const prAction = await selectPRAction();
        
        if (prAction === 'open') {
          await openPullRequestInBrowser(selectedPR);
        } else if (prAction === 'view-details') {
          displayPullRequestDetails(selectedPR);
        }
      }
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { browseCommand };
