/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack').default({
        compiler: 'jsx',
        collections: ['mdi', 'heroicons', 'fa'], // Include multiple icon sets
            scale: 1,
        jsx: 'react',
      }),
    );

    return config;
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     turbo: true,
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;