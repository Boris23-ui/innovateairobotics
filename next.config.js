/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [], // Add your image domains here if using next/image
    unoptimized: false,
  },
  // Enable trailing slashes for better SEO
  trailingSlash: true,
}

module.exports = nextConfig 