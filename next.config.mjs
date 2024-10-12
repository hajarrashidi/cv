/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
