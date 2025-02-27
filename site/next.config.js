/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // fontLoaders: [
    //   { loader: '@next/font/google', options: { subsets: ['latin'] } },
    // ],
  },
  images: {
    unoptimized: true, // Disables Next.js automatic image optimization
  },
};

module.exports = nextConfig;
