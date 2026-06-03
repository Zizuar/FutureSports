import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import { leadershipTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Members',
};

export default function MembersPage() {
  return (
    <PageIntro
      title="Members & Leadership"
      lead="Core team behind FSO.gg, league operations, and FSOnet."
    >
      <div className="space-y-6 not-prose max-w-3xl">
        {leadershipTeam.map((member) => (
          <article key={member.name} className="p-6 rounded-lg bg-[var(--fso-charcoal)] border border-white/10">
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-sm text-[var(--fso-accent)] mt-1">{member.roles.join(' · ')}</p>
            <p className="text-[var(--fso-text-muted)] mt-3 leading-relaxed">{member.bio}</p>
          </article>
        ))}
      </div>
    </PageIntro>
  );
}
