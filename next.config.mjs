/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'next/font'],
  },
  
  // Better error handling during development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Optimize fonts and prevent FOUC
  optimizeFonts: true,

  // Better build performance
  swcMinify: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Better error boundaries
  reactStrictMode: true,
};

export default nextConfig;
