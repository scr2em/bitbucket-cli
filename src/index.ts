#!/usr/bin/env node

import { Command } from 'commander';
import { reposCommand } from './commands/repos';
import { pullRequestsCommand } from './commands/pullrequests';
import { branchesCommand } from './commands/branches';
import { commitsCommand } from './commands/commits';
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
  .addCommand(commitsCommand);

program.parse();
