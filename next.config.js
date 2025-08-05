/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tabs',
      '@radix-ui/react-select'
    ],
  },

  serverExternalPackages: ['@supabase/supabase-js'],

  compress: true,

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
            enforce: true,
          },
          ui: {
            test: /[\\/]components[\\/]ui[\\/]/,
            name: 'ui',
            priority: 20,
            chunks: 'all',
            enforce: true,
          },
          common: {
            test: /[\\/]components[\\/]/,
            name: 'common',
            priority: 15,
            chunks: 'all',
            minChunks: 2,
          },
          services: {
            test: /[\\/]app[\\/]services[\\/]/,
            name: 'services',
            priority: 25,
            chunks: 'all',
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };

      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };

    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/{{member}}.js',
    },
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;