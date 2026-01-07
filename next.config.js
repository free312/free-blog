/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: '/free-blog',
  assetPrefix: '/free-blog',
  
  images: {
    unoptimized: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
