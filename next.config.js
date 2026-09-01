/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.faerber.dev',
      },
    ],
  },
}

module.exports = nextConfig
