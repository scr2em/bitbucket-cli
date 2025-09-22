import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as readline from 'readline';
import { consola } from 'consola';
import { logger } from './logger';

const CONFIG_FILE = path.join(os.homedir(), '.config', '.bitbucket-cli');

interface Config {
  token?: string;
  defaultWorkspace?: string;
}

function parseConfigFile(): Config {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const content = fs.readFileSync(CONFIG_FILE, 'utf8');
      const config: Config = {};
      
      content.split('\n').forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) {
          const [key, ...valueParts] = trimmedLine.split('=');
          if (key && valueParts.length > 0) {
            const value = valueParts.join('=').trim();
            if (key === 'token') {
              config.token = value;
            } else if (key === 'defaultWorkspace') {
              config.defaultWorkspace = value;
            }
          }
        }
      });
      
      return config;
    }
  } catch (error) {
    // File doesn't exist or can't be read, return empty config
  }
  
  return {};
}

function saveConfig(config: Config): void {
  try {
    // Ensure .config directory exists
    const configDir = path.dirname(CONFIG_FILE);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    
    let content = '# Bitbucket CLI Configuration\n';
    if (config.token) {
      content += `token=${config.token}\n`;
    }
    if (config.defaultWorkspace) {
      content += `defaultWorkspace=${config.defaultWorkspace}\n`;
    }
    
    fs.writeFileSync(CONFIG_FILE, content);
  } catch (error) {
    consola.error('Failed to save configuration:', error);
    throw new Error('Could not save configuration to file');
  }
}

export async function getToken(): Promise<string> {
  const config = parseConfigFile();
  
  if (config.token) {
    return config.token;
  }

  // Token doesn't exist, prompt user
  consola.info('Bitbucket credentials not found. Please provide your Bitbucket username and API token.');
  consola.info('You can create an API token at: https://bitbucket.org/account/settings/api-tokens/');
  consola.info('Format: username:api_token (e.g., john.doe:ATBBxxxxxxxxxxxx)');
  consola.info('Make sure the token has "Repositories: Read" permission.');
  
  const token = await promptForToken();
  
  // Save token to config file
  saveConfig({ ...config, token });
  consola.success('Credentials saved successfully!');

  return token;
}

export function getDefaultWorkspace(): string | undefined {
  const config = parseConfigFile();
  return config.defaultWorkspace;
}

export function setDefaultWorkspace(workspace: string): void {
  const config = parseConfigFile();
  config.defaultWorkspace = workspace;
  saveConfig(config);
  consola.success(`Default workspace set to: ${workspace}`);
}

export function removeDefaultWorkspace(): void {
  const config = parseConfigFile();
  if (config.defaultWorkspace) {
    delete config.defaultWorkspace;
    saveConfig(config);
    consola.success('Default workspace removed successfully.');
  } else {
    consola.info('No default workspace is currently set.');
  }
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
    
    logger.info(`Logged in as ${email}`);
  } catch (error) {
  }
}
