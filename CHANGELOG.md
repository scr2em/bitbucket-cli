# @scr2em/bitbucket-cli

## 1.3.0

### Minor Changes

- `bb commits list` is implemented — it previously printed "Commit listing not implemented yet". It
  prints commits newest-first for a repository, or for the branch, tag, or hash given with
  `-b/--branch`. `--author` and `--since` narrow the newest `--limit` commits that were fetched, and
  `--json` prints them raw. `-w/--workspace` falls back to the configured default workspace, like the
  other repository-scoped commands.

## 1.2.2

### Patch Changes

- `bb commits show` is implemented — it previously printed "Commit details not implemented yet". It
  prints the commit metadata and message, and optionally the per-file summary (`--stat`), the raw
  git-style diff (`--diff`), or everything as JSON (`--json`). `-w/--workspace` now falls back to the
  configured default workspace, like the other repository-scoped commands.

## 1.2.1

### Patch Changes

- `bb pr diff` no longer requires `git-split-diffs` on your `PATH`. The bundled dependency's
  executable is now resolved from `node_modules` and run with the current Node binary.

## 1.2.0

### Minor Changes

- List commands now render as aligned tables (one row per item) instead of multi-line blocks, making
  output much easier to scan. Applies to pull requests, comments, tasks, commits, statuses, diffstat,
  activity, branches/tags, branch restrictions, and repositories. Single-item detail views are unchanged.

  Author/user columns are colorized, with each user's color derived from their name length (colors are
  disabled automatically when output is piped or `NO_COLOR` is set).

## 1.1.0

### Minor Changes

- Major feature release built on a generated, spec-accurate Bitbucket API client.

  - **Pull Requests**: full coverage of the Pull Requests REST API — list/get/create/update, approve/unapprove, request-changes, decline, merge (+ merge-status), diff/patch/diffstat, commits, conflicts, statuses, activity, and comments, tasks, and application-properties subcommands.
  - **Refs**: list/get/create/delete branches and tags (`refs`).
  - **Branches**: branch CRUD plus branch restriction rules and the full branching model for repositories and projects (`branches`).
  - **Repositories**: reworked `repos list` (workspace or `--all`, role filters, query/sort/limit, `--json`).
  - **`login` command**: opens the Atlassian API-token page, waits for you to paste a token, verifies it, and saves it.
  - **`--json`** output on read commands and friendlier API errors throughout.
  - The CLI binary is now **`bb`** (renamed from `bitbucket`).
  - Tooling: switched to pnpm and added Changesets-based releases.
