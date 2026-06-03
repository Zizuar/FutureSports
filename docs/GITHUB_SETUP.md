# GitHub setup — FutureSports

Local git is initialized with **`main`** and **`staging`** branches and an initial commit.

`gh` is installed at `C:\Program Files\GitHub CLI\gh.exe` and has been added to your **user** PATH. **Open a new terminal** (or restart Cursor) so `gh` is recognized—existing windows keep the old PATH.

If `gh` still is not found:

```powershell
& "C:\Program Files\GitHub CLI\gh.exe" auth login
```

## 1. Log in to GitHub (Zizuar account)

```powershell
gh auth login
```

Choose: GitHub.com → HTTPS → Login with browser → authorize **Zizuar**.

## 2. Create the remote repo and push

From `C:\Users\donp\Documents\FSO`:

```powershell
gh repo create FutureSports --public --description "FSO.gg — Future Sports Organization website" --source=. --remote=origin
git push -u origin main
git push -u origin staging
```

If the repo name is taken, use another name and update the remote:

```powershell
gh repo create YourRepoName --public --source=. --remote=origin
```

## 3. Cloudflare deploy (OAuth — not GitHub secrets)

Deploy uses **Cloudflare Workers Builds** with your existing GitHub ↔ Cloudflare OAuth connection (same idea as tlm-app). See **[cloudflare-workers-builds.md](cloudflare-workers-builds.md)**.

You do **not** need `CLOUDFLARE_API_TOKEN` in GitHub unless you switch back to Actions-based deploy.

## 4. First deploy

1. Connect **Zizuar/FutureSports** in the Cloudflare dashboard (Workers Builds).
2. Push **`staging`** → https://test.fso.gg  
3. Merge to **`main`** → https://fso.gg  

Build logs: Cloudflare dashboard → Worker → **Deployments**.  
GitHub **Actions** only runs a compile check (`build-verify.yml`).

## Branches

| Branch | Deploy target |
|--------|----------------|
| `staging` | `test.fso.gg` |
| `main` | `fso.gg` |

Develop on `staging`; merge to `main` when ready for production.
