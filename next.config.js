/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Désactive ESLint pendant le build Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // (optionnel) ignore aussi les erreurs TS
  },
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
};

module.exports = nextConfig;
