# Folder Structure

The CLI is organized by commands and their sub-commands for better scalability and maintainability.

```
src/
├── commands/                    # All CLI commands organized by feature
│   ├── repos/                  # Repository management commands
│   │   ├── index.ts           # Main repos command
│   │   ├── list/              # List repositories
│   │   │   └── index.ts
│   │   ├── clone/             # Clone repositories
│   │   │   └── index.ts
│   │   └── create/            # Create repositories (future)
│   │       └── index.ts
│   ├── pullrequests/          # Pull request management commands
│   │   ├── index.ts           # Main pr command
│   │   ├── list/              # List pull requests
│   │   │   └── index.ts
│   │   └── create/            # Create pull requests
│   │       └── index.ts
│   ├── branches/              # Branch management commands
│   │   ├── index.ts           # Main branches command
│   │   ├── list/              # List branches
│   │   │   └── index.ts
│   │   ├── create/            # Create branches
│   │   │   └── index.ts
│   │   └── delete/            # Delete branches
│   │       └── index.ts
│   └── commits/               # Commit management commands
│       ├── index.ts           # Main commits command
│       ├── list/              # List commits
│       │   └── index.ts
│       └── show/              # Show commit details
│           └── index.ts
├── services/                  # API services
│   └── bitbucket.ts          # Bitbucket API client
├── utils/                     # Utility functions
│   ├── token.ts              # Token management
│   ├── interactive.ts        # Interactive prompts
│   └── actions.ts            # Actions (clone, open browser)
└── index.ts                  # Main CLI entry point
```

## Command Structure

Each command follows this pattern:

1. **Main Command** (`commands/[feature]/index.ts`): Groups related sub-commands
2. **Sub-Commands** (`commands/[feature]/[action]/index.ts`): Individual actions
3. **Shared Services**: Common functionality in `services/` and `utils/`

## Usage Examples

```bash
# Repository commands
bitbucket repos list --workspace "my-workspace" --admin
bitbucket repos clone --workspace "my-workspace"

# Pull request commands
bitbucket pr list --workspace "my-workspace" --repo "my-repo"
bitbucket pr create --workspace "my-workspace" --repo "my-repo" --source "feature" --destination "main"

# Branch commands
bitbucket branches list --workspace "my-workspace" --repo "my-repo"
bitbucket branches create --workspace "my-workspace" --repo "my-repo" --name "new-feature"
bitbucket branches delete --workspace "my-workspace" --repo "my-repo" --name "old-feature"

# Commit commands
bitbucket commits list --workspace "my-workspace" --repo "my-repo" --limit 10
bitbucket commits show --workspace "my-workspace" --repo "my-repo" --commit "abc123"
```

## Adding New Commands

To add a new command:

1. Create the folder structure: `src/commands/[feature]/[action]/`
2. Create `index.ts` files for each command
3. Export the command from the main feature index
4. Add the feature command to `src/index.ts`

Example for adding a "webhooks" command:

```bash
mkdir -p src/commands/webhooks/list src/commands/webhooks/create src/commands/webhooks/delete
```
