import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },
      { protocol: 'https', hostname: 'yt3.ggpht.com', pathname: '/**' },
      { protocol: 'https', hostname: 'static-cdn.jtvnw.net', pathname: '/**' },
    ],
  },
};

export default nextConfig;
