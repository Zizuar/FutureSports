'use client';

import { useState } from 'react';
import BrandImage from './BrandImage';
import { assetUrl } from '@/config/brandAssets';

interface ImageGalleryProps {
  title: string;
  images: readonly string[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ title, images, columns = 3 }: ImageGalleryProps) {
  const [active, setActive] = useState<string | null>(null);
  const colClass =
    columns === 4
      ? 'grid-cols-2 sm:grid-cols-4'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-2 sm:grid-cols-3';

  return (
    <section className="not-prose">
      <h3 className="text-lg font-bold text-[var(--fso-accent)] mb-4">{title}</h3>
      <div className={`grid ${colClass} gap-3`}>
        {images.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-black focus:outline-none focus:ring-2 focus:ring-[var(--fso-accent)]"
          >
            <BrandImage
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal
          onClick={() => setActive(null)}
          onKeyDown={(e) => e.key === 'Escape' && setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl(active)}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
