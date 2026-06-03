'use client';

import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import NewsTicker from './NewsTicker';
import { mainNavigation } from '@/config/navigation';

function resolvePageTitle(pathname: string): string {
  if (pathname === '/') return 'Home';

  for (const item of mainNavigation) {
    if (item.children) {
      for (const child of item.children) {
        if (pathname === child.href || pathname.startsWith(`${child.href}/`)) {
          return child.label;
        }
      }
    }
    if (!item.external && (pathname === item.href || pathname.startsWith(`${item.href}/`))) {
      return item.label;
    }
  }

  const segment = pathname.split('/').filter(Boolean).pop();
  return segment ? segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'FSO';
}

interface SiteHeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function SiteHeader({ onMenuToggle, menuOpen }: SiteHeaderProps) {
  const pathname = usePathname();
  const title = resolvePageTitle(pathname);

  return (
    <header className="fso-diagonal-split h-14 shrink-0 flex items-center px-4 sm:px-6 gap-3 border-b border-black/50">
      <button
        type="button"
        className="md:hidden p-2 text-white/80 hover:text-white shrink-0"
        onClick={onMenuToggle}
        aria-expanded={menuOpen}
        aria-controls="sidebar-nav"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
      >
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <h1 className="text-sm sm:text-lg font-semibold text-white shrink-0 min-w-0 truncate uppercase tracking-wide">
        {title}
      </h1>
      <NewsTicker />
    </header>
  );
}
