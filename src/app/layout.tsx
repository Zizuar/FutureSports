import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import SiteShell from '@/components/layout/SiteShell';
import { siteConfig } from '@/config/site';
import { getAssetManifest } from '@/lib/getAssetManifest';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.legalName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.urls.production),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { logo } = getAssetManifest();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteShell logoSrc={logo}>{children}</SiteShell>
      </body>
    </html>
  );
}
