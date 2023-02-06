/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['shields.caltranscameras.app', 'cwwp2.dot.ca.gov/data/**'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shields.caltranscameras.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cwwp2.dot.ca.gov/',
        port: '',
        pathname: '/data/**',
      },
    ],
  },
};

module.exports = nextConfig;
