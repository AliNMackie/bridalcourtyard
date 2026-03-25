
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bridalcourtyard.com',
      },
      {
        protocol: 'http',
        hostname: 'bridalcourtyard.com',
      },
      {
        protocol: 'https',
        hostname: 'app.bridallive.com',
      }
    ],
  },
};

export default nextConfig;
