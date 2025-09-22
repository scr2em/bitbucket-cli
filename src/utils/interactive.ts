import inquirer from 'inquirer';
import { Repository } from '../services/bitbucket';

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
