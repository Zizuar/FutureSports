import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Discord',
};

export default function DiscordPage() {
  return (
    <PageIntro
      title="Discord Community"
      lead="FSO: Future Sports Organization — VR leagues, beta & releases, PBL & CTPL management, LTL/PUT official, FSO C³."
    >
      <p>
        The Discord server is the operational hub for schedules, league chat, and FSOnet coordination.
        Categories include VR esports, streaming, and gaming community channels.
      </p>
      <p className="not-prose mt-6">
        <a
          href={siteConfig.urls.discordInvite}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-md bg-[#5865F2] text-white font-medium hover:opacity-90"
        >
          Join F.S.O. V-Sports on Discord
        </a>
      </p>
      <p className="text-sm mt-4">
        Server listing:{' '}
        <a href="https://discord.me/fso" className="text-[var(--fso-accent)] hover:underline">
          discord.me/fso
        </a>
      </p>
    </PageIntro>
  );
}
