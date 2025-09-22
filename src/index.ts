#!/usr/bin/env node

import { Command } from 'commander';
import { listRepos } from './commands/list.js';
import pkg from '../package.json' 

const { version } = pkg;

const program = new Command();

program
  .name('bitbucket')
  .description('A CLI tool for interacting with Bitbucket repositories')
  .version(version);

program
  .command('repos')
  .description('Repository management commands')
  .addCommand(listRepos);

program.parse();
