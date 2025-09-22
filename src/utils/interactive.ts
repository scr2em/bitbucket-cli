import inquirer from 'inquirer';
import { Repository, Workspace, Project, PullRequest } from '../services/bitbucket';

export async function selectRepository(repositories: Repository[]): Promise<Repository> {
  const choices = repositories.map(repo => ({
    name: `${repo.name} ${repo.is_private ? '(private)' : '(public)'} - ${repo.description || 'No description'}`,
    value: repo,
    short: repo.name
  }));

  const { selectedRepo } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedRepo',
      message: 'Select a repository:',
      choices,
      pageSize: 10
    }
  ]);

  return selectedRepo;
}

export async function selectAction(): Promise<'clone' | 'open' | 'list-prs'> {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
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
        {
          name: 'List pull requests',
          value: 'list-prs',
          short: 'p'
        }
      ]
    }
  ]);

  return action;
}

export async function confirmOverwrite(message: string): Promise<boolean> {
  const { confirmed } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmed',
      message,
      default: false
    }
  ]);

  return confirmed;
}

export async function selectWorkspace(workspaces: Workspace[]): Promise<Workspace> {
  const choices = workspaces.map(workspace => ({
    name: `${workspace.name} (${workspace.slug}) ${workspace.is_private ? '(private)' : '(public)'}`,
    value: workspace,
    short: workspace.name
  }));

  const { selectedWorkspace } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedWorkspace',
      message: 'Select a workspace:',
      choices,
      pageSize: 10
    }
  ]);

  return selectedWorkspace;
}

export async function selectProject(projects: Project[]): Promise<Project> {
  const choices = projects.map(project => ({
    name: `${project.name} (${project.key}) ${project.is_private ? '(private)' : '(public)'} - ${project.description || 'No description'}`,
    value: project,
    short: project.name
  }));

  const { selectedProject } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedProject',
      message: 'Select a project:',
      choices,
      pageSize: 10
    }
  ]);

  return selectedProject;
}

export async function selectPullRequest(pullRequests: PullRequest[]): Promise<PullRequest> {
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

  const { selectedPR } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedPR',
      message: 'Select a pull request:',
      choices,
      pageSize: 10
    }
  ]);

  return selectedPR;
}

export async function selectPRState(): Promise<string> {
  const { state } = await inquirer.prompt([
    {
      type: 'list',
      name: 'state',
      message: 'Select PR state filter:',
      choices: [
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
      ]
    }
  ]);

  return state;
}

export async function selectPRAction(): Promise<'open' | 'view-details'> {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do with this pull request?',
      choices: [
        {
          name: 'Open in browser',
          value: 'open',
          short: 'o'
        },
        {
          name: 'View details',
          value: 'view-details',
          short: 'v'
        }
      ]
    }
  ]);

  return action;
}
