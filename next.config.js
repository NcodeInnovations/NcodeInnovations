/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  
  // Ultra-fast performance optimizations
  experimental: {
    // Optimize CSS for faster loading
    optimizeCss: true,
    // Optimize package imports for smaller bundles
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-icons',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tabs',
      '@radix-ui/react-select'
    ],
    // Enable faster server components
    serverComponentsExternalPackages: ['@supabase/supabase-js'],
  },
  
  // Enable static optimization for faster loading
  compress: true,
  
  // Optimize webpack for faster builds and smaller bundles
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Aggressive code splitting for instant navigation
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000,
        cacheGroups: {
          // Vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
            enforce: true,
          },
          // UI components
          ui: {
            test: /[\\/]components[\\/]ui[\\/]/,
            name: 'ui',
            priority: 20,
            chunks: 'all',
            enforce: true,
          },
          // Common components
          common: {
            test: /[\\/]components[\\/]/,
            name: 'common',
            priority: 15,
            chunks: 'all',
            minChunks: 2,
          },
          // Service pages
          services: {
            test: /[\\/]app[\\/]services[\\/]/,
            name: 'services',
            priority: 25,
            chunks: 'all',
          },
          // Default
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };

      // Tree shaking optimizations
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Faster module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };

    // Optimize for faster builds
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
  
  // Enable faster page transitions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  swcMinify: true,
  
  // Modularize imports for tree shaking
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/{{member}}.js',
    },
  },

  // Headers for better caching
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