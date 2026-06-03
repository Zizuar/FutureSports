# FutureSports (FSO.gg)

Next.js site for **Future Sports Organization**, built and deployed **only through GitHub Actions** to Cloudflare Workers ([OpenNext for Cloudflare](https://opennext.js.org/cloudflare)).

You do not need `npm install` or any local build on your machine for normal work. Edit files, commit, push — **Cloudflare Workers Builds** (GitHub OAuth, like tlm-app) builds and deploys.

## Stack

- Next.js 16 · React 19 · Tailwind CSS 4
- `@opennextjs/cloudflare` + Wrangler 4
- Deploy: **Cloudflare Workers Builds** — [docs/cloudflare-workers-builds.md](docs/cloudflare-workers-builds.md)
- GitHub: `.github/workflows/build-verify.yml` (build check only)

## Deploy flow

| Git branch | Worker env | Site |
|------------|------------|------|
| `staging` | `staging` | https://test.fso.gg |
| `main` | `production` | https://fso.gg · https://www.fso.gg |

Connect the repo in the Cloudflare dashboard (GitHub OAuth). On each push, Cloudflare runs:

1. `npm run sync:assets && npm run build:cf`
2. `npx wrangler deploy --env staging` or `--env production`

`package-lock.json` is committed so GitHub Actions can run `npm ci`.

### One-time setup

**Repo:** [Zizuar/FutureSports](https://github.com/Zizuar/FutureSports) — `main` + `staging` (see [docs/GITHUB_SETUP.md](docs/GITHUB_SETUP.md)).

**Cloudflare:** Connect the repo via OAuth — [docs/cloudflare-workers-builds.md](docs/cloudflare-workers-builds.md). No GitHub Actions secrets required for deploy.

Optional: if you later want deploy from GitHub Actions instead, add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` and disable Workers Builds to avoid double deploys.

<details>
<summary>Initial git push (if cloning fresh)</summary>

1. Create repo **FutureSports** on the Zizuar GitHub account (or use `gh repo create` from the doc).
2. Push branches:

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

Pushing `staging` deploys test; merging to `main` deploys production (once Workers Builds is connected).

Full checklist: [docs/cloudflare-deploy.md](docs/cloudflare-deploy.md) · [docs/cloudflare-workers-builds.md](docs/cloudflare-workers-builds.md).

</details>

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
