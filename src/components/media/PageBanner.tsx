import BrandImage from './BrandImage';
import type { SiteTheme } from '@/config/siteTheme';

interface PageBannerProps {
  src: string;
  alt: string;
  heightClass?: string;
  theme?: SiteTheme;
}

export default function PageBanner({
  src,
  alt,
  heightClass = 'h-40 sm:h-52',
  theme = 'official',
}: PageBannerProps) {
  const overlay =
    theme === 'casual'
      ? 'from-[var(--fso-primary-dark)]/90 via-[#0d1012]/60'
      : theme === 'premium'
        ? 'from-[#0a0c10]/85 via-transparent'
        : 'from-[var(--fso-primary-dark)]/90 via-black/50';

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden border-b border-[var(--fso-primary)]/50`}>
      <BrandImage src={src} alt={alt} fill className="object-cover object-center" priority sizes="100vw" />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlay} to-transparent`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
  );
}
