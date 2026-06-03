import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import BrandImage from '@/components/media/BrandImage';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';
import { contentCreators } from '@/data/creators';

export const metadata: Metadata = {
  title: 'Content Creators',
};

export default function ContentCreatorsPage() {
  return (
    <>
      <PageBanner src={brandAssets.team.pride} alt="FSO creators" />
      <PageIntro
        title="Content Creators"
        lead="Casters, league operators, and partners who power FSOnet and FSO community channels."
      >
        <ul className="space-y-6 not-prose max-w-3xl">
          {contentCreators.map((creator, i) => (
            <li
              key={creator.name}
              className="flex gap-5 p-5 rounded-xl border border-white/10 bg-[var(--fso-charcoal)] items-start"
            >
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-white/15 bg-black">
                <BrandImage
                  src={
                    i === 0
                      ? brandAssets.team.zizuar
                      : i === 1
                        ? brandAssets.legacy.sunny
                        : brandAssets.hero.headset
                  }
                  alt={creator.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">{creator.name}</h3>
                <p className="text-sm text-[var(--fso-text-muted)] mt-1">{creator.focus}</p>
                {creator.links && (
                  <p className="mt-3 flex flex-wrap gap-3 text-sm">
                    {creator.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--fso-accent)] hover:underline font-medium"
                      >
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </PageIntro>
    </>
  );
}
