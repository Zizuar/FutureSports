import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { contentCreators } from '@/data/creators';

export const metadata: Metadata = {
  title: 'Content Creators',
};

export default function ContentCreatorsPage() {
  return (
    <PageIntro
      title="Content Creators"
      lead="Casters, league operators, and partners who power FSOnet and FSO community channels."
    >
      <ul className="space-y-4 not-prose max-w-2xl">
        {contentCreators.map((creator) => (
          <li key={creator.name} className="p-5 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white">{creator.name}</h3>
            <p className="text-sm text-[var(--fso-text-muted)] mt-1">{creator.focus}</p>
            {creator.links && (
              <p className="mt-2 flex flex-wrap gap-3 text-sm">
                {creator.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--fso-accent)] hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </PageIntro>
  );
}
