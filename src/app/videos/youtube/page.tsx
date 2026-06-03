import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'YouTube',
};

export default function YouTubePage() {
  return (
    <PlaceholderMediaPage
      title="YouTube — @fsonetwork"
      bannerSrc={brandAssets.hero.premium}
      summary="Channel banner, playlist picker, and featured videos (adapt tlm-app YouTube page layout)."
      externalUrl={siteConfig.urls.youtube}
      externalLabel="FSO Network on YouTube"
      plannedFeatures={[
        'Playlist catalog + carousel (config-driven like homeYoutubePlaylists)',
        'YouTube Data API proxy routes under src/app/api/youtube/',
        'Featured FSOnet broadcasts and league highlight reels',
        'Channel ID env: FSO_YOUTUBE_CHAN_ID (discover from @fsonetwork)',
      ]}
    />
  );
}
