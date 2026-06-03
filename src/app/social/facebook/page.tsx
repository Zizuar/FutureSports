import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';

export const metadata: Metadata = {
  title: 'Facebook',
};

export default function FacebookPage() {
  return (
    <PlaceholderMediaPage
      title="Facebook"
      summary="Facebook Page plugin or curated links—placeholder until official page URL is confirmed."
      plannedFeatures={[
        'Page Plugin embed (requires public Facebook page URL)',
        'Cross-post highlights from FSOnet',
        'Link in Social Media hub with other networks',
      ]}
    />
  );
}
