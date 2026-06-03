# FutureSports (FSO.gg)

Next.js site for **Future Sports Organization**, built and deployed **only through GitHub Actions** to Cloudflare Workers ([OpenNext for Cloudflare](https://opennext.js.org/cloudflare)).

You do not need `npm install` or any local build on your machine for normal work. Edit files, commit, push — CI does the rest.

## Stack

- Next.js 16 · React 19 · Tailwind CSS 4
- `@opennextjs/cloudflare` + Wrangler 4
- Deploy: `.github/workflows/deploy.yml`

## Deploy flow (CI)

| Git branch | Worker env | Site |
|------------|------------|------|
| `staging` | `staging` | https://test.fso.gg |
| `main` | `production` | https://fso.gg · https://www.fso.gg |

On each push, Actions runs:

1. `npm ci`
2. `npm run sync:assets` (copies `ImageAssetts/` → `public/image-assets/` for the build)
3. `npm run build:cf`
4. `wrangler deploy --env staging` or `--env production`

`package-lock.json` is committed so GitHub Actions can run `npm ci`.

### One-time GitHub setup

Local git is ready (`main` + `staging`). Finish remote setup: **[docs/GITHUB_SETUP.md](docs/GITHUB_SETUP.md)** (`gh auth login` → create repo → push).

1. Create repo **FutureSports** on the Zizuar GitHub account (or use `gh repo create` from the doc).
2. Add repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Push branches:

```bash
git init
git add .
git commit -m "Initial FutureSports scaffold for FSO.gg"
git remote add origin git@github.com:Zizuar/FutureSports.git
git branch -M main
git push -u origin main
git checkout -b staging
git push -u origin staging
```

Pushing `staging` deploys test; merging to `main` deploys production.

Full checklist (fsotemp cutover, Worker secrets): [docs/cloudflare-deploy.md](docs/cloudflare-deploy.md).

## Project layout

| Path | Purpose |
|------|---------|
| `src/config/` | Site copy, navigation, news ticker |
| `src/data/` | Team, leagues, history, events |
| `ImageAssetts/` | Source images (synced in CI only) |
| `docs/IMPLEMENTATION_PLAN.md` | Twitch, YouTube, TikTok, social integrations |

## Optional local preview

Not required for deploy. If you want a local browser preview:

```bash
npm install
npm run sync:assets
npm run dev
```

## Reference

- Layout wireframes: `SiteExamples/`
- Legacy site: https://fso.gg
- Integration reference: `C:\Users\donp\Documents\TLMusicProject\tlm-app`
