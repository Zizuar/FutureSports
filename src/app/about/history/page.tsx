import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import BrandImage from '@/components/media/BrandImage';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';
import { historyTimeline } from '@/data/history';

export const metadata: Metadata = {
  title: 'History',
};

export default function HistoryPage() {
  return (
    <>
      <PageBanner src={brandAssets.legacy.mosaic} alt="FSO history" heightClass="h-48 sm:h-64" />
      <PageIntro
        title="Our History"
        lead="From Federation Simulation Organization in 1997 to today's Future Sports Organization—a bridge between simulation fandom and modern VR esports."
      >
        <div className="flex flex-col lg:flex-row gap-10 not-prose max-w-5xl">
          <div className="lg:w-64 shrink-0 space-y-4">
            <BrandImage
              src={brandAssets.legacy.final}
              alt="FSO legacy logo"
              width={256}
              height={256}
              className="w-full rounded-lg border border-white/10"
            />
            <BrandImage
              src={brandAssets.legacy.oil}
              alt="FSO heritage"
              width={256}
              height={200}
              className="w-full rounded-lg border border-white/10 opacity-90"
            />
          </div>
          <ol className="flex-1 border-l border-[var(--fso-maroon)] ml-3 space-y-8">
            {historyTimeline.map((m) => (
              <li key={m.year} className="pl-8 relative">
                <span className="absolute -left-[1.35rem] top-1.5 w-3 h-3 rounded-full bg-[var(--fso-accent)] ring-2 ring-black" />
                <p className="text-sm font-bold text-[var(--fso-accent)]">{m.year}</p>
                <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                <p className="text-[var(--fso-text-muted)] mt-1 leading-relaxed">{m.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </PageIntro>
    </>
  );
}
