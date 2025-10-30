module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  target: "serverless",
  // Disable image optimization to prevent WASM issues
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    // Handle WASM files properly
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    
    // Add rule for WASM files
    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });
    
    return config;
  },
};
