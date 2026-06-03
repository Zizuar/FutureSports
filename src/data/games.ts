export interface VrLeague {
  id: string;
  name: string;
  shortName: string;
  summary: string;
  highlights: string[];
}

export const vrLeagues: VrLeague[] = [
  {
    id: 'pbl',
    name: 'PBL: VR Paintball',
    shortName: 'PBL',
    summary:
      'The Paintball League (PBL) is FSO’s competitive VR paintball circuit—structured seasons, divisions, and broadcast-ready match formats built for virtual arenas.',
    highlights: [
      'League-managed seasons and rankings',
      'Race-to and X-Ball style formats adapted for VR',
      'Coverage on FSOnet (Twitch / YouTube)',
    ],
  },
  {
    id: 'ctpl',
    name: 'CTPL: VR Paintball',
    shortName: 'CTPL',
    summary:
      'The Classic Teleport Paintball League (CTPL), founded by Dwangler, anchors Texas-region VR paintball with live events, team ladders, and community ops tied into FSO.',
    highlights: [
      'Central Texas Paintball League heritage (PBLeagues.com)',
      'Multi-division ladders (e.g. RaceTo-2, X-Ball)',
      'Discord and in-game community coordination',
    ],
  },
  {
    id: 'ltl-put',
    name: 'LTL / PUT',
    shortName: 'LTL/PUT',
    summary:
      'FSO maintains official involvement with Laser Tag League (LTL) and PUT communities—extending the organization’s reach beyond paintball into complementary VR competitive titles.',
    highlights: ['Official league partnership status', 'Cross-promotion with FSO casting', 'Community event support'],
  },
];

export const fsoPrograms = [
  {
    title: 'FSO C³',
    description:
      'Co-Operative · Competitive · Community — the umbrella for how FSO runs leagues, beta tests, VR releases, and creator collaboration.',
  },
  {
    title: 'VR Beta & Releases',
    description:
      'FSO tracks emerging VR titles and competitive modes, helping leagues spin up when new platforms or sports sims land.',
  },
  {
    title: 'FSOnet',
    description:
      'The FSO News Network — live casts, VOD highlights, and editorial coverage across Twitch and YouTube.',
  },
];
