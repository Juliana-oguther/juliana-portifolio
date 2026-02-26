/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/juliana-portifolio',
  assetPrefix: '/juliana-portifolio/',
};

export default nextConfig;
