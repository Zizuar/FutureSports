import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';

export const metadata: Metadata = {
  title: 'Instagram',
};

export default function InstagramPage() {
  return (
    <PlaceholderMediaPage
      title="Instagram"
      summary="Instagram embed or static feed links—no API in v1; mirror tlm-app Instagram Live/VOD approach later if needed."
      plannedFeatures={[
        'Embed latest posts via Meta embed.js (public profile)',
        'Grid of static images from ImageAssetts/GeneralImages as fallback',
        'Optional Basic Display API in phase 2',
      ]}
    />
  );
}
