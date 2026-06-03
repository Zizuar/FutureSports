import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Twitch',
};

export default function TwitchPage() {
  return (
    <PlaceholderMediaPage
      title="Twitch — FSOnet"
      bannerSrc={brandAssets.hero.glass}
      showEmotes
      summary="Live channel embed, VOD clips, schedule, and live-now banner (ported from tlm-app patterns)."
      externalUrl={siteConfig.urls.twitch}
      externalLabel="Watch on Twitch @fsonet"
      plannedFeatures={[
        'Twitch Embed parent domains for fso.gg and test.fso.gg',
        'Live status API route + hero banner on home',
        'Featured clips carousel and category filters',
        'Reuse TWITCH_CLIENT_ID / token flow from tlm-app wrangler vars',
      ]}
    />
  );
}
