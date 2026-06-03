'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import SidebarNav from './SidebarNav';
import SiteHeader from './SiteHeader';
import { navLogoForTheme, resolveSiteTheme } from '@/config/siteTheme';

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const theme = resolveSiteTheme(pathname);
  const logoSrc = navLogoForTheme(theme);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={`flex min-h-screen fso-theme-${theme}`}>
      {mobileNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <SidebarNav
        logoSrc={logoSrc}
        theme={theme}
        mobileOpen={mobileNavOpen}
        onNavigate={() => setMobileNavOpen(false)}
      />

      <div className="flex flex-col flex-1 min-w-0 min-h-screen bg-black">
        <SiteHeader
          onMenuToggle={() => setMobileNavOpen((o) => !o)}
          menuOpen={mobileNavOpen}
        />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
