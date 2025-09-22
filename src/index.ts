#!/usr/bin/env node

import { Command } from 'commander';
import { reposCommand } from './commands/repos';
import { pullRequestsCommand } from './commands/pullrequests';
import { branchesCommand } from './commands/branches';
import { commitsCommand } from './commands/commits';
import { browseCommand } from './commands/browse';
import { displayLoggedInUser } from './utils/token';
import pkg from '../package.json'

const { version } = pkg;

const program = new Command();

program
  .name('bitbucket')
  .description('A CLI tool for interacting with Bitbucket repositories')
  .version(version);

program
  .addCommand(reposCommand)
  .addCommand(pullRequestsCommand)
  .addCommand(branchesCommand)
  .addCommand(commitsCommand)
  .addCommand(browseCommand);

// Display logged-in user before executing any command
program.hook('preAction', async () => {
  await displayLoggedInUser();
});

program.parse();
