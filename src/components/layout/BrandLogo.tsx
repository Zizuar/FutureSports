'use client';

import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

interface BrandLogoProps {
  src?: string | null;
  size?: number;
}

export default function BrandLogo({ src, size = 44 }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className="rounded-lg bg-black/30 flex items-center justify-center text-sm font-bold text-white border border-white/20 shrink-0"
        style={{ width: size, height: size }}
        aria-hidden
      >
        FSO
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={siteConfig.name}
      width={size}
      height={size}
      className="rounded-lg object-contain bg-black/20 shrink-0"
      onError={() => setFailed(true)}
      unoptimized
    />
  );
}
