import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Store | Merch',
};

/** Fallback route if someone hits /store on this site (nav links to store.fso.gg directly). */
export default function StorePage() {
  return (
    <PageIntro title="Store | Merch" lead="Official FSO merchandise lives on our dedicated store site.">
      <p className="not-prose">
        <a
          href={siteConfig.urls.store}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-md bg-[var(--fso-maroon)] text-white font-medium hover:opacity-90"
        >
          Open store.fso.gg
        </a>
      </p>
    </PageIntro>
  );
}
