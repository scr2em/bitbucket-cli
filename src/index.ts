#!/usr/bin/env node

import { Command } from 'commander';
import { reposCommand } from './commands/repos';
import { pullRequestsCommand } from './commands/pullrequests';
import { branchesCommand } from './commands/branches';
import { commitsCommand } from './commands/commits';
import { browseCommand } from './commands/browse';
import { displayLoggedInUser } from './utils/token';
import { setVerboseMode } from './utils/logger';
import pkg from '../package.json'

const { version } = pkg;

const program = new Command();

program
  .name('bitbucket')
  .description('A CLI tool for interacting with Bitbucket repositories')
  .version(version)
  .option('-v, --verbose', 'Enable verbose logging');

program
  .addCommand(reposCommand)
  .addCommand(pullRequestsCommand)
  .addCommand(branchesCommand)
  .addCommand(commitsCommand)
  .addCommand(browseCommand);

// Set up verbose mode and display logged-in user before executing any command
program.hook('preAction', async (thisCommand) => {
  const options = thisCommand.opts();
  setVerboseMode(options.verbose || false);
  await displayLoggedInUser();
});

program.parse();
