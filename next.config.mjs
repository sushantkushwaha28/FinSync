/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    turbo: false, // Disable Turbopack and use Webpack instead
  },
};

export default nextConfig;
