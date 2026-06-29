#!/usr/bin/env node

import { Command } from 'commander';
import { reposCommand } from './commands/repos';
import { pullRequestsCommand } from './commands/pullrequests';
import { refsCommand } from './commands/refs';
import { branchesCommand } from './commands/branches';
import { commitsCommand } from './commands/commits';
import { browseCommand } from './commands/browse';
import { configCommand } from './commands/config';
import { loginCommand } from './commands/login';
import { displayLoggedInUser } from './utils/token';
import { setVerboseMode } from './utils/logger';
import pkg from '../package.json'

const { version } = pkg;

const program = new Command();

program
  .name('bb')
  .description('A CLI tool for interacting with Bitbucket repositories')
  .version(version)
  .option('-v, --verbose', 'Enable verbose logging');

program
  .addCommand(loginCommand)
  .addCommand(reposCommand)
  .addCommand(pullRequestsCommand)
  .addCommand(refsCommand)
  .addCommand(branchesCommand)
  .addCommand(commitsCommand)
  .addCommand(browseCommand)
  .addCommand(configCommand);

// Set up verbose mode and display logged-in user before executing any command
program.hook('preAction', async (thisCommand, actionCommand) => {
  const options = thisCommand.opts();
  setVerboseMode(options.verbose || false);
  // `login` establishes credentials, so don't trigger the missing-token prompt for it.
  if (actionCommand.name() !== 'login') {
    await displayLoggedInUser();
  }
});

program.parse();
