/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY?.replace(/^[^/]+\//, '') ?? '';
const isUserOrOrgSite = repository.endsWith('.github.io');
const basePath = repository && !isUserOrOrgSite ? `/${repository}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
