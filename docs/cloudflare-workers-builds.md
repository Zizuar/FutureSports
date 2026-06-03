# Cloudflare Workers Builds (recommended — same as tlm-app)

**tlm-app** deploys with **Cloudflare Workers Builds**: GitHub is connected to Cloudflare via **OAuth**. Pushes trigger build + deploy on Cloudflare’s side. You do **not** need `CLOUDFLARE_API_TOKEN` in GitHub Actions for that path.

OAuth in the Cloudflare dashboard applies to **Cloudflare’s Git integration**, not to GitHub Actions runners. Those are two separate pipelines.

| Pipeline | Who builds | Auth |
|----------|------------|------|
| **Workers Builds** (tlm-app style) | Cloudflare | GitHub OAuth in dashboard |
| **GitHub Actions** (optional) | GitHub | `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` repo secrets |

FutureSports is set up for **Workers Builds as primary**. GitHub Actions only **verifies** `npm run build:cf` (no deploy).

---

## Connect `Zizuar/FutureSports` in the dashboard

1. [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages**.
2. **Create** → **Create Worker** → **Import a repository** (or open an existing Worker → **Settings** → **Build**).
3. Connect **GitHub** (OAuth) and authorize the **Zizuar** account if prompted.
4. Select repository: **`Zizuar/FutureSports`**.
5. **Build settings** (match `wrangler.jsonc` env names):

   | Setting | Value |
   |---------|--------|
   | Production branch | `main` |
   | Build command | `npm run sync:assets && npm run build:cf` |
   | Deploy command | `npx wrangler deploy --env production` |
   | Root directory | `/` (repo root) |
   | Node version | `20` |

6. **Preview / staging** (non-production environment):

   - Add a second environment or preview config if the UI offers it.
   - Branch: **`staging`**
   - Deploy command: `npx wrangler deploy --env staging`
   - Hostname: **test.fso.gg** (route is already in `wrangler.jsonc` under `env.staging`).

Exact labels vary in the dashboard (“Preview”, “Environment”, “Non-production”). Goal: **`staging` → test.fso.gg**, **`main` → fso.gg**.

7. Save and run **Deploy** once to confirm the first build is green.

---

## Worker names (from `wrangler.jsonc`)

| Environment | Worker name | Routes |
|-------------|-------------|--------|
| production | `futuresports` | `fso.gg/*`, `www.fso.gg/*` |
| staging | `futuresports-staging` | `test.fso.gg/*` |

After the new Worker is live, disable routes on the legacy **fsotemp** Worker so only one app serves each hostname.

---

## Environment variables & secrets

Same model as **`tlm-app`** `docs/cloudflare-env.md`:

- **`keep_vars: true`** in `wrangler.jsonc` — dashboard plaintext vars survive Git deploys.
- **Secrets** (Twitch, YouTube, etc.): set in **Workers & Pages** → your Worker → **Settings** → **Variables and Secrets**, not in Git.

Copy Twitch/YouTube vars from the **tyler-levs-music** Worker when you are ready to wire APIs.

---

## GitHub Actions in this repo

Workflow **Verify Cloudflare build** runs on push to `main` / `staging`:

- `npm ci` → `sync:assets` → `build:cf`
- Does **not** deploy (no Cloudflare token in GitHub required).

Use it as an early signal if the OpenNext build breaks before Cloudflare’s build runs.

---

## If you prefer deploy from GitHub Actions instead

1. Add repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
2. Restore a deploy step in `.github/workflows/deploy.yml` (see git history).
3. Turn off **Workers Builds** auto-deploy for this repo to avoid **two deploys per push**.

Do not run both full deploy pipelines unless you intend to.
