import Image from 'next/image';
import { assetUrl } from '@/config/brandAssets';

interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function BrandImage({
  src,
  alt,
  className = '',
  width,
  height,
  fill,
  priority,
  sizes,
}: BrandImageProps) {
  const url = assetUrl(src);

  if (fill) {
    return (
      <Image
        src={url}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes ?? '100vw'}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={width ?? 400}
      height={height ?? 300}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
