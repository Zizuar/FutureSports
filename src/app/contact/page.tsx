import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <PageIntro
      title="Contact Us"
      lead="Reach FSO through community channels. A contact form may be added in a later release."
    >
      <ul className="space-y-4 not-prose text-[var(--fso-text-muted)]">
        <li>
          <strong className="text-white">Discord:</strong>{' '}
          <a href={siteConfig.urls.discordInvite} className="text-[var(--fso-accent)] hover:underline">
            F.S.O. V-Sports
          </a>{' '}
          — fastest path for league and event questions.
        </li>
        <li>
          <strong className="text-white">Twitch:</strong>{' '}
          <a href={siteConfig.urls.twitch} className="text-[var(--fso-accent)] hover:underline">
            twitch.tv/fsonet
          </a>
        </li>
        <li>
          <strong className="text-white">YouTube:</strong>{' '}
          <a href={siteConfig.urls.youtube} className="text-[var(--fso-accent)] hover:underline">
            youtube.com/fsonetwork
          </a>
        </li>
        <li>
          <strong className="text-white">X:</strong>{' '}
          <a
            href={`https://x.com/${siteConfig.handles.xOrg}`}
            className="text-[var(--fso-accent)] hover:underline"
          >
            @{siteConfig.handles.xOrg}
          </a>
          {' · '}
          <a
            href={`https://x.com/${siteConfig.handles.xFounder}`}
            className="text-[var(--fso-accent)] hover:underline"
          >
            @{siteConfig.handles.xFounder}
          </a>
        </li>
        <li>
          <strong className="text-white">Merch:</strong>{' '}
          <a href={siteConfig.urls.store} className="text-[var(--fso-accent)] hover:underline">
            store.fso.gg
          </a>
        </li>
      </ul>
    </PageIntro>
  );
}
