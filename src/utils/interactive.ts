import inquirer from 'inquirer';
import { Repository, Workspace, Project } from '../services/bitbucket';

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

export async function selectAction(): Promise<'clone' | 'open'> {
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
