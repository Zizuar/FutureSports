# Cloudflare deployment — FutureSports

**Primary:** [Cloudflare Workers Builds](cloudflare-workers-builds.md) with **GitHub OAuth** (same pattern as tlm-app). Cloudflare runs `npm run build:cf` and `wrangler deploy` when you push.

**Secondary:** GitHub Actions workflow **Verify Cloudflare build** — compile check only; no Cloudflare API token in GitHub.

## Environments

| Git branch | Wrangler env | URL |
|------------|--------------|-----|
| `staging` | `staging` | https://test.fso.gg |
| `main` | `production` | https://fso.gg · https://www.fso.gg |

## One-time dashboard setup

Follow **[cloudflare-workers-builds.md](cloudflare-workers-builds.md)** to connect `Zizuar/FutureSports` and set build/deploy commands.

You do **not** need GitHub repository secrets for OAuth-based Workers Builds.

## Migrating from fsotemp

1. Connect FutureSports in Workers Builds; deploy `staging` → verify test.fso.gg
2. Deploy `main` → verify fso.gg
3. Remove routes from legacy **fsotemp** Worker

## Worker secrets

Set in Cloudflare dashboard per environment (see tlm-app `docs/cloudflare-env.md`). `keep_vars: true` in `wrangler.jsonc` preserves dashboard plaintext vars across deploys.

## Cloudflare Access

Review Zero Trust for `fso.gg` / `test.fso.gg` if staging should be team-only.
