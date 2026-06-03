import BrandImage from './BrandImage';

interface PageBannerProps {
  src: string;
  alt: string;
  heightClass?: string;
}

export default function PageBanner({
  src,
  alt,
  heightClass = 'h-40 sm:h-52',
}: PageBannerProps) {
  return (
    <div className={`relative w-full ${heightClass} overflow-hidden border-b border-[var(--fso-maroon)]/50`}>
      <BrandImage src={src} alt={alt} fill className="object-cover object-center" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--fso-maroon-dark)]/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
  );
}
