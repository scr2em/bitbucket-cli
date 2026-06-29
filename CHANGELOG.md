# @scr2em/bitbucket-cli

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
