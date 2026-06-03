import { brandAssets } from './brandAssets';

/** Official maroon/white/grey vs casual sea-green/silver/black vs premium (neutral banners). */
export type SiteTheme = 'official' | 'casual' | 'premium';

const CASUAL_PATH_PREFIXES = [
  '/videos/tiktok',
  '/social/facebook',
  '/social/instagram',
  '/social/x',
  '/community/photos',
  '/community/content-creators',
];

/** VR esports / tournament pages — FSO Seal may appear in content */
export const SEAL_ACCENT_PATHS = [
  '/about/games',
  '/about/events',
  '/videos/twitch',
  '/videos/youtube',
];

export function resolveSiteTheme(pathname: string): SiteTheme {
  if (CASUAL_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return 'casual';
  }
  if (pathname === '/contact') return 'premium';
  return 'official';
}

export function navLogoForTheme(theme: SiteTheme): string {
  return theme === 'casual' ? brandAssets.logos.casual : brandAssets.logos.primary;
}

export function usesSealAccent(pathname: string): boolean {
  return SEAL_ACCENT_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
