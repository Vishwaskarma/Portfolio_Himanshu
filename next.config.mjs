/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    optimizePackageImports: ['lucide-react', 'next/font'],
  },
  

  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },


  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },


  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },


  reactStrictMode: true,
};

export default nextConfig;
