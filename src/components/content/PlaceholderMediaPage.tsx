import Link from 'next/link';

interface PlaceholderMediaPageProps {
  title: string;
  summary: string;
  externalUrl?: string;
  externalLabel?: string;
  plannedFeatures: string[];
}

export default function PlaceholderMediaPage({
  title,
  summary,
  externalUrl,
  externalLabel,
  plannedFeatures,
}: PlaceholderMediaPageProps) {
  return (
    <div className="p-6 sm:p-8 max-w-3xl">
      <p className="text-xs uppercase tracking-widest text-[var(--fso-accent)] mb-2">Coming soon</p>
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <p className="text-[var(--fso-text-muted)] mb-6 leading-relaxed">{summary}</p>

      {externalUrl && (
        <p className="mb-6">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--fso-accent)] underline hover:no-underline"
          >
            {externalLabel ?? externalUrl}
          </a>
        </p>
      )}

      <div className="rounded-lg border border-white/10 bg-[var(--fso-charcoal)] p-6">
        <h3 className="text-sm font-semibold text-white mb-3">Planned on this page</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--fso-text-muted)]">
          {plannedFeatures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--fso-text-muted)]">
          Implementation details: <code className="text-white/80">docs/IMPLEMENTATION_PLAN.md</code> in the
          repository.
        </p>
      </div>
    </div>
  );
}
