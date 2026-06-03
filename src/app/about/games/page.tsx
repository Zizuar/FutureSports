import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import BrandImage from '@/components/media/BrandImage';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';
import { fsoPrograms, vrLeagues } from '@/data/games';

export const metadata: Metadata = {
  title: 'Games',
};

const leagueArt: Record<string, string> = {
  pbl: brandAssets.leagues.pbl,
  ctpl: brandAssets.leagues.ctpl,
  'ltl-put': brandAssets.leagues.general,
};

export default function GamesPage() {
  return (
    <>
      <PageBanner src={brandAssets.hero.glass} alt="FSO VR esports" />
      <PageIntro
        title="Games & VR Leagues"
        lead="FSO organizes and supports competitive VR leagues—paintball, laser tag, and partner circuits—plus the media that brings them to fans."
      >
        <div className="space-y-8 not-prose max-w-4xl">
          {vrLeagues.map((league) => (
            <article
              key={league.id}
              className="flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden border border-white/10 bg-[var(--fso-charcoal)]"
            >
              <div className="relative md:w-72 shrink-0 aspect-video md:aspect-auto md:min-h-[220px]">
                <BrandImage
                  src={leagueArt[league.id] ?? brandAssets.leagues.general}
                  alt={league.name}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[var(--fso-accent)]">{league.name}</h3>
                <p className="text-[var(--fso-text-muted)] mt-2">{league.summary}</p>
                <ul className="mt-4 list-disc list-inside text-sm text-[var(--fso-text-muted)] space-y-1">
                  {league.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <section>
            <h3 className="text-lg font-bold text-white mb-4">Programs</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {fsoPrograms.map((p, i) => (
                <div
                  key={p.title}
                  className="relative p-5 rounded-lg border border-white/10 overflow-hidden min-h-[140px]"
                >
                  {i === 0 && (
                    <BrandImage
                      src={brandAssets.logos.engage}
                      alt=""
                      fill
                      className="object-cover opacity-15"
                      sizes="33vw"
                    />
                  )}
                  <div className="relative">
                    <h4 className="font-semibold text-[var(--fso-accent)]">{p.title}</h4>
                    <p className="text-sm text-[var(--fso-text-muted)] mt-2">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageIntro>
    </>
  );
}
