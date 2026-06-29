# Developer notes

Maintainer/contributor documentation for `@scr2em/bitbucket-cli`. End-user docs live in
[`README.md`](./README.md).

## Prerequisites

- Node.js 16+ (developed on Node 24)
- [pnpm](https://pnpm.io) 10.x (the repo pins `packageManager` and ships a `pnpm-lock.yaml`)

## Setup

```bash
pnpm install      # install dependencies
pnpm run build    # compile TypeScript to dist/
```

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm run build` | Compile `src/` → `dist/` with `tsc` |
| `pnpm run dev` | Run the CLI from source via `ts-node` (e.g. `pnpm run dev -- pr list -r repo`) |
| `pnpm start` | Run the built CLI (`node dist/index.js`) |
| `pnpm run generate:api` | Regenerate the typed API client from the OpenAPI spec |
| `pnpm run changeset` | Add a changeset describing your changes |
| `pnpm run version` | Apply pending changesets: bump version + update `CHANGELOG.md` |
| `pnpm run release` | Build and publish to npm (`changeset publish`) |

## Project structure

```
bitbucket-openapi.json        Vendored Bitbucket OpenAPI spec (source of truth)
src/
  api/
    generated/bitbucket-api.ts  Generated client (do not edit by hand)
    client.ts                   Configured Api singleton: auth, pagination, errors
  services/                     Thin, intention-revealing facades over the client
    pullrequests.ts  refs.ts  branch-restrictions.ts  branching-model.ts  repositories.ts
  commands/                     Commander command tree (one folder per top-level command)
    pullrequests/  refs/  branches/  repos/  login/  config/  commits/  browse/
  utils/                        command helpers, formatters, token storage, logger
  index.ts                      Wires the command tree and the preAction hook
```

## Architecture

The whole thing is built around a **generated client**, so the type-safe API surface stays in
lockstep with Bitbucket's official spec.

1. **Generated client** (`src/api/generated/bitbucket-api.ts`) — produced by
   [`swagger-typescript-api`](https://github.com/acacode/swagger-typescript-api) from
   `bitbucket-openapi.json`. Committed so the project builds without running codegen.
2. **Configured client** (`src/api/client.ts`) — wraps the generated `Api` with:
   - Basic auth applied to `instance.defaults.headers.common.Authorization` (so it reaches both
     generated calls *and* the direct `instance.get` calls used to follow pagination links).
   - `paramsSerializer: { indexes: null }` so repeated query params serialize as
     `state=OPEN&state=MERGED` (what Bitbucket expects), not `state[]=`.
   - A response interceptor that turns axios errors into concise messages (surfacing Bitbucket's
     own `error.message`).
   - `paginate()` (follows `next` links) and `unwrap()` helpers.
3. **Service facades** (`src/services/*`) — expose clean `(api, ref, …)` functions and hide the
   generated methods' awkward, position-sensitive argument order.
4. **Commands** (`src/commands/*`) — Commander definitions that resolve context, call a service,
   and render output (human-readable, or `--json`). Shared helpers live in `src/utils/command.ts`.

### Regenerating the API client

```bash
# 1. Refresh the spec if needed (the published OpenAPI v3 document):
#    https://dac-static.atlassian.com/cloud/bitbucket/swagger.v3.json
#    save it as bitbucket-openapi.json
# 2. Regenerate:
pnpm run generate:api
pnpm run build
```

> ⚠️ A few endpoints have no request-body parameter in the generated client because the spec omits
> their body schema (e.g. `refsBranchesCreate`, `branchingModelSettingsUpdate`). The service layer
> posts/puts those bodies directly via `api.instance.post/put` — keep that in mind after regenerating.

### Adding a command

1. Add a function to the relevant `src/services/*` facade (or create a new one).
2. Add a Commander builder under `src/commands/<group>/`, using `runAction`, `resolveWorkspace`,
   `addRepoOptions`/`addPrOptions`, and `addJsonOption` from `src/utils/command.ts`.
3. Register it in the group's `index.ts` (and register a new group in `src/index.ts`).

## Releasing (Changesets)

Releases are managed with [Changesets](https://github.com/changesets/changesets).

```bash
# 1. Describe your change (pick patch/minor/major):
pnpm run changeset

# 2. Commit the generated .changeset/*.md file along with your code.

# 3. When ready to release, apply pending changesets (bumps version + writes CHANGELOG.md):
pnpm run version

# 4. Publish (builds first, then publishes with public access):
pnpm run release
```

Notes:

- The package is scoped and public (`publishConfig.access: public`; `.changeset/config.json`
  `access: "public"`).
- `CHANGELOG.md` is included in the published tarball (see `files` in `package.json`).
- If the npm account has 2FA enabled, `changeset publish` cannot prompt for the one-time password.
  Provide it explicitly:
  ```bash
  pnpm run build
  npm publish --access public --otp=<code>
  ```
  Or use an npm **automation token** (which bypasses 2FA) for unattended publishes.

## The `bb` binary

The published binary is `bb` (see `bin` in `package.json`). To expose it locally during
development, `pnpm link --global`. To change the command name, edit `bin` and re-link — see
[README.md](./README.md#changing-the-command-name).
