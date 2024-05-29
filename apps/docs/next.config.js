const { createMdxtsPlugin } = require('mdxts/next');

const withMdxts = createMdxtsPlugin({
  theme: 'aurora-x',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@repo/ui"],
};

module.exports = withMdxts(nextConfig);
