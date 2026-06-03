'use client';

import { newsTickerItems } from '@/config/newsTicker';

export default function NewsTicker() {
  const line = newsTickerItems.join('   ◆   ');
  const duplicated = `${line}   ◆   ${line}`;

  return (
    <div
      className="overflow-hidden flex-1 min-w-0 border-l border-white/10 pl-4"
      aria-label="Site news"
    >
      <div className="news-ticker-track flex whitespace-nowrap text-sm text-[var(--fso-text-muted)]">
        <span className="pr-16">{duplicated}</span>
      </div>
    </div>
  );
}
