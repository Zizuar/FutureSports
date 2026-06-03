import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';

export const metadata: Metadata = {
  title: 'Photos',
};

const photoCategories = [
  {
    title: 'League & event shots',
    description: 'Screenshots and photography from CTPL, PBL, and FSOnet broadcasts.',
    folder: 'GeneralImages',
  },
  {
    title: 'Legacy FSO',
    description: 'Historical images from the Federation Simulation era through early VR community days.',
    folder: 'LegacyImages',
  },
  {
    title: 'Brand & logos',
    description: 'Current FSO marks and partner artwork from CurrentLogos.',
    folder: 'CurrentLogos',
  },
];

export default function PhotosPage() {
  return (
    <PageIntro
      title="Community Photos"
      lead="Image galleries use the FSO asset library. Add files under ImageAssetts/ and push—CI syncs them into the build."
    >
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {photoCategories.map((cat) => (
          <div
            key={cat.title}
            className="aspect-[4/3] rounded-lg border border-dashed border-white/20 bg-[var(--fso-charcoal)] p-6 flex flex-col justify-end"
          >
            <p className="text-xs text-[var(--fso-text-muted)] mb-1">/{cat.folder}</p>
            <h3 className="font-semibold text-white">{cat.title}</h3>
            <p className="text-sm text-[var(--fso-text-muted)] mt-1">{cat.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-[var(--fso-text-muted)]">
        Gallery grid with lightbox will ship in a follow-up pass once ImageAssetts/ is populated and
        deployed via CI.
      </p>
    </PageIntro>
  );
}
