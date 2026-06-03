# Cloudflare deployment — FutureSports

Deployments are **CI-only** via GitHub Actions. Do not rely on local `npm install` or `wrangler deploy` for routine releases.

## Environments

| Branch | Worker env | URL |
|--------|------------|-----|
| `staging` | `staging` | https://test.fso.gg |
| `main` | `production` | https://fso.gg, https://www.fso.gg |

## GitHub Actions

Workflow: `.github/workflows/deploy.yml`

**Triggers:** push to `staging` or `main`; optional manual `workflow_dispatch` (staging or production).

**Steps:**

1. Checkout
2. `npm ci`
3. `npm run sync:assets`
4. `npm run build:cf`
5. `wrangler deploy --env <staging|production>`

### Repository secrets (required)

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | Deploy Workers + routes on zone `fso.gg` |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account |

## Image assets

Add or change files under `ImageAssetts/`, commit, and push. CI copies them into `public/image-assets/` before build. That folder is gitignored so binaries are not duplicated in git—only the source tree in `ImageAssetts/` is versioned.

## Migrating from fsotemp

1. Push `staging` and verify https://test.fso.gg
2. Merge to `main` and verify https://fso.gg
3. Confirm wrangler routes on the new Worker (`futuresports` / `futuresports-staging`)
4. Disable legacy `fsotemp` Worker routes when satisfied

## Worker secrets (Cloudflare dashboard)

Set per environment when integrating Twitch/YouTube. `keep_vars: true` in `wrangler.jsonc` keeps dashboard-only values across deploys.

- `TWITCH_CLIENT_ID` / `TWITCH_CLIENT_SECRET` (can mirror tlm-app initially)
- YouTube API credentials as used in tlm-app proxy routes

## Cloudflare Access

Review Zero Trust policies for `fso.gg` and `test.fso.gg` in the dashboard. Staging may stay team-only via Access on `test.fso.gg`.

## Emergency manual deploy

Only if Actions is unavailable: run the same commands as the workflow on a machine with Node 20+ and Wrangler auth. Not the normal workflow.
