import Link from 'next/link';
import BrandImage from '@/components/media/BrandImage';
import EmoteStrip from '@/components/media/EmoteStrip';
import { brandAssets } from '@/config/brandAssets';
import { vrLeagues } from '@/data/games';
import { featuredEvents } from '@/data/events';
import { siteConfig } from '@/config/site';

const leagueImages: Record<string, string> = {
  pbl: brandAssets.leagues.pbl,
  ctpl: brandAssets.leagues.ctpl,
  'ltl-put': brandAssets.leagues.general,
};

export function HomeLeaguesPreview() {
  return (
    <section className="relative border-t border-[var(--fso-maroon)]/40 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <BrandImage src={brandAssets.hero.engageSquare} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="relative p-8 sm:p-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <BrandImage src={brandAssets.logos.mark} alt="" width={48} height={48} className="w-12 h-12 object-contain" />
          VR Leagues
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
          {vrLeagues.map((league) => (
            <Link
              key={league.id}
              href="/about/games"
              className="group relative overflow-hidden rounded-xl border border-white/15 hover:border-[var(--fso-accent)]/50 transition-all hover:shadow-lg hover:shadow-[var(--fso-maroon)]/20"
            >
              <div className="aspect-[16/10] relative">
                <BrandImage
                  src={leagueImages[league.id] ?? brandAssets.leagues.general}
                  alt={league.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-bold text-[var(--fso-accent)] text-lg">{league.shortName}</h4>
                <p className="text-sm text-white/80 line-clamp-2 mt-1">{league.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeEventsPreview() {
  const upcoming = featuredEvents.filter((e) => e.status !== 'archived').slice(0, 2);
  return (
    <section className="p-8 sm:p-12 border-t border-white/10 flex flex-col lg:flex-row gap-8 items-center">
      <div className="relative w-full lg:w-80 shrink-0 aspect-square rounded-xl overflow-hidden border border-white/15">
        <BrandImage src={brandAssets.legacy.sunny} alt="FSO community" fill className="object-cover" sizes="320px" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-6">Events & broadcasts</h3>
        <ul className="space-y-4">
          {upcoming.map((event) => (
            <li key={event.title} className="border-l-4 border-[var(--fso-maroon)] pl-4 py-1">
              <p className="font-semibold text-white">{event.title}</p>
              <p className="text-sm text-[var(--fso-text-muted)]">{event.date} · {event.location}</p>
            </li>
          ))}
        </ul>
        <Link href="/about/events" className="inline-block mt-5 text-[var(--fso-accent)] font-medium hover:underline">
          All events →
        </Link>
      </div>
    </section>
  );
}

export function HomeCommunityStrip() {
  return (
    <>
      <EmoteStrip />
      <section className="p-8 sm:p-12 border-t border-white/10 bg-gradient-to-r from-[var(--fso-charcoal)] to-black flex flex-wrap gap-8 items-center justify-between">
        <BrandImage
          src={brandAssets.team.pride}
          alt="FSO Pride"
          width={200}
          height={120}
          className="w-40 sm:w-52 h-auto object-contain opacity-90"
        />
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-bold text-white">Stay connected</h3>
          <p className="text-sm text-[var(--fso-text-muted)] mt-1">FSOnet · Discord · Merch</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={siteConfig.urls.twitch}
              className="text-sm px-5 py-2.5 rounded-md bg-[#9146FF] text-white font-medium hover:opacity-90"
            >
              Twitch
            </a>
            <a
              href={siteConfig.urls.youtube}
              className="text-sm px-5 py-2.5 rounded-md bg-[#FF0000] text-white font-medium hover:opacity-90"
            >
              YouTube
            </a>
            <a
              href={siteConfig.urls.store}
              className="text-sm px-5 py-2.5 rounded-md bg-[var(--fso-maroon)] text-white font-medium hover:opacity-90"
            >
              Store
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
