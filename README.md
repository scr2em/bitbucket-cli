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

# Filter by user role
bitbucket repos list --workspace "your-workspace" --admin
bitbucket repos list --workspace "your-workspace" --member
bitbucket repos list --workspace "your-workspace" --contributor
bitbucket repos list --workspace "your-workspace" --owner

# Combine filters
bitbucket repos list --workspace "your-workspace" --admin --filter "react"
```

### First-time setup

On first run, the CLI will prompt you for your Bitbucket credentials and save them to `~/.config/.btoken`.

You need to provide your credentials in the format: `username:api_token`

You can create an API token at: https://bitbucket.org/account/settings/api-tokens/

Make sure the token has "Repositories: Read" permission.

## Commands

- `bitbucket repos list` - List repositories in a workspace
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--filter, -f` - Filter repositories by name (optional)
  - `--admin` - Show only repositories where user has admin access
  - `--member` - Show only repositories where user has read access
  - `--contributor` - Show only repositories where user has write access
  - `--owner` - Show only repositories owned by the user

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

1. **Correct format**: Use `username:api_token` format
2. **Valid username**: Use your Bitbucket username, not email address
3. **Valid API token**: Ensure your API token is correct and not expired
4. **Token permissions**: Ensure your API token has `Repositories: Read` permission
5. **Test with cURL**: 
   ```bash
   curl -u username:api_token https://api.bitbucket.org/2.0/repositories/your-workspace
   ```

### Common Issues

- **Wrong username**: Use your Bitbucket username (e.g., `john.doe`), not your email
- **Expired token**: API tokens can expire, create a new one if needed
- **Missing permissions**: API token needs repository read access
- **Invalid workspace**: Make sure the workspace name is correct (case-sensitive)
- **Wrong format**: Make sure you're using `username:api_token` format

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
