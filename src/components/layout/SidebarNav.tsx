'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaTwitch, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { mainNavigation, sidebarSocialLinks, type NavItem } from '@/config/navigation';
import type { SiteTheme } from '@/config/siteTheme';
import BrandLogo from './BrandLogo';

const socialIcons = {
  twitch: FaTwitch,
  youtube: FaYoutube,
  instagram: FaInstagram,
  tiktok: FaTiktok,
} as const;

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  active,
  onNavigate,
  className,
}: {
  item: NavItem;
  active: boolean;
  onNavigate: () => void;
  className: string;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

interface SidebarNavProps {
  logoSrc: string;
  theme: SiteTheme;
  mobileOpen: boolean;
  onNavigate: () => void;
}

export default function SidebarNav({ logoSrc, theme, mobileOpen, onNavigate }: SidebarNavProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside
      id="sidebar-nav"
      className={`fso-diagonal-split flex flex-col shrink-0 w-[var(--sidebar-width)] min-h-screen border-r border-black/40 fixed md:sticky top-0 z-50 h-screen transition-transform duration-200 ease-out md:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
      aria-label="Main navigation"
    >
      <div className="p-4 border-b border-white/10">
        <Link href="/" className="block group" onClick={onNavigate}>
          <BrandLogo
            src={logoSrc}
            size={72}
            className={`w-full max-w-[200px] h-auto object-contain mx-auto ${
              theme === 'casual' ? 'drop-shadow-[0_0_12px_rgba(42,143,126,0.35)]' : ''
            }`}
          />
          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/60 mt-2 group-hover:text-[var(--fso-accent)] transition-colors">
            {siteConfig.tagline}
          </p>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2">
        <ul className="space-y-0.5">
          {mainNavigation.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const active = item.external
              ? false
              : isActive(pathname, item.href) ||
                (item.children?.some((c) => isActive(pathname, c.href)) ?? false);
            const open = expanded[item.label] ?? active;

            const linkClass = `flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              active
                ? 'bg-black/35 text-white'
                : 'text-white/75 hover:bg-black/25 hover:text-white'
            }`;

            return (
              <li key={item.label}>
                <div className="flex items-center">
                  <NavLink item={item} active={active} onNavigate={onNavigate} className={linkClass} />
                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() => toggle(item.label)}
                      className="px-2 py-2 text-white/60 hover:text-white text-xs"
                      aria-expanded={open}
                      aria-label={`${open ? 'Collapse' : 'Expand'} ${item.label}`}
                    >
                      {open ? '−' : '+'}
                    </button>
                  )}
                </div>
                {hasChildren && open && (
                  <ul className="ml-3 mb-1 border-l border-white/15 pl-2">
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          item={child}
                          active={isActive(pathname, child.href)}
                          onNavigate={onNavigate}
                          className={`block px-3 py-1.5 text-xs rounded-md ${
                            isActive(pathname, child.href)
                              ? 'text-[var(--fso-accent)]'
                              : 'text-white/60 hover:text-white'
                          }`}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 flex gap-3 border-t border-white/10">
        {sidebarSocialLinks.map((link) => {
          const Icon = socialIcons[link.icon];
          return (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-[var(--fso-accent)] transition-colors"
              aria-label={link.label}
              onClick={onNavigate}
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
