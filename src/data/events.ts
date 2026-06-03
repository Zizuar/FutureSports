export interface FsoEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'recurring' | 'archived';
}

export const featuredEvents: FsoEvent[] = [
  {
    title: 'FSO Community Night',
    date: 'Recurring — check Discord',
    location: 'Discord / VR lobbies',
    description:
      'Open community sessions for league practice, pickup matches, and FSOnet prep. Schedules are posted in the FSO Discord.',
    status: 'recurring',
  },
  {
    title: 'CTPL Season Matches',
    date: 'Seasonal',
    location: 'VR Paintball · Texas ladder',
    description:
      'Classic Teleport Paintball League fixtures across RaceTo and X-Ball divisions. Historical seasons documented on PBLeagues.com.',
    status: 'recurring',
  },
  {
    title: 'FSOnet Live Cast',
    date: 'When live — twitch.tv/fsonet',
    location: 'Twitch / YouTube',
    description:
      'Live broadcasts of league play, showcases, and VR esports news. VODs and clips archive to the FSO YouTube channel.',
    status: 'recurring',
  },
  {
    title: '2018 CTPL 1 (archived)',
    date: 'February 3–4, 2018',
    location: 'Outlaw Paintball, Pflugerville, TX',
    description:
      'Foundational CTPL weekend with Division 4 X-Ball and Division 5 RaceTo-2 brackets—an early anchor for the league’s competitive structure.',
    status: 'archived',
  },
];
