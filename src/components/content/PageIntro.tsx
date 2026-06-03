interface PageIntroProps {
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

export default function PageIntro({ title, lead, children }: PageIntroProps) {
  return (
    <div className="p-6 sm:p-8 max-w-4xl">
      <h2 className="text-2xl font-bold text-[var(--fso-accent)] mb-2">{title}</h2>
      {lead && <p className="text-[var(--fso-text-muted)] text-lg mb-6 leading-relaxed">{lead}</p>}
      {children && <div className="prose-fso">{children}</div>}
    </div>
  );
}
