import { Command } from 'commander';
import { consola } from 'consola';
import inquirer from 'inquirer';
import axios from 'axios';
import open from 'open';
import { setToken } from '../../utils/token';
import { createAuthHeader } from '../../utils/api';
import { runAction } from '../../utils/command';

const TOKEN_PAGE = 'https://bitbucket.org/account/settings/api-tokens/';
const API_BASE = 'https://api.bitbucket.org/2.0';

const loginCommand = new Command('login');

loginCommand
  .description('Authenticate by creating a Bitbucket API token and pasting it here')
  .option('--no-browser', 'Do not open the API token page automatically')
  .action(
    runAction(async (options) => {
      consola.info('To use this CLI you need an Atlassian API token for your Bitbucket account.');
      consola.info(`Create one here: ${TOKEN_PAGE}`);
      consola.info('Suggested scopes: Repositories and Pull requests (read + write), Account (read).');
      consola.log('');

      if (options.browser) {
        try {
          await open(TOKEN_PAGE);
          consola.success('Opened the API token page in your browser.');
        } catch {
          consola.warn(`Could not open a browser automatically. Visit: ${TOKEN_PAGE}`);
        }
      }

      // Wait for the user to create the token and paste it back.
      const { email, token } = await inquirer.prompt([
        {
          type: 'input',
          name: 'email',
          message: 'Your Atlassian account email:',
          validate: (value: string) => (value.trim() ? true : 'Email is required.'),
        },
        {
          type: 'password',
          name: 'token',
          mask: '*',
          message: 'Paste your API token:',
          validate: (value: string) => (value.trim() ? true : 'Token is required.'),
        },
      ]);

      const credentials = `${email.trim()}:${token.trim()}`;
      const authHeader = createAuthHeader(credentials);

      consola.info('Verifying credentials…');
      const response = await axios.get(`${API_BASE}/user`, {
        headers: { Authorization: authHeader, Accept: 'application/json' },
        validateStatus: () => true,
      });

      if (response.status === 401) {
        consola.error('Those credentials were rejected (401 Unauthorized).');
        consola.info('Check the email and token, then run `bitbucket login` again.');
        process.exit(1);
      }

      setToken(credentials);

      if (response.status === 200) {
        const name = response.data?.display_name || response.data?.nickname || email.trim();
        consola.success(`Logged in as ${name}. Credentials saved to ~/.config/.bitbucket-cli`);
        consola.info('Set a default workspace next: bitbucket config set-workspace');
      } else if (response.status === 403) {
        consola.success('Credentials saved.');
        consola.warn('The token authenticated but lacks the "Account: read" scope, so some commands may be limited.');
      } else {
        consola.success('Credentials saved.');
        consola.warn(`Verification returned HTTP ${response.status}. If commands fail, recreate the token with the required scopes.`);
      }
    }),
  );

export { loginCommand };
