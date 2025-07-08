import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media3.giphy.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
