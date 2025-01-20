/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'green-wall.leoku.dev',
        port: '',
        pathname: '/api/og/share/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
