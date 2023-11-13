/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/todo-lists',
};

module.exports = nextConfig;
