import HomeHero from '@/components/home/HomeHero';
import { HomeConnectStrip, HomeEventsPreview, HomeLeaguesPreview } from '@/components/home/HomeSections';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeLeaguesPreview />
      <HomeEventsPreview />
      <HomeConnectStrip />
    </>
  );
}
