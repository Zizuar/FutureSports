export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about/games',
    children: [
      { label: 'Games', href: '/about/games' },
      { label: 'History', href: '/about/history' },
      { label: 'Events', href: '/about/events' },
    ],
  },
  {
    label: 'Videos | LIVE',
    href: '/videos/twitch',
    children: [
      { label: 'Twitch', href: '/videos/twitch' },
      { label: 'YouTube', href: '/videos/youtube' },
      { label: 'TikTok', href: '/videos/tiktok' },
    ],
  },
  {
    label: 'Community',
    href: '/community/photos',
    children: [
      { label: 'Photos', href: '/community/photos' },
      { label: 'Content Creators', href: '/community/content-creators' },
      { label: 'Members', href: '/community/members' },
    ],
  },
  {
    label: 'Social Media',
    href: '/social/facebook',
    children: [
      { label: 'Facebook', href: '/social/facebook' },
      { label: 'Instagram', href: '/social/instagram' },
      { label: 'Discord', href: '/social/discord' },
      { label: 'X', href: '/social/x' },
    ],
  },
  {
    label: 'Store | Merch',
    href: 'https://store.fso.gg',
    external: true,
  },
  { label: 'Contact Us', href: '/contact' },
];

export const sidebarSocialLinks = [
  { label: 'Twitch', href: 'https://twitch.tv/fsonet', icon: 'twitch' as const },
  { label: 'TikTok', href: '/videos/tiktok', icon: 'tiktok' as const },
  { label: 'Instagram', href: '/social/instagram', icon: 'instagram' as const },
  { label: 'YouTube', href: '/videos/youtube', icon: 'youtube' as const },
];
