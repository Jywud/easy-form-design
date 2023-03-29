const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('./src')).set('components', resolve('./src/components'));
  },
  configureWebpack: (config) => {
    /* 代码压缩 */
    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          // 自动删除console
          compress: {
            // warnings: false, // 若打包错误，则注释这行
            drop_debugger: true,
            drop_console: true,
            pure_funcs: ['console.log'],
          },
        },
        sourceMap: false,
        parallel: true,
      })
    );
  },
});
