# FSO brand assets — usage guide

Source files live in `ImageAssetts/`; CI syncs to `public/image-assets/`. Code references: `src/config/brandAssets.ts`, `src/config/siteTheme.ts`.

## Logos (`CurrentLogos/`)

| File | Use |
|------|-----|
| **Asset 2.png** | **Primary logo** — top-left navigation, resize, co-brand watermarks, home identity |
| **FSOlogoReDo-Ver2.png** | **FSO Seal** — official VR esports / tournaments only; **favicon** |
| **Asset 6.png** / **Asset 6 (2).png** | **Casual** sea-green / silver / black — flat-screen & day-to-day; switches site theme on those routes |
| **fsogg.png** | **Premium banner** — space backdrop; high-grade banners (home feature panel, contact, YouTube placeholder) |
| **white_NO background.png** | **Mark only** — no FSO wordmark (watermarks, contact sidebar) |

## Theme routing

| Theme | Nav logo | Colors | Example routes |
|-------|----------|--------|----------------|
| `official` | Asset 2 | Maroon / grey / gold accent | Home, About, Twitch, Discord, Members |
| `casual` | Asset 6 | Sea-green / silver / black | TikTok, Facebook, Instagram, X, Photos, Creators |
| `premium` | Asset 2 | Neutral / blue-grey chrome | Contact (banner uses fsogg.png) |

## Do not

- Put the **Seal** in the main nav (reserved for esports/tournament content + favicon).
- Use **maroon** chrome on routes that use **Asset 6** (theme switches automatically).
- Use **fsogg** as a small nav icon (it is a full banner composition).
