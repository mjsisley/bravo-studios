const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/screening-criteria/current-screening-criteria',
        permanent: false,
      },
    ];
  },
  transpilePackages: [
    'react-dnd-html5-backend',
    'react-dnd',
    'dnd-core',
    'three',
  ],
  webpack: (config) => {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.static = path.join(__dirname, 'static');
    config.resolve.alias.utils = path.join(__dirname, 'utils');
    return config;
  },
};

module.exports = withMDX(nextConfig);
