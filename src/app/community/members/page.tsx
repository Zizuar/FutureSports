import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import BrandImage from '@/components/media/BrandImage';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';
import { leadershipTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Members',
};

export default function MembersPage() {
  return (
    <>
      <PageBanner src={brandAssets.team.memberCard} alt="FSO member community" heightClass="h-48 sm:h-56" />
      <PageIntro title="Members & Leadership" lead="Core team behind FSO.gg, league operations, and FSOnet.">
        <div className="grid gap-8 not-prose max-w-4xl">
          {leadershipTeam.map((member) => (
            <article
              key={member.name}
              className="flex flex-col sm:flex-row gap-6 p-0 sm:p-2 rounded-xl overflow-hidden border border-white/10 bg-[var(--fso-charcoal)]"
            >
              {member.image && (
                <div className="relative sm:w-48 shrink-0 aspect-square sm:aspect-auto sm:min-h-[200px] bg-black">
                  <BrandImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[var(--fso-charcoal)] via-transparent to-transparent" />
                </div>
              )}
              <div className="p-6 sm:py-6 sm:pr-6 flex-1">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-[var(--fso-accent)] mt-1 font-medium">{member.roles.join(' · ')}</p>
                <p className="text-[var(--fso-text-muted)] mt-4 leading-relaxed">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </PageIntro>
    </>
  );
}
