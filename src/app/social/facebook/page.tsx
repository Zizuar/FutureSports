import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';
import { brandAssets } from '@/config/brandAssets';

export const metadata: Metadata = {
  title: 'Facebook',
};

export default function FacebookPage() {
  return (
    <PlaceholderMediaPage
      title="Facebook"
      bannerSrc={brandAssets.logos.casual}
      bannerTheme="casual"
      summary="Facebook Page plugin or curated links—placeholder until official page URL is confirmed."
      plannedFeatures={[
        'Page Plugin embed (requires public Facebook page URL)',
        'Cross-post highlights from FSOnet',
        'Link in Social Media hub with other networks',
      ]}
    />
  );
}
