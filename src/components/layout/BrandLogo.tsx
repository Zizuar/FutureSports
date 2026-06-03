'use client';

import BrandImage from '@/components/media/BrandImage';
import { brandAssets } from '@/config/brandAssets';
import { siteConfig } from '@/config/site';

interface BrandLogoProps {
  src?: string | null;
  size?: number;
  className?: string;
}

export default function BrandLogo({ src, size = 44, className }: BrandLogoProps) {
  const logoPath = src ?? brandAssets.logos.primary;

  return (
    <BrandImage
      src={logoPath}
      alt={siteConfig.name}
      width={size}
      height={size}
      className={className ?? 'rounded-lg object-contain'}
      priority
    />
  );
}
