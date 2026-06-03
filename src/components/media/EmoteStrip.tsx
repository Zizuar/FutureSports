import { brandAssets } from '@/config/brandAssets';
import BrandImage from './BrandImage';

export default function EmoteStrip() {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-6 px-4 bg-[var(--fso-charcoal)]/60 border-y border-white/10">
      {brandAssets.emotes.map((src) => (
        <div
          key={src}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-white/20 bg-black/40 hover:border-[var(--fso-accent)]/60 transition-colors"
        >
          <BrandImage src={src} alt="FSO Twitch emote" width={64} height={64} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
}
