/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Désactive ESLint pendant le build Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // (optionnel) ignore aussi les erreurs TS
  },
};

module.exports = nextConfig;
