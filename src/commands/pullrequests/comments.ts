import { Command } from 'commander';
import { consola } from 'consola';
import { addPrOptions, addJsonOption, runAction, parseId, confirm, editor } from '../../utils/command';
import { prContext } from './context';
import * as prs from '../../services/pullrequests';
import { printJson, printComments, printComment } from '../../utils/pr-format';

function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addPrOptions(command))
    .description('List comments on a pull request')
    .option('-l, --limit <n>', 'Maximum comments to fetch', '50')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const comments = await prs.listComments(api, ref, { limit: Number(options.limit) || undefined });
        if (options.json) return printJson(comments);
        if (comments.length === 0) return consola.info('No comments found.');
        printComments(comments);
      }),
    );
  return command;
}

function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addPrOptions(command))
    .description('Show a single comment')
    .requiredOption('-c, --comment <id>', 'Comment id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const comment = await prs.getComment(api, ref, parseId(options.comment, 'comment id'));
        if (options.json) return printJson(comment);
        printComment(comment);
      }),
    );
  return command;
}

function addCommand(): Command {
  const command = new Command('add');
  addJsonOption(addPrOptions(command))
    .description('Add a comment to a pull request (optionally inline or as a reply)')
    .option('-m, --message <text>', 'Comment text (opens $EDITOR if omitted)')
    .option('--path <file>', 'File path for an inline comment')
    .option('--line <n>', 'Line number for an inline comment (with --path)')
    .option('--parent <id>', 'Reply to an existing comment id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const content = options.message || (await editor('Comment'));
        if (!content || !content.trim()) {
          consola.error('Comment text cannot be empty.');
          process.exit(1);
        }

        const inline = options.path
          ? { path: options.path, ...(options.line ? { to: parseId(options.line, 'line number') } : {}) }
          : undefined;

        const created = await prs.createComment(api, ref, content, {
          inline,
          parentId: options.parent ? parseId(options.parent, 'parent comment id') : undefined,
        });
        if (options.json) return printJson(created);
        consola.success(`Added comment #${created.id}`);
      }),
    );
  return command;
}

function updateCommand(): Command {
  const command = new Command('update');
  addJsonOption(addPrOptions(command))
    .description('Edit a comment')
    .requiredOption('-c, --comment <id>', 'Comment id')
    .option('-m, --message <text>', 'New comment text (opens $EDITOR if omitted)')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const content = options.message || (await editor('Comment'));
        if (!content || !content.trim()) {
          consola.error('Comment text cannot be empty.');
          process.exit(1);
        }
        const updated = await prs.updateComment(api, ref, parseId(options.comment, 'comment id'), content);
        if (options.json) return printJson(updated);
        consola.success(`Updated comment #${updated.id}`);
      }),
    );
  return command;
}

function deleteCommand(): Command {
  const command = new Command('delete');
  addPrOptions(command)
    .description('Delete a comment')
    .requiredOption('-c, --comment <id>', 'Comment id')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const commentId = parseId(options.comment, 'comment id');
        if (!options.yes && !(await confirm(`Delete comment #${commentId}?`))) {
          return consola.info('Cancelled.');
        }
        await prs.deleteComment(api, ref, commentId);
        consola.success(`Deleted comment #${commentId}`);
      }),
    );
  return command;
}

function resolveCommand(): Command {
  const command = new Command('resolve');
  addPrOptions(command)
    .description('Resolve a comment thread')
    .requiredOption('-c, --comment <id>', 'Comment id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const commentId = parseId(options.comment, 'comment id');
        await prs.resolveComment(api, ref, commentId);
        consola.success(`Resolved comment thread #${commentId}`);
      }),
    );
  return command;
}

function reopenCommand(): Command {
  const command = new Command('reopen');
  addPrOptions(command)
    .description('Reopen a resolved comment thread')
    .requiredOption('-c, --comment <id>', 'Comment id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const commentId = parseId(options.comment, 'comment id');
        await prs.reopenComment(api, ref, commentId);
        consola.success(`Reopened comment thread #${commentId}`);
      }),
    );
  return command;
}

/** The `pr comments` command group. */
export function commentsCommand(): Command {
  return new Command('comments')
    .description('Manage pull request comments')
    .addCommand(listCommand())
    .addCommand(getCommand())
    .addCommand(addCommand())
    .addCommand(updateCommand())
    .addCommand(deleteCommand())
    .addCommand(resolveCommand())
    .addCommand(reopenCommand());
}
