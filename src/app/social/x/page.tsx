import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'X',
};

export default function XPage() {
  return (
    <PlaceholderMediaPage
      title="X (Twitter)"
      bannerSrc={brandAssets.logos.casual}
      bannerTheme="casual"
      summary="Official FSO and founder accounts—embed timeline or link hub (API keys optional)."
      externalUrl={`https://x.com/${siteConfig.handles.xOrg}`}
      externalLabel={`@${siteConfig.handles.xOrg}`}
      plannedFeatures={[
        'Link hub for @fsosports and @therealzizuar',
        'Optional X timeline embed widgets',
        'Live event posts mirrored from FSOnet announcements',
      ]}
    />
  );
}
