export interface ContentCreator {
  name: string;
  focus: string;
  links?: { label: string; href: string }[];
}

export const contentCreators: ContentCreator[] = [
  {
    name: 'Zizuar (Donald P. Polansky)',
    focus: 'FSOnet casting, site development, league editorial',
    links: [
      { label: 'Twitch', href: 'https://twitch.tv/fsonet' },
      { label: 'X', href: 'https://x.com/therealzizuar' },
    ],
  },
  {
    name: 'Dwangler',
    focus: 'CTPL operations, marketing, graphics, Discord bots',
    links: [{ label: 'Dwangler Gaming', href: 'https://dwangler.com' }],
  },
  {
    name: 'FSO League Casters',
    focus: 'Volunteer and partner casters covering PBL, CTPL, and featured VR matches',
    links: [{ label: 'YouTube', href: 'https://youtube.com/fsonetwork' }],
  },
];
