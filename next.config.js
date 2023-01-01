/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fluffy-back-j0pawzg53-t-pyrope.vercel.app',
        pathname: '/assets/images/products/**',
      },
    ],
  },
}

module.exports = nextConfig
