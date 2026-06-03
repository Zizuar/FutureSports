/**
 * Curated FSO brand imagery from ImageAssetts/ (synced to /image-assets/ in CI).
 * Paths are intentional — not whatever sorts first in the folder.
 */

export function assetUrl(path: string): string {
  const parts = path.replace(/^\//, '').split('/');
  return '/' + parts.map((seg) => encodeURIComponent(seg)).join('/');
}

export const brandAssets = {
  logos: {
    primary: '/image-assets/CurrentLogos/FSOlogoReDo-Ver2.png',
    mark: '/image-assets/CurrentLogos/fsogg.png',
    engage: '/image-assets/CurrentLogos/Engage8.png',
    wide: '/image-assets/CurrentLogos/1500x500.png',
    helmet: '/image-assets/GeneralImages/white_NO background.png',
  },
  hero: {
    banner: '/image-assets/LegacyImages/FSOvidBanner.png',
    headset: '/image-assets/GeneralImages/GlowingHeadset.png',
    engageSquare: '/image-assets/GeneralImages/Engage-Squared-Enlarged.png',
    glass: '/image-assets/LegacyImages/fsoGlass.png',
  },
  leagues: {
    pbl: '/image-assets/GeneralImages/exp.png',
    ctpl: '/image-assets/GeneralImages/fsoBud.png',
    general: '/image-assets/LegacyImages/FSO.png',
  },
  team: {
    zizuar: '/image-assets/GeneralImages/ZizRemoveAutoTone.png',
    memberCard: '/image-assets/GeneralImages/member-card.png',
    pride: '/image-assets/GeneralImages/PrideFSO.png',
  },
  legacy: {
    mosaic: '/image-assets/LegacyImages/fso_logo original mosaic.png',
    final: '/image-assets/LegacyImages/FSO Final.png',
    sunny: '/image-assets/LegacyImages/Sunny.png',
    oil: '/image-assets/LegacyImages/fsoOil.png',
    fsogg1: '/image-assets/LegacyImages/fsogg1.png',
  },
  emotes: [
    '/image-assets/twitch emotes/EWR1.png',
    '/image-assets/twitch emotes/EWR2.png',
    '/image-assets/twitch emotes/EWR3.png',
    '/image-assets/twitch emotes/EWR4.png',
    '/image-assets/twitch emotes/EWR5.png',
    '/image-assets/twitch emotes/EWR6.png',
    '/image-assets/twitch emotes/Headshot.png',
  ],
  gallery: {
    logos: [
      '/image-assets/CurrentLogos/FSOlogoReDo-Ver2.png',
      '/image-assets/CurrentLogos/fsogg.png',
      '/image-assets/CurrentLogos/Engage8.png',
      '/image-assets/CurrentLogos/fso2.png',
    ],
    general: [
      '/image-assets/GeneralImages/GlowingHeadset.png',
      '/image-assets/GeneralImages/PrideFSO.png',
      '/image-assets/GeneralImages/member-card.png',
      '/image-assets/GeneralImages/cover_photo symbol inverse.png',
    ],
    legacy: [
      '/image-assets/LegacyImages/FSOvidBanner.png',
      '/image-assets/LegacyImages/fsoGlass.png',
      '/image-assets/LegacyImages/FSO Mos.png',
      '/image-assets/LegacyImages/butcher.png',
      '/image-assets/LegacyImages/SunnyShirt.png',
      '/image-assets/LegacyImages/fsogg1.png',
    ],
  },
} as const;

/** Sidebar / header logo */
export const sidebarLogoSrc = brandAssets.logos.primary;
