import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  remotePatterns: {
    domains: ['localhost', 'maps.googleapis.com'],
  },
  images: {
    domains: ['localhost', 'maps.googleapis.com'], 
  },

  // appDir: true
};

export default nextConfig;
