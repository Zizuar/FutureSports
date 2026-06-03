import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import BrandImage from '@/components/media/BrandImage';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner src={brandAssets.logos.wide} alt="Contact FSO" heightClass="h-36 sm:h-44" />
      <PageIntro title="Contact Us" lead="Reach FSO through community channels and FSOnet.">
        <div className="flex flex-col md:flex-row gap-8 not-prose max-w-4xl items-start">
          <BrandImage
            src={brandAssets.logos.helmet}
            alt="FSO"
            width={200}
            height={200}
            className="w-40 md:w-48 h-auto object-contain shrink-0"
          />
          <ul className="space-y-4 text-[var(--fso-text-muted)] flex-1">
            <li>
              <strong className="text-white">Discord:</strong>{' '}
              <a href={siteConfig.urls.discordInvite} className="text-[var(--fso-accent)] hover:underline">
                F.S.O. V-Sports
              </a>
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
              <a href={`https://x.com/${siteConfig.handles.xOrg}`} className="text-[var(--fso-accent)] hover:underline">
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
        </div>
      </PageIntro>
    </>
  );
}
