import { Command } from 'commander';
import { getToken, getDefaultWorkspace } from '../../utils/token';
import { listWorkspaces, listProjects, listRepositoriesByProject, listPullRequests, getPullRequestDiff } from '../../services/bitbucket';
import { selectWorkspace, selectProject, selectRepository, selectAction, selectPRState, selectPullRequest, selectPRAction } from '../../utils/interactive';
import { 
  selectWorkspaceWithNavigation, 
  selectProjectWithNavigation, 
  selectRepositoryWithNavigation, 
  selectActionWithNavigation, 
  selectPRStateWithNavigation, 
  selectPullRequestWithNavigation, 
  selectPRActionWithNavigation 
} from '../../utils/navigation-interactive';
import { cloneRepository, openInBrowser, openPullRequestInBrowser, displayPullRequestDetails, viewPullRequestDiff } from '../../utils/actions';
import { NavigationManager } from '../../utils/navigation';
import { consola } from 'consola';
import { logger } from '../../utils/logger';

const browseCommand = new Command('browse');

browseCommand
  .description('Browse workspaces, projects, and repositories interactively')
  .option('-w, --workspace <workspace>', 'Start with specific workspace (uses default if not specified)')
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
      const navigation = new NavigationManager();
      
      // Handle initial workspace setup
      let selectedWorkspace;
      
      if (options.workspace) {
        // Use specified workspace
        const workspaces = await listWorkspaces(token);
        selectedWorkspace = workspaces.find(w => w.slug === options.workspace);
        
        if (!selectedWorkspace) {
          consola.error(`Workspace '${options.workspace}' not found.`);
          process.exit(1);
        }
        
        logger.info(`Using specified workspace: ${selectedWorkspace.name} (${selectedWorkspace.slug})`);
        navigation.setData({ workspaces, selectedWorkspace });
        navigation.advanceTo('project-selection');
      } else {
        // Check for default workspace first
        const defaultWorkspaceSlug = getDefaultWorkspace();
        
        if (defaultWorkspaceSlug) {
          // Use default workspace
          const workspaces = await listWorkspaces(token);
          selectedWorkspace = workspaces.find(w => w.slug === defaultWorkspaceSlug);
          
          if (selectedWorkspace) {
            logger.info(`Using default workspace: ${selectedWorkspace.name} (${selectedWorkspace.slug})`);
            navigation.setData({ workspaces, selectedWorkspace });
            navigation.advanceTo('project-selection');
          } else {
            consola.warn(`Default workspace '${defaultWorkspaceSlug}' not found. Please select a workspace.`);
            // Fall back to interactive selection
            if (workspaces.length === 0) {
              consola.warn('No workspaces found.');
              return;
            }
            navigation.setData({ workspaces });
          }
        } else {
          // No default workspace, show interactive selection
          const workspaces = await listWorkspaces(token);
          
          if (workspaces.length === 0) {
            consola.warn('No workspaces found.');
            return;
          }
          
          navigation.setData({ workspaces });
        }
      }
      
      // Main navigation loop
      while (true) {
        const currentStep = navigation.getCurrentStep();
        const data = navigation.getData();
        
        
        switch (currentStep) {
          case 'workspace-selection': {
            const result = await selectWorkspaceWithNavigation(data.workspaces!);
            
            if (result.action === 'exit') {
              consola.info('Goodbye!');
              return;
            } else if (result.action === 'continue') {
              navigation.setData({ selectedWorkspace: result.value! });
              navigation.advanceTo('project-selection');
            }
            break;
          }
          
          case 'project-selection': {
            const projects = await listProjects(data.selectedWorkspace!.slug, token);
            
            if (projects.length === 0) {
              consola.warn('No projects found in this workspace.');
              return;
            }
            
            navigation.setData({ projects });
            const result = await selectProjectWithNavigation(projects, navigation.canGoBack());
            
            if (result.action === 'back') {
              navigation.goBack();
            } else if (result.action === 'continue') {
              navigation.setData({ selectedProject: result.value! });
              navigation.advanceTo('repository-selection');
            }
            break;
          }
          
          case 'repository-selection': {
            const repositories = await listRepositoriesByProject(
              data.selectedWorkspace!.slug, 
              data.selectedProject!.key, 
              token, 
              role
            );
            
            if (repositories.length === 0) {
              consola.warn('No repositories found in this project.');
              return;
            }
            
            navigation.setData({ repositories });
            const result = await selectRepositoryWithNavigation(repositories, navigation.canGoBack());
            
            if (result.action === 'back') {
              navigation.goBack();
            } else if (result.action === 'continue') {
              navigation.setData({ selectedRepository: result.value! });
              navigation.advanceTo('action-selection');
            }
            break;
          }
          
          case 'action-selection': {
            const result = await selectActionWithNavigation(navigation.canGoBack());
            
            if (result.action === 'back') {
              navigation.goBack();
            } else if (result.action === 'continue') {
              const action = result.value;
              
              if (action === 'clone') {
                await cloneRepository(data.selectedRepository!);
                consola.success('Repository cloned successfully!');
                return;
              } else if (action === 'open') {
                await openInBrowser(data.selectedRepository!);
                consola.success('Repository opened in browser!');
                return;
              } else if (action === 'list-prs') {
                navigation.advanceTo('pr-state-selection');
              }
            }
            break;
          }
          
          case 'pr-state-selection': {
            const result = await selectPRStateWithNavigation(navigation.canGoBack());
            
            if (result.action === 'back') {
              navigation.goBack();
            } else if (result.action === 'continue') {
              const stateFilter = result.value === 'all' ? undefined : result.value;
              navigation.setData({ prStateFilter: result.value! });
              navigation.advanceTo('pr-selection');
            }
            break;
          }
          
          case 'pr-selection': {
            consola.info(`Fetching pull requests for ${data.selectedWorkspace!.slug}/${data.selectedRepository!.name}...`);
            const pullRequests = await listPullRequests(
              data.selectedWorkspace!.slug, 
              data.selectedRepository!.name, 
              token, 
              data.prStateFilter
            );
            
            if (pullRequests.length === 0) {
              consola.info('No pull requests found.');
              return;
            }
            
            consola.success(`Found ${pullRequests.length} pull request(s)`);
            navigation.setData({ pullRequests });
            
            const result = await selectPullRequestWithNavigation(pullRequests, navigation.canGoBack());
            
            if (result.action === 'back') {
              navigation.goBack();
            } else if (result.action === 'continue') {
              navigation.setData({ selectedPullRequest: result.value! });
              navigation.advanceTo('pr-action-selection');
            }
            break;
          }
          
          case 'pr-action-selection': {
            const result = await selectPRActionWithNavigation(navigation.canGoBack());
            
            if (result.action === 'back') {
              navigation.goBack();
            } else if (result.action === 'continue') {
              const prAction = result.value;
              const selectedPR = data.selectedPullRequest!;
              
              if (prAction === 'open') {
                await openPullRequestInBrowser(selectedPR);
                consola.success('Pull request opened in browser!');
                return;
              } else if (prAction === 'view-details') {
                displayPullRequestDetails(selectedPR);
                return;
              } else if (prAction === 'view-diff') {
                consola.info('Fetching PR diff...');
                const diffContent = await getPullRequestDiff(
                  data.selectedWorkspace!.slug, 
                  data.selectedRepository!.name, 
                  selectedPR.id, 
                  token
                );
                await viewPullRequestDiff(selectedPR.id, diffContent);
                return;
              }
            }
            break;
          }
        }
      }
      
    } catch (error) {
      consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

export { browseCommand };
