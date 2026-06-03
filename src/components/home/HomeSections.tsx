import Link from 'next/link';
import { vrLeagues } from '@/data/games';
import { featuredEvents } from '@/data/events';
import { siteConfig } from '@/config/site';

export function HomeLeaguesPreview() {
  return (
    <section className="p-8 sm:p-12 border-t border-white/10">
      <h3 className="text-xl font-bold text-white mb-6">VR Leagues</h3>
      <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
        {vrLeagues.slice(0, 2).map((league) => (
          <Link
            key={league.id}
            href="/about/games"
            className="block p-5 rounded-lg bg-[var(--fso-charcoal)] border border-white/10 hover:border-[var(--fso-accent)]/40 transition-colors"
          >
            <h4 className="font-semibold text-[var(--fso-accent)]">{league.shortName}</h4>
            <p className="text-sm text-[var(--fso-text-muted)] mt-2 line-clamp-3">{league.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeEventsPreview() {
  const upcoming = featuredEvents.filter((e) => e.status !== 'archived').slice(0, 2);
  return (
    <section className="p-8 sm:p-12 border-t border-white/10 bg-[var(--fso-charcoal)]/40">
      <h3 className="text-xl font-bold text-white mb-6">Events & broadcasts</h3>
      <ul className="space-y-4 max-w-2xl">
        {upcoming.map((event) => (
          <li key={event.title} className="border-l-2 border-[var(--fso-maroon)] pl-4">
            <p className="font-medium text-white">{event.title}</p>
            <p className="text-sm text-[var(--fso-text-muted)]">{event.date} · {event.location}</p>
          </li>
        ))}
      </ul>
      <Link href="/about/events" className="inline-block mt-4 text-sm text-[var(--fso-accent)] hover:underline">
        All events →
      </Link>
    </section>
  );
}

export function HomeConnectStrip() {
  return (
    <section className="p-8 sm:p-12 border-t border-white/10 flex flex-wrap gap-6 items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-white">Stay connected</h3>
        <p className="text-sm text-[var(--fso-text-muted)]">FSOnet · Discord · Merch</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={siteConfig.urls.twitch} className="text-sm px-4 py-2 rounded bg-white/10 hover:bg-white/15">
          Twitch
        </a>
        <a href={siteConfig.urls.youtube} className="text-sm px-4 py-2 rounded bg-white/10 hover:bg-white/15">
          YouTube
        </a>
        <a href={siteConfig.urls.store} className="text-sm px-4 py-2 rounded bg-[var(--fso-maroon)] hover:opacity-90">
          Store
        </a>
      </div>
    </section>
  );
}
