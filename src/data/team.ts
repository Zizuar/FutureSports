export interface TeamMember {
  name: string;
  roles: string[];
  bio: string;
}

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Donald P. Polansky (Zizuar)',
    roles: ['Founder', 'Developer', 'Editor'],
    bio: 'Founded the original organization in 1997 as an online RPG community with 500+ active members. The name Federation Simulation Organization paid homage to Star Trek—the setting for many text-based simulated games in the group. When the Oculus CV1 made a once-Trekkish virtual gaming environment real, Zizuar immersed in multiple VR esports league communities and began casting on Twitch and YouTube. FSO was revived as Future Sports Organization to bridge expanding leagues into a unified hub for casting. Today he leads site development and serves as main editor for the FSO News Network (FSOnet).',
  },
  {
    name: 'Dwangler',
    roles: ['VR Esports Management', 'Marketing', 'Graphics'],
    bio: 'Founder of the CTPL (Classic Teleport Paintball League), a core VR esports group within FSO. Handles Discord bot management, marketing, consulting, and FSO graphics for social and Twitch. Principal of Dwangler Gaming LLC—a related entity that works closely with FSO and partner creator groups.',
  },
  {
    name: 'Meghan Chapel',
    roles: ['Designer'],
    bio: 'Consultant assisting with the launch of FSOnet and upcoming FSO | RR-League statistics systems for VR esports.',
  },
];
