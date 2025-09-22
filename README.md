# Bitbucket CLI

A TypeScript CLI tool for interacting with Bitbucket repositories.

## Features

- List repositories in a Bitbucket workspace
- Filter repositories by name (case insensitive)
- Interactive repository selection
- Clone repositories via SSH
- Open repositories in browser
- Secure token management

## Installation

```bash
npm install
npm run build
```

Or use the setup script:

```bash
./setup.sh
```

## Usage

### List repositories

```bash
# List all repositories in a workspace
bitbucket repos list --workspace "your-workspace"

# Filter repositories by name
bitbucket repos list --workspace "your-workspace" --filter "react"
```

### First-time setup

On first run, the CLI will prompt you for your Bitbucket credentials and save them to `~/.config/.btoken`.

You need to provide your credentials in the format: `username:app-password`

You can create an app password at: https://bitbucket.org/account/settings/app-passwords/

## Commands

- `bitbucket repos list` - List repositories in a workspace
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--filter, -f` - Filter repositories by name (optional)

## Interactive Features

After listing repositories, you can:
1. Select a repository from the interactive list
2. Choose an action:
   - **Clone (SSH)**: Clone the repository using SSH
   - **Open in browser**: Open the repository in your default browser

## Requirements

- Node.js 16+
- Git (for cloning repositories)
- SSH key configured for Bitbucket (for cloning)

## Troubleshooting

### 401 Unauthorized Error

If you get a 401 error, make sure:

1. **Correct format**: Use `username:app-password` format (not just the app password)
2. **Valid username**: Use your Bitbucket username, not email address
3. **App password permissions**: Ensure your app password has `Repositories: Read` permission
4. **Test with cURL**: 
   ```bash
   curl -u username:app-password https://api.bitbucket.org/2.0/repositories/your-workspace
   ```

### Common Issues

- **Wrong username**: Use your Bitbucket username (e.g., `john.doe`), not your email
- **Missing permissions**: App password needs repository read access
- **Invalid workspace**: Make sure the workspace name is correct (case-sensitive)

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Run the built CLI
npm start
```
