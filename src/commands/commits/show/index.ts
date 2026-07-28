import { Command } from 'commander';
import { addJsonOption, addRepoOptions, runAction, resolveWorkspace } from '../../../utils/command';
import { getApi } from '../../../api/client';
import * as commits from '../../../services/commits';
import { printDiffstat, printJson } from '../../../utils/pr-format';
import { printCommitDetails } from '../../../utils/commit-format';

const showCommand = new Command('show');

addJsonOption(addRepoOptions(showCommand))
  .description('Show details of a specific commit')
  .requiredOption('-c, --commit <commit>', 'Commit hash or short hash')
  .option('--diff', 'Show the diff for the commit')
  .option('--stat', 'Show file statistics for the commit')
  .action(
    runAction(async (options) => {
      const ref: commits.CommitRef = {
        workspace: resolveWorkspace(options.workspace),
        repo: options.repo,
        commit: options.commit,
      };

      const api = await getApi();
      const commit = await commits.getCommit(api, ref);

      if (options.json) {
        const entries = options.stat ? await commits.getDiffstat(api, ref) : undefined;
        const diff = options.diff ? await commits.getDiff(api, ref) : undefined;
        return printJson({ ...commit, ...(entries && { diffstat: entries }), ...(diff && { diff }) });
      }

      printCommitDetails(commit);

      if (options.stat) {
        printDiffstat(await commits.getDiffstat(api, ref));
      }
      if (options.diff) {
        process.stdout.write(await commits.getDiff(api, ref));
      }
    }),
  );

export { showCommand };
