import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function HomeHero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[min(70vh,640px)] p-8 sm:p-12 bg-gradient-to-br from-[var(--fso-maroon-dark)] via-black to-black">
      <p className="text-[var(--fso-accent)] text-sm uppercase tracking-[0.2em] mb-3">
        {siteConfig.legalName}
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
        Engage the future of VR esports
      </h2>
      <p className="text-[var(--fso-text-muted)] max-w-xl text-lg mb-8 leading-relaxed">
        Leagues, live casts, and community for virtual paintball, laser tag, and the next wave of competitive VR.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/videos/twitch"
          className="px-5 py-2.5 rounded-md bg-[var(--fso-maroon)] hover:bg-[var(--fso-maroon-dark)] text-white font-medium transition-colors"
        >
          Watch LIVE
        </Link>
        <Link
          href="/about/games"
          className="px-5 py-2.5 rounded-md border border-white/25 text-white hover:bg-white/10 font-medium transition-colors"
        >
          Explore leagues
        </Link>
        <a
          href={siteConfig.urls.discordInvite}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md border border-[var(--fso-accent)]/50 text-[var(--fso-accent)] hover:bg-[var(--fso-accent)]/10 font-medium transition-colors"
        >
          Join Discord
        </a>
      </div>
      <div className="mt-12 aspect-video max-w-4xl w-full rounded-lg border border-white/10 bg-black/80 flex items-center justify-center text-[var(--fso-text-muted)]">
        <p className="text-center px-6">
          Featured stream / hero embed — full Twitch & YouTube integration planned.{' '}
          <a href={siteConfig.urls.twitch} className="text-[var(--fso-accent)] underline">
            Watch on Twitch
          </a>
        </p>
      </div>
    </section>
  );
}
