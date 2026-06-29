import { Command } from 'commander';
import { consola } from 'consola';
import { addPrOptions, addJsonOption, runAction, parseId, confirm, editor } from '../../utils/command';
import { prContext } from './context';
import * as prs from '../../services/pullrequests';
import { printJson, printTasks, printTask } from '../../utils/pr-format';

function listCommand(): Command {
  const command = new Command('list');
  addJsonOption(addPrOptions(command))
    .description('List tasks on a pull request')
    .option('-l, --limit <n>', 'Maximum tasks to fetch', '50')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const tasks = await prs.listTasks(api, ref, { limit: Number(options.limit) || undefined });
        if (options.json) return printJson(tasks);
        if (tasks.length === 0) return consola.info('No tasks found.');
        printTasks(tasks);
      }),
    );
  return command;
}

function getCommand(): Command {
  const command = new Command('get');
  addJsonOption(addPrOptions(command))
    .description('Show a single task')
    .requiredOption('-t, --task <id>', 'Task id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const task = await prs.getTask(api, ref, parseId(options.task, 'task id'));
        if (options.json) return printJson(task);
        printTask(task);
      }),
    );
  return command;
}

function addCommand(): Command {
  const command = new Command('add');
  addJsonOption(addPrOptions(command))
    .description('Create a task on a pull request')
    .option('-m, --message <text>', 'Task text (opens $EDITOR if omitted)')
    .option('--comment <id>', 'Attach the task to an existing comment id')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const content = options.message || (await editor('Task'));
        if (!content || !content.trim()) {
          consola.error('Task text cannot be empty.');
          process.exit(1);
        }
        const created = await prs.createTask(api, ref, content, {
          commentId: options.comment ? parseId(options.comment, 'comment id') : undefined,
        });
        if (options.json) return printJson(created);
        consola.success(`Created task #${created.id}`);
      }),
    );
  return command;
}

function updateCommand(): Command {
  const command = new Command('update');
  addJsonOption(addPrOptions(command))
    .description('Update a task (edit text or change its state)')
    .requiredOption('-t, --task <id>', 'Task id')
    .option('-m, --message <text>', 'New task text')
    .option('--resolve', 'Mark the task as resolved')
    .option('--reopen', 'Mark the task as unresolved')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        if (options.resolve && options.reopen) {
          consola.error('Use only one of --resolve or --reopen.');
          process.exit(1);
        }
        if (!options.message && !options.resolve && !options.reopen) {
          consola.error('Nothing to update. Provide --message, --resolve, or --reopen.');
          process.exit(1);
        }
        const updated = await prs.updateTask(api, ref, parseId(options.task, 'task id'), {
          content: options.message,
          state: options.resolve ? 'RESOLVED' : options.reopen ? 'UNRESOLVED' : undefined,
        });
        if (options.json) return printJson(updated);
        consola.success(`Updated task #${updated.id}`);
      }),
    );
  return command;
}

function deleteCommand(): Command {
  const command = new Command('delete');
  addPrOptions(command)
    .description('Delete a task')
    .requiredOption('-t, --task <id>', 'Task id')
    .option('-y, --yes', 'Skip confirmation')
    .action(
      runAction(async (options) => {
        const { api, ref } = await prContext(options);
        const taskId = parseId(options.task, 'task id');
        if (!options.yes && !(await confirm(`Delete task #${taskId}?`))) {
          return consola.info('Cancelled.');
        }
        await prs.deleteTask(api, ref, taskId);
        consola.success(`Deleted task #${taskId}`);
      }),
    );
  return command;
}

/** The `pr tasks` command group. */
export function tasksCommand(): Command {
  return new Command('tasks')
    .description('Manage pull request tasks')
    .addCommand(listCommand())
    .addCommand(getCommand())
    .addCommand(addCommand())
    .addCommand(updateCommand())
    .addCommand(deleteCommand());
}
