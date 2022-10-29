/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['shields.caltranscameras.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shields.caltranscameras.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
