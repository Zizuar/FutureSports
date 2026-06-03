import HomeHero from '@/components/home/HomeHero';
import { HomeCommunityStrip, HomeEventsPreview, HomeLeaguesPreview } from '@/components/home/HomeSections';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeLeaguesPreview />
      <HomeEventsPreview />
      <HomeCommunityStrip />
    </>
  );
}
