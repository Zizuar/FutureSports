# FSO.gg — Phase 2 Implementation Plan

Deferred pages from the initial scaffold (placeholders shipped in v0.1).

## Priority order

| P | Page(s) | Approach |
|---|---------|----------|
| P0 | Twitch `/videos/twitch`, Home live banner | Port `tlm-app`: `twitchService`, `/api/twitch/live`, `TwitchStreamSection`, embed parents in `wrangler.jsonc` |
| P0 | YouTube `/videos/youtube`, Home video previews | Port `YouTubePageContainer`, playlist config, `/api/youtube/playlist-items`; set `FSO_YOUTUBE_CHAN_ID` |
| P1 | TikTok `/videos/tiktok` | **No API v1:** TikTok profile embed blockquote; optional manual featured URLs |
| P1 | Social hub polish | Facebook Page Plugin URL, Instagram embed.js, X link hub |
| P2 | `/connect/social-media` style aggregate | Single page polling Twitch/YouTube like `SocialMediaLiveContent.tsx` (optional) |

## Twitch (from tlm-app)

- Copy/adapt: `src/services/twitchService.ts`, `src/lib/twitchEmbed.ts`, `src/app/api/twitch/*`
- Wrangler secrets: `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET` (reuse tlm values initially)
- Vars: `NEXT_PUBLIC_TWITCH_CHANNEL_LOGIN=fsonet`, expand `NEXT_PUBLIC_TWITCH_EMBED_PARENTS`

## YouTube (from tlm-app)

- Copy/adapt: `src/services/youtubeService.ts`, `src/components/youtube/*`, API routes
- Resolve channel ID for `@fsonetwork` via YouTube API once
- Vars: `YOUTUBE_API_KEY` or service account pattern used in tlm-app

## TikTok (embed-only v1)

```html
<!-- Example: replace @handle when confirmed -->
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@HANDLE" data-unique-id="..." />
<script async src="https://www.tiktok.com/embed.js"></script>
```

- Phase 2: port `tiktokService` + token if FSO TikTok app is created

## Social Media pages

| Network | v1 | v2 |
|---------|----|----|
| Discord | Done (invite CTA) | Widget embed optional |
| Facebook | Need canonical page URL from team | Page Plugin |
| Instagram | Embed.js or static gallery | API optional |
| X | Link hub | Timeline widget |

## CI / environments (already wired)

- `staging` branch → `test.fso.gg` (`wrangler deploy --env staging`)
- `main` → `fso.gg` (`wrangler deploy --env production`)
- Retire legacy `fsotemp` Worker after cutover DNS/route swap

## Cloudflare checklist

1. Create GitHub repo **FutureSports** under Zizuar account; push this project
2. Add secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
3. Copy Twitch/YouTube vars from tlm-app dashboard into futuresports Worker (staging + production)
4. Route `test.fso.gg` to `futuresports-staging`, `fso.gg` to `futuresports` production
5. Remove or disable old `fsotemp` routes when ready

## Content iteration

- Replace static `newsTicker.ts` with admin UI or RSS
- Wire `public/image-assets` gallery on `/community/photos`
- Confirm Facebook / Instagram / TikTok handles with team
