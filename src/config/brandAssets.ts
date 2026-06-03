/**
 * Curated FSO brand imagery — see ImageAssetts/CurrentLogos usage notes in repo docs.
 *
 * | Asset | Role |
 * |-------|------|
 * | Asset 2.png | Primary logo — nav, resize, co-brand watermark |
 * | FSOlogoReDo-Ver2.png | Official FSO Seal — tournaments / VR esports, favicon |
 * | Asset 6.png / Asset 6 (2).png | Casual palette (sea-green / silver / black) |
 * | fsogg.png | Premium space banner — neutral backdrop |
 * | white_NO background.png | Mark only (no wordmark) |
 */

export function assetUrl(path: string): string {
  const parts = path.replace(/^\//, '').split('/');
  return '/' + parts.map((seg) => encodeURIComponent(seg)).join('/');
}

const logos = {
  /** Main logo — top-left nav, central branding, watermarks */
  primary: '/image-assets/CurrentLogos/Asset 2.png',
  /** FSO Seal — official VR esports / tournaments only */
  seal: '/image-assets/CurrentLogos/FSOlogoReDo-Ver2.png',
  /** Casual day-to-day / flat-screen (sea-green scheme) */
  casual: '/image-assets/CurrentLogos/Asset 6.png',
  casualAlt: '/image-assets/CurrentLogos/Asset 6 (2).png',
  /** Premium banner — space backdrop, no maroon/green scheme */
  bannerSpace: '/image-assets/CurrentLogos/fsogg.png',
  /** Icon mark without FSO wordmark */
  mark: '/image-assets/GeneralImages/white_NO background.png',
  engage: '/image-assets/CurrentLogos/Engage8.png',
  wide: '/image-assets/CurrentLogos/1500x500.png',
} as const;

export const brandAssets = {
  logos,
  hero: {
    /** Premium-grade banner */
    premium: logos.bannerSpace,
    broadcast: '/image-assets/LegacyImages/FSOvidBanner.png',
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
      logos.primary,
      logos.seal,
      logos.casual,
      logos.casualAlt,
      logos.bannerSpace,
      logos.mark,
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

export const faviconSrc = logos.seal;
