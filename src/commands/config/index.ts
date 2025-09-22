import { Command } from 'commander';
import { consola } from 'consola';
import { setDefaultWorkspace, getDefaultWorkspace, getToken, removeDefaultWorkspace } from '../../utils/token';
import { listWorkspaces } from '../../services/bitbucket';
import { selectWorkspace, confirmOverwrite } from '../../utils/interactive';

const configCommand = new Command('config');

configCommand
  .description('Manage CLI configuration settings')
  .addCommand(
    new Command('set-workspace')
      .description('Set the default workspace')
      .option('-w, --workspace <workspace>', 'Workspace name to set as default')
      .action(async (options) => {
        try {
          if (options.workspace) {
            setDefaultWorkspace(options.workspace);
          } else {
            // Interactive mode - let user select from available workspaces
            const token = await getToken();
            const workspaces = await listWorkspaces(token);
            
            if (workspaces.length === 0) {
              consola.warn('No workspaces found.');
              return;
            }
            
            const selectedWorkspace = await selectWorkspace(workspaces);
            setDefaultWorkspace(selectedWorkspace.slug);
          }
        } catch (error) {
          consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
          process.exit(1);
        }
      })
  )
  .addCommand(
    new Command('remove-workspace')
      .description('Remove the default workspace')
      .option('-y, --yes', 'Skip confirmation prompt')
      .action(async (options) => {
        try {
          const currentWorkspace = getDefaultWorkspace();
          
          if (!currentWorkspace) {
            consola.info('No default workspace is currently set.');
            return;
          }
          
          if (!options.yes) {
            const confirmed = await confirmOverwrite(`Are you sure you want to remove the default workspace '${currentWorkspace}'?`);
            if (!confirmed) {
              consola.info('Operation cancelled.');
              return;
            }
          }
          
          removeDefaultWorkspace();
        } catch (error) {
          consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
          process.exit(1);
        }
      })
  )
  .addCommand(
    new Command('show')
      .description('Show current configuration')
      .action(() => {
        try {
          const defaultWorkspace = getDefaultWorkspace();
          
          consola.log('Current Configuration:');
          consola.log('====================');
          
          if (defaultWorkspace) {
            consola.log(`Default Workspace: ${defaultWorkspace}`);
          } else {
            consola.log('Default Workspace: Not set');
          }
          
          consola.log(`Config File: ~/.config/.bitbucket-cli`);
        } catch (error) {
          consola.error('Error:', error instanceof Error ? error.message : 'Unknown error');
          process.exit(1);
        }
      })
  );

export { configCommand };
