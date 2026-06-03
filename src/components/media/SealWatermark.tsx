import { brandAssets } from '@/config/brandAssets';
import BrandImage from './BrandImage';

interface SealWatermarkProps {
  className?: string;
  size?: number;
}

/** Official FSO Seal — tournaments & VR esports contexts only. */
export default function SealWatermark({ className = '', size = 96 }: SealWatermarkProps) {
  return (
    <BrandImage
      src={brandAssets.logos.seal}
      alt="FSO official seal"
      width={size}
      height={size}
      className={`object-contain opacity-90 ${className}`}
    />
  );
}
