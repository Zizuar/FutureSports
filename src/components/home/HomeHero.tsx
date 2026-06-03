import Link from 'next/link';
import BrandImage from '@/components/media/BrandImage';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

export default function HomeHero() {
  return (
    <section className="relative min-h-[min(85vh,720px)] flex flex-col">
      {/* Background stack */}
      <div className="absolute inset-0">
        <BrandImage
          src={brandAssets.hero.banner}
          alt="FSO broadcast banner"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--fso-maroon-dark)] via-black/75 to-black/40" />
        <div className="absolute inset-0 fso-diagonal-split opacity-30 mix-blend-multiply" />
        <BrandImage
          src={brandAssets.hero.headset}
          alt=""
          width={420}
          height={420}
          className="absolute -right-8 bottom-0 w-[min(45vw,420px)] h-auto opacity-40 mix-blend-screen pointer-events-none hidden lg:block"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center p-8 sm:p-12 max-w-6xl">
        <BrandImage
          src={brandAssets.logos.engage}
          alt="Engage the future"
          width={280}
          height={80}
          className="h-10 sm:h-14 w-auto mb-6 object-contain object-left"
          priority
        />
        <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4 drop-shadow-lg">
          Future Sports Organization
        </h2>
        <p className="text-[var(--fso-text)]/90 max-w-xl text-lg mb-8 leading-relaxed drop-shadow">
          VR paintball leagues, FSOnet live casts, and a community built from simulation roots to
          competitive virtual sport.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/videos/twitch"
            className="px-6 py-3 rounded-md bg-[var(--fso-maroon)] hover:bg-[var(--fso-accent)] hover:text-black text-white font-semibold transition-colors shadow-lg"
          >
            Watch LIVE
          </Link>
          <Link
            href="/about/games"
            className="px-6 py-3 rounded-md border-2 border-white/30 text-white hover:bg-white/10 font-semibold transition-colors"
          >
            VR Leagues
          </Link>
          <a
            href={siteConfig.urls.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-black/50 border border-[var(--fso-accent)]/60 text-[var(--fso-accent)] hover:bg-[var(--fso-accent)]/15 font-semibold transition-colors"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Featured visual panel (wireframe main pane) */}
      <div className="relative z-10 p-6 sm:p-8 pt-0">
        <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden border-2 border-[var(--fso-maroon)]/60 shadow-2xl shadow-black/80">
          <BrandImage
            src={brandAssets.hero.glass}
            alt="FSO VR esports"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 90vw, 1024px"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <BrandImage
              src={brandAssets.logos.wide}
              alt="FSO.gg"
              width={400}
              height={120}
              className="w-full max-w-md h-auto object-contain"
            />
            <p className="text-white/90 text-sm sm:text-base max-w-md">
              FSOnet on{' '}
              <a href={siteConfig.urls.twitch} className="text-[var(--fso-accent)] font-semibold hover:underline">
                Twitch
              </a>{' '}
              · Highlights on{' '}
              <a href={siteConfig.urls.youtube} className="text-[var(--fso-accent)] font-semibold hover:underline">
                YouTube
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
