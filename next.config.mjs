/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  optimization: {
    minimize: true,
  },
};

export default nextConfig;
