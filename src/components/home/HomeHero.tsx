import Link from 'next/link';
import BrandImage from '@/components/media/BrandImage';
import SealWatermark from '@/components/media/SealWatermark';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

export default function HomeHero() {
  return (
    <section className="relative min-h-[min(85vh,720px)] flex flex-col">
      <div className="absolute inset-0">
        <BrandImage
          src={brandAssets.hero.broadcast}
          alt="FSO broadcast"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--fso-primary-dark)] via-black/75 to-black/40" />
        <div className="absolute inset-0 fso-diagonal-split opacity-25 mix-blend-multiply" />
        <BrandImage
          src={brandAssets.logos.mark}
          alt=""
          width={280}
          height={280}
          className="absolute right-4 top-1/4 w-32 sm:w-48 opacity-20 pointer-events-none"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center p-8 sm:p-12 max-w-6xl">
        <BrandImage
          src={brandAssets.logos.primary}
          alt="FSO"
          width={120}
          height={120}
          className="w-20 sm:w-28 h-auto object-contain mb-4 drop-shadow-lg"
          priority
        />
        <BrandImage
          src={brandAssets.logos.engage}
          alt="Engage the future"
          width={280}
          height={80}
          className="h-8 sm:h-11 w-auto mb-4 object-contain object-left max-w-sm"
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
            className="px-6 py-3 rounded-md bg-[var(--fso-primary)] hover:bg-[var(--fso-accent)] hover:text-black text-white font-semibold transition-colors shadow-lg"
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

      {/* Premium space banner panel */}
      <div className="relative z-10 p-6 sm:p-8 pt-0">
        <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-black/80">
          <BrandImage
            src={brandAssets.hero.premium}
            alt="FSO.gg premium banner"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 90vw, 1024px"
          />
          <div className="absolute inset-0 bg-black/35 flex flex-col sm:flex-row items-center justify-center gap-6 p-6">
            <SealWatermark size={88} className="shrink-0 hidden sm:block" />
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg">FSOnet</p>
              <p className="text-white/85 text-sm mt-2 max-w-md">
                <a href={siteConfig.urls.twitch} className="text-[var(--fso-accent)] hover:underline">
                  Twitch
                </a>
                {' · '}
                <a href={siteConfig.urls.youtube} className="text-[var(--fso-accent)] hover:underline">
                  YouTube
                </a>
              </p>
              <p className="text-xs text-white/50 mt-2">Official seal — VR esports & broadcasts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
