/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr(nextConfig)
