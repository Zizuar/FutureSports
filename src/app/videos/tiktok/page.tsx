import type { Metadata } from 'next';
import PlaceholderMediaPage from '@/components/content/PlaceholderMediaPage';

export const metadata: Metadata = {
  title: 'TikTok',
};

export default function TikTokPage() {
  return (
    <PlaceholderMediaPage
      title="TikTok"
      summary="No TikTok API at this stage—profile embed or curated link grid until tokens are configured."
      plannedFeatures={[
        'Official TikTok profile embed blockquote (no API key required)',
        'Optional oEmbed / iframe fallback for featured video URLs',
        'Link-out row to latest posts when embed is unavailable',
        'Defer tlm-app TikTok API service until FSO-specific app credentials exist',
      ]}
    />
  );
}
