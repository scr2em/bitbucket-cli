# bitbucket-cli

**The CLI Bitbucket never shipped — for everyone stuck on Bitbucket Cloud.**

If you've moved from GitHub and miss having a real `gh`-style command line, this is it. `bitbucket-cli`
is built directly on Bitbucket's **official REST API** — the entire client is generated from Atlassian's
published OpenAPI specification, so it tracks the official API surface 1:1 and stays correct as the API
evolves. It's the closest thing to an official Bitbucket CLI.

> Independent, community-built, and not affiliated with Atlassian — but every request hits the official
> `api.bitbucket.org` endpoints, typed straight from the official spec.

## Highlights

- **Complete Pull Requests API** — create, review (approve / request-changes / decline / merge), diff,
  comments, tasks, statuses, activity, and more.
- **Refs, branches & tags** — list/create/get/delete branches and tags.
- **Branch governance** — branch restriction rules and the full branching model (repository and project).
- **Repositories** — list across a workspace or everything you can access.
- **Scriptable** — every read command supports `--json` for piping into `jq` and friends.
- **Friendly** — sensible errors that surface Bitbucket's own messages, a configurable default workspace,
  and confirmation guards on destructive actions (`-y` to skip).

## Installation

```bash
pnpm install
pnpm run build

# install the `bb` command globally
pnpm link --global
```

Or use the setup script:

```bash
./setup.sh
```

### Changing the command name

The installed command is **`bb`**. If you'd prefer something else (e.g. `bitbucket`, or both),
edit the `bin` field in `package.json` and re-run `pnpm link --global`:

```jsonc
// package.json — map any number of names to the CLI
"bin": {
  "bb": "dist/index.js",
  "bitbucket": "dist/index.js"
}
```

```bash
pnpm run build
pnpm link --global
```

Or, without touching the project, just add a shell alias to your `~/.zshrc` / `~/.bashrc`:

```bash
alias bitbucket="bb"
```

## Authentication

The easiest way to sign in is the guided `login` command:

```bash
bb login
```

It opens the Bitbucket API token page in your browser, waits while you create a token, then prompts you
to paste it back. The token is verified against the API and saved to `~/.config/.bitbucket-cli`. Use
`bb login --no-browser` if you'd rather open the page yourself.

Create your token at <https://bitbucket.org/account/settings/api-tokens/> and grant the scopes for what
you want to do (at least `Repositories: Read`; add write/admin scopes for creating PRs, merging, managing
restrictions, etc.). Credentials are stored as `email:api_token`; if you skip `login`, the CLI prompts for
them the first time you run any command.

## Conventions

These apply across the whole CLI:

- **`-w, --workspace`** is optional everywhere — it falls back to your configured default workspace
  (set one with `bb config set-workspace`).
- **`-r, --repo`** identifies the repository; **`-p, --pr <id>`** identifies a pull request.
- **`--json`** on any read command prints raw JSON instead of the formatted view.
- **`-y, --yes`** skips the confirmation prompt on destructive commands (delete, decline, merge).
- Append **`--help`** to any command or subcommand for its full, authoritative option list.

## Command reference

_Generated from the live command tree. Run any command with `--help` for the same information._

### `bb repos` — Repository management commands

- `bb repos list` — List repositories in a workspace
  - `--json` — Output raw JSON
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `--all` — List every repository you can access, across all workspaces
  - `-f, --filter <filter>` — Filter by name (case-insensitive substring, client-side)
  - `-q, --query <query>` — Bitbucket filter expression (server-side; requires a role)
  - `--sort <field>` — Sort field (e.g. -updated_on, name)
  - `-l, --limit <n>` — Maximum repositories to fetch _(default: "50")_
  - `--admin` — Only repositories where you have admin access
  - `--member` — Only repositories where you have read access
  - `--contributor` — Only repositories where you have write access
  - `--owner` — Only repositories you own

### `bb pr` — Pull request management commands

- `bb pr list` — List pull requests for a repository
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `--state <state>` — Filter by state (OPEN, MERGED, DECLINED, SUPERSEDED); repeatable
  - `--all` — Include pull requests in every state
  - `-q, --query <query>` — Bitbucket filter expression (e.g. 'author.nickname="jdoe"')
  - `--sort <field>` — Sort field (e.g. -updated_on)
  - `--commit <hash>` — Only list pull requests that contain this commit
  - `-l, --limit <n>` — Maximum pull requests to fetch _(default: "25")_
- `bb pr authored` — List workspace pull requests authored by a user
  - `--json` — Output raw JSON
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-u, --user <user>` **(required)** — Account id or UUID of the author
  - `--state <state>` — Filter by state (OPEN, MERGED, DECLINED, SUPERSEDED); repeatable
  - `--all` — Include pull requests in every state
  - `-l, --limit <n>` — Maximum pull requests to fetch _(default: "25")_
- `bb pr get` — Show details of a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
- `bb pr create` — Create a new pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-s, --source <branch>` **(required)** — Source branch
  - `-d, --destination <branch>` — Destination branch (defaults to the repository main branch)
  - `-t, --title <title>` — Pull request title (prompted if omitted)
  - `-m, --description <text>` — Pull request description
  - `--reviewer <uuid>` — Reviewer account UUID; repeatable
  - `--close-source-branch` — Close the source branch after merge
  - `--draft` — Create the pull request as a draft
- `bb pr update` — Update a pull request (title, description, or destination branch)
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-t, --title <title>` — New title
  - `-m, --description <text>` — New description
  - `-d, --destination <branch>` — New destination branch
- `bb pr approve` — Approve a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
- `bb pr unapprove` — Remove your approval from a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
- `bb pr request-changes` — Request changes on a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
- `bb pr unrequest-changes` — Remove your change request from a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
- `bb pr decline` — Decline (reject) a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-y, --yes` — Skip confirmation
- `bb pr merge` — Merge a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `--strategy <strategy>` — Merge strategy (merge_commit, squash, fast_forward, squash_fast_forward, rebase_fast_forward, rebase_merge)
  - `-m, --message <message>` — Commit message for the merge
  - `--close-source-branch` — Close the source branch after merging
  - `-y, --yes` — Skip confirmation
- `bb pr merge-status` — Check the status of an asynchronous merge task
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `--task <id>` **(required)** — Merge task id returned by an async merge
- `bb pr diff` — View the diff for a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--raw` — Print the raw unified diff instead of the rich split view
- `bb pr patch` — Print the patch (diff with commit metadata) for a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
- `bb pr diffstat` — Show the per-file change summary for a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
- `bb pr commits` — List the commits in a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
- `bb pr conflicts` — List file conflicts for a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
- `bb pr statuses` — List build/commit statuses for a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
- `bb pr activity` — Show the activity log for a pull request, or the whole repository
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-p, --pr <id>` — Pull request id (omit for repository-wide activity)

#### `bb pr comments`

- `bb pr comments list` — List comments on a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-l, --limit <n>` — Maximum comments to fetch _(default: "50")_
- `bb pr comments get` — Show a single comment
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-c, --comment <id>` **(required)** — Comment id
- `bb pr comments add` — Add a comment to a pull request (optionally inline or as a reply)
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-m, --message <text>` — Comment text (opens $EDITOR if omitted)
  - `--path <file>` — File path for an inline comment
  - `--line <n>` — Line number for an inline comment (with --path)
  - `--parent <id>` — Reply to an existing comment id
- `bb pr comments update` — Edit a comment
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-c, --comment <id>` **(required)** — Comment id
  - `-m, --message <text>` — New comment text (opens $EDITOR if omitted)
- `bb pr comments delete` — Delete a comment
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `-c, --comment <id>` **(required)** — Comment id
  - `-y, --yes` — Skip confirmation
- `bb pr comments resolve` — Resolve a comment thread
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `-c, --comment <id>` **(required)** — Comment id
- `bb pr comments reopen` — Reopen a resolved comment thread
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `-c, --comment <id>` **(required)** — Comment id

#### `bb pr tasks`

- `bb pr tasks list` — List tasks on a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-l, --limit <n>` — Maximum tasks to fetch _(default: "50")_
- `bb pr tasks get` — Show a single task
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-t, --task <id>` **(required)** — Task id
- `bb pr tasks add` — Create a task on a pull request
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-m, --message <text>` — Task text (opens $EDITOR if omitted)
  - `--comment <id>` — Attach the task to an existing comment id
- `bb pr tasks update` — Update a task (edit text or change its state)
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `-t, --task <id>` **(required)** — Task id
  - `-m, --message <text>` — New task text
  - `--resolve` — Mark the task as resolved
  - `--reopen` — Mark the task as unresolved
- `bb pr tasks delete` — Delete a task
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `-t, --task <id>` **(required)** — Task id
  - `-y, --yes` — Skip confirmation

#### `bb pr properties`

- `bb pr properties get` — Get a pull request application property
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--json` — Output raw JSON
  - `--app-key <key>` **(required)** — Connect app key
  - `--name <name>` **(required)** — Property name
- `bb pr properties set` — Create or update a pull request application property
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--app-key <key>` **(required)** — Connect app key
  - `--name <name>` **(required)** — Property name
  - `--value <json>` **(required)** — Property value as a JSON object
- `bb pr properties delete` — Delete a pull request application property
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-p, --pr <id>` **(required)** — Pull request id
  - `--app-key <key>` **(required)** — Connect app key
  - `--name <name>` **(required)** — Property name
  - `-y, --yes` — Skip confirmation

### `bb refs` — Branch and tag (refs) management commands

- `bb refs list` — List all branches and tags
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-q, --query <query>` — Bitbucket filter expression
  - `--sort <field>` — Sort field (e.g. name)
  - `-l, --limit <n>` — Maximum refs to fetch _(default: "50")_

#### `bb refs branches`

- `bb refs branches list` — List branches
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-q, --query <query>` — Bitbucket filter expression (e.g. 'name ~ "release"')
  - `--sort <field>` — Sort field (e.g. name, -target.date)
  - `-l, --limit <n>` — Maximum branches to fetch _(default: "50")_
- `bb refs branches get` — Show a branch
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-n, --name <name>` **(required)** — Branch name
- `bb refs branches create` — Create a branch
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-n, --name <name>` **(required)** — New branch name
  - `--from <target>` **(required)** — Source commit hash or branch name to branch from
- `bb refs branches delete` — Delete a branch
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-n, --name <name>` **(required)** — Branch name
  - `-y, --yes` — Skip confirmation

#### `bb refs tags`

- `bb refs tags list` — List tags
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-q, --query <query>` — Bitbucket filter expression (e.g. 'name ~ "v1"')
  - `--sort <field>` — Sort field (e.g. name, -target.date)
  - `-l, --limit <n>` — Maximum tags to fetch _(default: "50")_
- `bb refs tags get` — Show a tag
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-n, --name <name>` **(required)** — Tag name
- `bb refs tags create` — Create a tag
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-n, --name <name>` **(required)** — New tag name
  - `--target <hash>` **(required)** — Commit hash the tag points to
  - `-m, --message <text>` — Annotation message
- `bb refs tags delete` — Delete a tag
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-n, --name <name>` **(required)** — Tag name
  - `-y, --yes` — Skip confirmation

### `bb branches` — Branch management: branches, restrictions, and branching model

- `bb branches list` — List branches
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-q, --query <query>` — Bitbucket filter expression (e.g. 'name ~ "release"')
  - `--sort <field>` — Sort field (e.g. name, -target.date)
  - `-l, --limit <n>` — Maximum branches to fetch _(default: "50")_
- `bb branches get` — Show a branch
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-n, --name <name>` **(required)** — Branch name
- `bb branches create` — Create a branch
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `-n, --name <name>` **(required)** — New branch name
  - `-f, --from <target>` **(required)** — Source commit hash or branch name to branch from
- `bb branches delete` — Delete a branch
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-n, --name <name>` **(required)** — Branch name
  - `-y, --yes` — Skip confirmation

#### `bb branches restrictions`

- `bb branches restrictions list` — List branch restriction rules
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `--kind <kind>` — Filter by restriction kind
  - `--pattern <pattern>` — Filter by branch pattern
  - `-l, --limit <n>` — Maximum rules to fetch _(default: "50")_
- `bb branches restrictions get` — Show a branch restriction rule
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `--id <id>` **(required)** — Restriction rule id
- `bb branches restrictions create` — Create a branch restriction rule
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `--kind <kind>` — Restriction kind (e.g. push, force, delete, require_approvals_to_merge)
  - `--pattern <glob>` — Branch glob pattern (glob match)
  - `--branch-type <type>` — Branch type for branching_model match (e.g. development, production)
  - `--value <n>` — Numeric value (e.g. number of required approvals)
  - `--user <uuid>` — Exempt user UUID; repeatable
  - `--group <slug>` — Exempt group slug; repeatable
  - `--body <json>` — Full restriction body as JSON (overrides the flags above)
- `bb branches restrictions update` — Update a branch restriction rule
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `--kind <kind>` — Restriction kind (e.g. push, force, delete, require_approvals_to_merge)
  - `--pattern <glob>` — Branch glob pattern (glob match)
  - `--branch-type <type>` — Branch type for branching_model match (e.g. development, production)
  - `--value <n>` — Numeric value (e.g. number of required approvals)
  - `--user <uuid>` — Exempt user UUID; repeatable
  - `--group <slug>` — Exempt group slug; repeatable
  - `--body <json>` — Full restriction body as JSON (overrides the flags above)
  - `--id <id>` **(required)** — Restriction rule id
- `bb branches restrictions delete` — Delete a branch restriction rule
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--id <id>` **(required)** — Restriction rule id
  - `-y, --yes` — Skip confirmation

#### `bb branches model`

- `bb branches model get` — Get the active branching model for a repository
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
- `bb branches model effective` — Get the effective (currently applied) branching model for a repository
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
- `bb branches model settings` — Get the branching model configuration for a repository
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
- `bb branches model update-settings` — Update the branching model configuration for a repository
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `--json` — Output raw JSON
  - `--body <json>` **(required)** — Settings body as JSON (development, production, branch_types, default_branch_deletion)
- `bb branches model project-get` — Get the branching model for a project
  - `--json` — Output raw JSON
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `--project <key>` **(required)** — Project key
- `bb branches model project-settings` — Get the branching model configuration for a project
  - `--json` — Output raw JSON
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `--project <key>` **(required)** — Project key
- `bb branches model project-update-settings` — Update the branching model configuration for a project
  - `--json` — Output raw JSON
  - `-w, --workspace <workspace>` — Bitbucket workspace (uses configured default if omitted)
  - `--project <key>` **(required)** — Project key
  - `--body <json>` **(required)** — Settings body as JSON

### `bb commits` — Commit management commands

- `bb commits list` — List commits for a repository or branch
  - `-w, --workspace <workspace>` — Bitbucket workspace name (uses default if not specified)
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-b, --branch <branch>` — Branch name (defaults to main)
  - `-l, --limit <limit>` — Number of commits to show _(default: "20")_
  - `--author <author>` — Filter by author
  - `--since <since>` — Show commits since date (YYYY-MM-DD)
- `bb commits show` — Show details of a specific commit
  - `-w, --workspace <workspace>` **(required)** — Bitbucket workspace name
  - `-r, --repo <repo>` **(required)** — Repository name
  - `-c, --commit <commit>` **(required)** — Commit hash or short hash
  - `--diff` — Show the diff for the commit
  - `--stat` — Show file statistics for the commit

### `bb browse` — Browse workspaces, projects, and repositories interactively

- `bb browse` — Browse workspaces, projects, and repositories interactively
  - `-w, --workspace <workspace>` — Start with specific workspace (uses default if not specified)
  - `--admin` — Show only repositories where user has admin access
  - `--member` — Show only repositories where user has read access
  - `--contributor` — Show only repositories where user has write access
  - `--owner` — Show only repositories owned by the user

### `bb config` — Manage CLI configuration settings

- `bb config set-workspace` — Set the default workspace
  - `-w, --workspace <workspace>` — Workspace name to set as default
- `bb config remove-workspace` — Remove the default workspace
  - `-y, --yes` — Skip confirmation prompt
- `bb config show` — Show current configuration

> **Note:** the `commits` and `browse` commands predate the generated client. `browse` offers an
> interactive workspace → project → repository → pull request explorer; `commits` is still being
> wired to the API.

## Requirements

- Node.js 16+
- Git and an SSH key configured for Bitbucket (for cloning)
- `git-split-diffs` is bundled and powers the rich `pr diff` view

## Troubleshooting

### 401 Unauthorized

If you get a 401, check that:

1. You used the `email:api_token` format (not a password).
2. Your API token is current — tokens expire; create a new one if needed.
3. The token has the scopes the command needs (read for listing, write/admin for mutations).
4. Test directly:
   ```bash
   curl -u email:api_token https://api.bitbucket.org/2.0/workspaces
   ```

To replace stored credentials, delete `~/.config/.bitbucket-cli` and run any command to be prompted again.

## Development

```bash
pnpm install      # install dependencies
pnpm run build    # compile to dist/
pnpm run dev      # run from source via ts-node
pnpm start        # run the built CLI
```

### API client (generated)

The Bitbucket REST client in `src/api/generated/bitbucket-api.ts` is generated from the vendored OpenAPI
spec (`bitbucket-openapi.json`) using
[`swagger-typescript-api`](https://github.com/acacode/swagger-typescript-api), giving the CLI fully-typed
request/response models straight from Atlassian's source of truth.

```bash
# Regenerate the client after updating bitbucket-openapi.json
pnpm run generate:api
```

The generated file is committed so the project builds without running codegen. It is wired up in
`src/api/client.ts` (auth, pagination, query serialization, friendly errors); commands talk to thin
service facades in `src/services/*` rather than the generated methods directly.

## License

MIT
