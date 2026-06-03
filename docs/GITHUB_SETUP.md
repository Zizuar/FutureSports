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

## 3. GitHub Actions secrets

In the repo: **Settings → Secrets and variables → Actions → New repository secret**

| Name | Value |
|------|--------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Workers deploy + Zone read for `fso.gg` |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

## 4. First deploy

- Push or merge to **`staging`** → deploys to https://test.fso.gg  
- Push or merge to **`main`** → deploys to https://fso.gg  

Watch progress under **Actions** in the GitHub repo.

## Branches

| Branch | Deploy target |
|--------|----------------|
| `staging` | `test.fso.gg` |
| `main` | `fso.gg` |

Develop on `staging`; merge to `main` when ready for production.
