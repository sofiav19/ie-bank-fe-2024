const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map"
  },
  // Define output directory based on the environment
  outputDir: process.env.NODE_ENV === 'uat' ? 'dist-uat' : 'dist-dev',
});
