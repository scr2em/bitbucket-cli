import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as readline from 'readline';
import { consola } from 'consola';

const TOKEN_FILE = path.join(os.homedir(), '.config', '.btoken');

export async function getToken(): Promise<string> {
  try {
    // Check if token file exists
    if (fs.existsSync(TOKEN_FILE)) {
      const token = fs.readFileSync(TOKEN_FILE, 'utf8').trim();
      if (token) {
        return token;
      }
    }
  } catch (error) {
    // File doesn't exist or can't be read, continue to prompt user
  }

  // Token doesn't exist, prompt user
  consola.info('Bitbucket credentials not found. Please provide your Bitbucket username and API token.');
  consola.info('You can create an API token at: https://bitbucket.org/account/settings/api-tokens/');
  consola.info('Format: username:api_token (e.g., john.doe:ATBBxxxxxxxxxxxx)');
  consola.info('Make sure the token has "Repositories: Read" permission.');
  
  const token = await promptForToken();
  
  // Save token to file
  try {
    // Ensure .config directory exists
    const configDir = path.dirname(TOKEN_FILE);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    
    fs.writeFileSync(TOKEN_FILE, token);
    consola.success('Credentials saved successfully!');
  } catch (error) {
    consola.error('Failed to save credentials:', error);
    throw new Error('Could not save credentials to file');
  }

  return token;
}

function promptForToken(): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter your Bitbucket credentials (username:api_token): ', (token) => {
      rl.close();
      if (!token.trim()) {
        consola.error('Credentials cannot be empty');
        process.exit(1);
      }
      
      // Validate format
      if (!token.includes(':')) {
        consola.error('Invalid format. Please use: username:api_token');
        process.exit(1);
      }
      
      resolve(token.trim());
    });
  });
}

export async function displayLoggedInUser(): Promise<void> {
  try {
    const token = await getToken();
    
    // Extract email from the token (format: email:api_token)
    const email = token.split(':')[0];
    
    consola.info(`Logged in as ${email}`);
  } catch (error) {
  }
}
