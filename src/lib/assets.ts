/** Public paths under /image-assets/ (synced from ImageAssetts/ in CI before build). */

export function imageAsset(...segments: string[]): string {
  return `/image-assets/${segments.join('/')}`;
}

/** First matching file in a category folder, or fallback path. */
export const brandImages = {
  logo: imageAsset('CurrentLogos', 'fso-logo.png'),
  hero: imageAsset('GeneralImages', 'hero-banner.jpg'),
  legacy: imageAsset('LegacyImages'),
} as const;
