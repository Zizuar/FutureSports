import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';
import { featuredEvents } from '@/data/events';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Events',
};

export default function EventsPage() {
  return (
    <>
      <PageBanner src={brandAssets.legacy.sunny} alt="FSO events" />
      <PageIntro
        title="Events"
        lead="Community nights, league seasons, and FSOnet live casts. Confirm dates in Discord—the schedule moves with the VR calendar."
      >
        <ul className="space-y-4 not-prose max-w-3xl">
          {featuredEvents.map((event) => (
            <li
              key={event.title}
              className="p-5 rounded-lg border border-white/10 bg-[var(--fso-charcoal)] fso-card-accent"
            >
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <h3 className="font-semibold text-white">{event.title}</h3>
                <span className="text-xs uppercase px-2 py-0.5 rounded bg-[var(--fso-maroon)]/50 text-[var(--fso-accent)]">
                  {event.status}
                </span>
              </div>
              <p className="text-sm text-[var(--fso-accent)]">
                {event.date} · {event.location}
              </p>
              <p className="text-sm text-[var(--fso-text-muted)] mt-2">{event.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm not-prose">
          <a href={siteConfig.urls.discordInvite} className="text-[var(--fso-accent)] hover:underline font-medium">
            Join the FSO Discord
          </a>{' '}
          for the latest event posts.
        </p>
      </PageIntro>
    </>
  );
}
