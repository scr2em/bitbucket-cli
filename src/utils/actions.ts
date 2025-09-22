import { exec } from 'child_process';
import { promisify } from 'util';
import open from 'open';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';
import { Repository, PullRequest } from '../services/bitbucket';
import { consola } from 'consola';
import { confirmOverwrite } from './interactive';

const execAsync = promisify(exec);

export async function cloneRepository(repo: Repository): Promise<void> {
  try {
    // Find SSH clone URL
    const sshCloneUrl = repo.links.clone.find(link => link.name === 'ssh')?.href;
    
    if (!sshCloneUrl) {
      throw new Error('SSH clone URL not found for this repository');
    }

    // Check if folder already exists
    const folderPath = join(process.cwd(), repo.name);
    if (existsSync(folderPath)) {
      consola.warn(`Folder '${repo.name}' already exists in the current directory.`);
      const shouldOverwrite = await confirmOverwrite(`Do you want to remove the existing folder and continue cloning?`);
      
      if (!shouldOverwrite) {
        consola.info('Cloning cancelled by user.');
        return;
      }
      
      // Remove the existing folder
      consola.info(`Removing existing folder '${repo.name}'...`);
      rmSync(folderPath, { recursive: true, force: true });
      consola.success('Existing folder removed successfully.');
    }
    
    consola.info(`Cloning ${repo.name}...`);
    consola.info(`URL: ${sshCloneUrl}`);
    
    // Execute git clone command
    const { stdout, stderr } = await execAsync(`git clone ${sshCloneUrl}`);
    
    if (stderr && !stderr.includes('Cloning into')) {
      consola.warn('Warning:', stderr);
    }
    
    consola.success('Repository cloned successfully!');
    if (stdout) {
      consola.log(stdout);
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('git clone')) {
        consola.error('Failed to clone repository. Make sure you have:');
        consola.error('1. Git installed');
        consola.error('2. SSH key configured for Bitbucket');
        consola.error('3. Access to the repository');
        consola.error('\nError details:', error.message);
      } else {
        consola.error('Error:', error.message);
      }
    } else {
      consola.error('Unknown error occurred while cloning repository');
    }
    throw error;
  }
}

export async function openInBrowser(repo: Repository): Promise<void> {
  try {
    const url = repo.links.html.href;
    consola.info(`Opening ${repo.name} in browser...`);
    consola.info(`URL: ${url}`);
    
    await open(url);
    consola.success('Repository opened in browser!');
  } catch (error) {
    consola.error('Failed to open repository in browser:', error);
    consola.info(`You can manually open: ${repo.links.html.href}`);
    throw error;
  }
}

export async function openPullRequestInBrowser(pr: PullRequest): Promise<void> {
  try {
    const url = pr.links.html.href;
    consola.info(`Opening PR #${pr.id} in browser...`);
    consola.info(`URL: ${url}`);
    
    await open(url);
    consola.success('Pull request opened in browser!');
  } catch (error) {
    consola.error('Failed to open pull request in browser:', error);
    consola.info(`You can manually open: ${pr.links.html.href}`);
    throw error;
  }
}

export function displayPullRequestDetails(pr: PullRequest): void {
  const stateEmoji = {
    'OPEN': '🟢',
    'MERGED': '✅',
    'DECLINED': '❌',
    'SUPERSEDED': '🔄'
  }[pr.state] || '❓';
  
  consola.log('');
  consola.log(`📋 Pull Request #${pr.id}`);
  consola.log(`   ${stateEmoji} ${pr.title}`);
  consola.log('');
  consola.log(`👤 Author: ${pr.author.display_name} (@${pr.author.nickname})`);
  consola.log(`🌿 Source: ${pr.source.branch.name}`);
  consola.log(`🎯 Target: ${pr.destination.branch.name}`);
  consola.log(`📅 Created: ${new Date(pr.created_on).toLocaleString()}`);
  consola.log(`🔄 Updated: ${new Date(pr.updated_on).toLocaleString()}`);
  consola.log('');
  
  if (pr.description) {
    consola.log(`📝 Description:`);
    consola.log(pr.description);
    consola.log('');
  }
  
  consola.log(`🔗 URL: ${pr.links.html.href}`);
  consola.log('');
}
