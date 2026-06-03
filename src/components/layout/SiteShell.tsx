'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SidebarNav from './SidebarNav';
import SiteHeader from './SiteHeader';

interface SiteShellProps {
  children: React.ReactNode;
  logoSrc: string | null;
}

export default function SiteShell({ children, logoSrc }: SiteShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
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
