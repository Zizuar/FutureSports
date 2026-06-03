import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { historyTimeline } from '@/data/history';

export const metadata: Metadata = {
  title: 'History',
};

export default function HistoryPage() {
  return (
    <PageIntro
      title="Our History"
      lead="From Federation Simulation Organization in 1997 to today's Future Sports Organization—a bridge between simulation fandom and modern VR esports."
    >
      <ol className="border-l border-[var(--fso-maroon)] ml-3 space-y-8 not-prose">
        {historyTimeline.map((m) => (
          <li key={m.year} className="pl-8 relative">
            <span className="absolute -left-[1.35rem] top-1.5 w-3 h-3 rounded-full bg-[var(--fso-accent)]" />
            <p className="text-sm font-bold text-[var(--fso-accent)]">{m.year}</p>
            <h3 className="text-lg font-semibold text-white">{m.title}</h3>
            <p className="text-[var(--fso-text-muted)] mt-1">{m.description}</p>
          </li>
        ))}
      </ol>
    </PageIntro>
  );
}
