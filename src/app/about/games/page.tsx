import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { fsoPrograms, vrLeagues } from '@/data/games';

export const metadata: Metadata = {
  title: 'Games',
};

export default function GamesPage() {
  return (
    <PageIntro
      title="Games & VR Leagues"
      lead="FSO organizes and supports competitive VR leagues—paintball, laser tag, and partner circuits—plus the media that brings them to fans."
    >
      <div className="space-y-8 not-prose">
        {vrLeagues.map((league) => (
          <article
            key={league.id}
            className="rounded-lg border border-white/10 bg-[var(--fso-charcoal)] p-6"
          >
            <h3 className="text-lg font-bold text-white">{league.name}</h3>
            <p className="text-[var(--fso-text-muted)] mt-2">{league.summary}</p>
            <ul className="mt-3 list-disc list-inside text-sm text-[var(--fso-text-muted)]">
              {league.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}

        <section>
          <h3 className="text-lg font-bold text-[var(--fso-accent)] mb-4">Programs</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {fsoPrograms.map((p) => (
              <div key={p.title} className="p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-[var(--fso-text-muted)] mt-2">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageIntro>
  );
}
