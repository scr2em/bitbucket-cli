import inquirer from 'inquirer';
import { Repository, Workspace, Project, PullRequest } from '../services/bitbucket';
import { NavigationResult } from './navigation';

// Navigation-aware selection functions
export async function selectRepositoryWithNavigation(repositories: Repository[], canGoBack: boolean = false): Promise<NavigationResult<Repository | null>> {
  const choices = repositories.map(repo => ({
    name: `${repo.name} ${repo.is_private ? '(private)' : '(public)'} - ${repo.description || 'No description'}`,
    value: repo,
    short: repo.name
  }));

  if (canGoBack) {
    choices.unshift({
      name: '← Go back',
      value: '__BACK__' as any,
      short: 'Back'
    });
  }

  const { selectedRepo } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedRepo',
      message: 'Select a repository:',
      choices,
      pageSize: 10
    }
  ]);

  if (selectedRepo === '__BACK__') {
    return { value: null, action: 'back' };
  }

  return { value: selectedRepo, action: 'continue' };
}

export async function selectActionWithNavigation(canGoBack: boolean = false): Promise<NavigationResult<'clone' | 'open' | 'list-prs' | null>> {
  const choices = [
    {
        name: 'List pull requests',
        value: 'list-prs',
        short: 'p'
      },
    {
      name: 'Clone repository (SSH)',
      value: 'clone',
      short: 'c'
    },
    {
      name: 'Open in browser',
      value: 'open',
      short: 'o'
    },

  ];

  if (canGoBack) {
    choices.unshift({
      name: '← Go back',
      value: '__BACK__' as any,
      short: 'Back'
    });
  }

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices
    }
  ]);

  if (action === '__BACK__') {
    return { value: null, action: 'back' };
  }

  return { value: action, action: 'continue' };
}

export async function selectWorkspaceWithNavigation(workspaces: Workspace[]): Promise<NavigationResult<Workspace | null>> {
  const choices = workspaces.map(workspace => ({
    name: `${workspace.name} (${workspace.slug}) ${workspace.is_private ? '(private)' : '(public)'}`,
    value: workspace,
    short: workspace.name
  }));

  choices.push({
    name: '❌ Exit',
    value: '__EXIT__' as any,
    short: 'Exit'
  });

  const { selectedWorkspace } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedWorkspace',
      message: 'Select a workspace:',
      choices,
      pageSize: 10
    }
  ]);

  if (selectedWorkspace === '__EXIT__') {
    return { value: null, action: 'exit' };
  }

  return { value: selectedWorkspace, action: 'continue' };
}

export async function selectProjectWithNavigation(projects: Project[], canGoBack: boolean = false): Promise<NavigationResult<Project | null>> {
  const choices = projects.map(project => ({
    name: `${project.name} (${project.key}) ${project.is_private ? '(private)' : '(public)'} - ${project.description || 'No description'}`,
    value: project,
    short: project.name
  }));

  if (canGoBack) {
    choices.unshift({
      name: '← Go back',
      value: '__BACK__' as any,
      short: 'Back'
    });
  }

  const { selectedProject } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedProject',
      message: 'Select a project:',
      choices,
      pageSize: 10
    }
  ]);

  if (selectedProject === '__BACK__') {
    return { value: null, action: 'back' };
  }

  return { value: selectedProject, action: 'continue' };
}

export async function selectPullRequestWithNavigation(pullRequests: PullRequest[], canGoBack: boolean = false): Promise<NavigationResult<PullRequest | null>> {
  const choices = pullRequests.map(pr => {
    const stateEmoji = {
      'OPEN': '🟢',
      'MERGED': '✅',
      'DECLINED': '❌',
      'SUPERSEDED': '🔄'
    }[pr.state] || '❓';
    
    return {
      name: `${stateEmoji} #${pr.id} - ${pr.title} (${pr.author.display_name})`,
      value: pr,
      short: `#${pr.id}`
    };
  });

  if (canGoBack) {
    choices.unshift({
      name: '← Go back',
      value: '__BACK__' as any,
      short: 'Back'
    });
  }

  const { selectedPR } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedPR',
      message: 'Select a pull request:',
      choices,
      pageSize: 10
    }
  ]);

  if (selectedPR === '__BACK__') {
    return { value: null, action: 'back' };
  }

  return { value: selectedPR, action: 'continue' };
}

export async function selectPRStateWithNavigation(canGoBack: boolean = false): Promise<NavigationResult<string | null>> {
  const choices = [
    {
      name: '🟢 Open',
      value: 'open',
      short: 'o'
    },
    {
      name: '✅ Merged',
      value: 'merged',
      short: 'm'
    },
    {
      name: '❌ Declined',
      value: 'declined',
      short: 'd'
    },
    {
      name: '🔄 Superseded',
      value: 'superseded',
      short: 's'
    },
    {
      name: '📋 All states',
      value: 'all',
      short: 'a'
    }
  ];

  if (canGoBack) {
    choices.unshift({
      name: '← Go back',
      value: '__BACK__' as any,
      short: 'Back'
    });
  }

  const { state } = await inquirer.prompt([
    {
      type: 'list',
      name: 'state',
      message: 'Select PR state filter:',
      choices
    }
  ]);

  if (state === '__BACK__') {
    return { value: null, action: 'back' };
  }

  return { value: state, action: 'continue' };
}

export async function selectPRActionWithNavigation(canGoBack: boolean = false): Promise<NavigationResult<'open' | 'view-details' | 'view-diff' | null>> {
  const choices = [
    {
      name: 'Open in browser',
      value: 'open',
      short: 'o'
    },
    {
      name: 'View details',
      value: 'view-details',
      short: 'v'
    },
    {
      name: 'View diff',
      value: 'view-diff',
      short: 'd'
    }
  ];

  if (canGoBack) {
    choices.unshift({
      name: '← Go back',
      value: '__BACK__' as any,
      short: 'Back'
    });
  }

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do with this pull request?',
      choices
    }
  ]);

  if (action === '__BACK__') {
    return { value: null, action: 'back' };
  }

  return { value: action, action: 'continue' };
}
