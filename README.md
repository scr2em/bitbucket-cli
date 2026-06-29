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
# Repository commands
bitbucket repos list --workspace "your-workspace"
bitbucket repos list --workspace "your-workspace" --admin --filter "react"
bitbucket repos clone --workspace "your-workspace"

# Pull request commands
bitbucket pr list --workspace "your-workspace" --repo "my-repo"
bitbucket pr create --workspace "your-workspace" --repo "my-repo" --source "feature" --destination "main"

# Branch commands
bitbucket branches list --workspace "your-workspace" --repo "my-repo"
bitbucket branches create --workspace "your-workspace" --repo "my-repo" --name "new-feature"

# Commit commands
bitbucket commits list --workspace "your-workspace" --repo "my-repo" --limit 10
bitbucket commits show --workspace "your-workspace" --repo "my-repo" --commit "abc123"
```

### First-time setup

On first run, the CLI will prompt you for your Bitbucket credentials and save them to `~/.config/.btoken`.

You need to provide your credentials in the format: `username:api_token`

You can create an API token at: https://bitbucket.org/account/settings/api-tokens/

Make sure the token has "Repositories: Read" permission.

## Commands

### Repository Management (`repos`)

- `bitbucket repos list` - List repositories in a workspace
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--filter, -f` - Filter repositories by name (optional)
  - `--admin` - Show only repositories where user has admin access
  - `--member` - Show only repositories where user has read access
  - `--contributor` - Show only repositories where user has write access
  - `--owner` - Show only repositories owned by the user

- `bitbucket repos clone` - Clone a repository from a workspace
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--repo, -r` - Repository name to clone (optional, shows interactive list if not provided)
  - `--admin`, `--member`, `--contributor`, `--owner` - Role filters

### Pull Request Management (`pr`)

The `pr` command implements every action in the [Bitbucket Cloud Pull Requests REST
API](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-pullrequests/).
The client is generated from the official OpenAPI spec (see
[API client](#api-client-generated)).

Common options: `-w, --workspace` (falls back to the configured default), `-r, --repo`,
and `-p, --pr <id>` for pull-request-scoped commands. Read commands accept `--json` for
machine-readable output.

**Core**

- `bitbucket pr list -r <repo>` - List pull requests
  - `--state <state>` (repeatable), `--all`, `-q/--query`, `--sort`, `-l/--limit`
  - `--commit <hash>` - only PRs that contain a commit
- `bitbucket pr authored -u <user>` - List workspace PRs authored by a user
- `bitbucket pr get -r <repo> -p <id>` - Show a pull request
- `bitbucket pr create -r <repo> -s <source>` - Create a pull request
  - `-d/--destination`, `-t/--title`, `-m/--description`, `--reviewer <uuid>` (repeatable), `--close-source-branch`, `--draft`
- `bitbucket pr update -r <repo> -p <id>` - Update title/description/destination

**Review actions**

- `bitbucket pr approve` / `unapprove`
- `bitbucket pr request-changes` / `unrequest-changes`
- `bitbucket pr decline` - Decline a pull request (`-y` to skip confirmation)
- `bitbucket pr merge` - Merge (`--strategy`, `-m/--message`, `--close-source-branch`, `-y`)
- `bitbucket pr merge-status --task <id>` - Poll an async merge task

**Content**

- `bitbucket pr diff` - Rich split-diff view (`--raw` for plain unified diff)
- `bitbucket pr patch` - Print the patch (diff + commit metadata)
- `bitbucket pr diffstat` - Per-file change summary
- `bitbucket pr commits` - Commits in the pull request
- `bitbucket pr conflicts` - File conflicts
- `bitbucket pr statuses` - Build/commit statuses
- `bitbucket pr activity` - Activity log (omit `-p` for repository-wide activity)

**Comments** (`bitbucket pr comments <sub>`)

- `list`, `get -c <id>`, `add` (`-m`, `--path`/`--line` for inline, `--parent` for replies),
  `update -c <id>`, `delete -c <id>`, `resolve -c <id>`, `reopen -c <id>`

**Tasks** (`bitbucket pr tasks <sub>`)

- `list`, `get -t <id>`, `add` (`-m`, `--comment`), `update -t <id>` (`-m`, `--resolve`/`--reopen`), `delete -t <id>`

**Application properties** (`bitbucket pr properties <sub>`, for Connect apps)

- `get`, `set --value <json>`, `delete` — each takes `--app-key <key> --name <name>`

### Branch Management (`branches`)

- `bitbucket branches list` - List branches for a repository
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--repo, -r` - Repository name (required)
  - `--main` - Show only main branch
  - `--feature` - Show only feature branches
  - `--merged` - Show only merged branches

- `bitbucket branches create` - Create a new branch
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--repo, -r` - Repository name (required)
  - `--name, -n` - Branch name (required)
  - `--from, -f` - Source branch to create from (default: main)

- `bitbucket branches delete` - Delete a branch
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--repo, -r` - Repository name (required)
  - `--name, -n` - Branch name to delete (required)
  - `--force` - Force delete without confirmation

### Commit Management (`commits`)

- `bitbucket commits list` - List commits for a repository or branch
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--repo, -r` - Repository name (required)
  - `--branch, -b` - Branch name (defaults to main)
  - `--limit, -l` - Number of commits to show (default: 20)
  - `--author` - Filter by author
  - `--since` - Show commits since date (YYYY-MM-DD)

- `bitbucket commits show` - Show details of a specific commit
  - `--workspace, -w` - Bitbucket workspace name (required)
  - `--repo, -r` - Repository name (required)
  - `--commit, -c` - Commit hash or short hash (required)
  - `--diff` - Show the diff for the commit
  - `--stat` - Show file statistics for the commit

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

### API client (generated)

The Bitbucket REST client in `src/api/generated/bitbucket-api.ts` is generated from the
vendored OpenAPI spec (`bitbucket-openapi.json`) using
[`swagger-typescript-api`](https://github.com/acacode/swagger-typescript-api). This gives
the CLI fully-typed request/response models straight from Atlassian's source of truth.

```bash
# Regenerate the client after updating bitbucket-openapi.json
npm run generate:api
```

The generated file is committed so the project builds without running codegen. It is wired
up in `src/api/client.ts` (auth, pagination, query serialization, friendly errors); commands
talk to the thin facade in `src/services/pullrequests.ts` rather than the generated methods
directly.
