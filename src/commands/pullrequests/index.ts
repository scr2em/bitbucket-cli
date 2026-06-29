import { Command } from 'commander';
import { listCommand, authoredCommand, getCommand, createCommand, updateCommand } from './crud';
import {
  approveCommand,
  unapproveCommand,
  requestChangesCommand,
  unrequestChangesCommand,
  declineCommand,
  mergeCommand,
  mergeStatusCommand,
} from './review';
import {
  diffCommand,
  patchCommand,
  diffstatCommand,
  commitsCommand,
  conflictsCommand,
  statusesCommand,
  activityCommand,
} from './content';
import { commentsCommand } from './comments';
import { tasksCommand } from './tasks';
import { propertiesCommand } from './properties';

const pullRequestsCommand = new Command('pr');

pullRequestsCommand
  .description('Pull request management commands')
  // Core
  .addCommand(listCommand())
  .addCommand(authoredCommand())
  .addCommand(getCommand())
  .addCommand(createCommand())
  .addCommand(updateCommand())
  // Review actions
  .addCommand(approveCommand())
  .addCommand(unapproveCommand())
  .addCommand(requestChangesCommand())
  .addCommand(unrequestChangesCommand())
  .addCommand(declineCommand())
  .addCommand(mergeCommand())
  .addCommand(mergeStatusCommand())
  // Content
  .addCommand(diffCommand())
  .addCommand(patchCommand())
  .addCommand(diffstatCommand())
  .addCommand(commitsCommand())
  .addCommand(conflictsCommand())
  .addCommand(statusesCommand())
  .addCommand(activityCommand())
  // Grouped resources
  .addCommand(commentsCommand())
  .addCommand(tasksCommand())
  .addCommand(propertiesCommand());

export { pullRequestsCommand };
