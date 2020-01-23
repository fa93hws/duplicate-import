const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, '../dist/'),
    publicPath: '/',
    filename: "static/js/[name].js",
    chunkFilename: 'static/js/[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                context: resolve(__dirname, '../src'),
                localIdentName: '[local]',
              },
              localsConvention: 'camelCaseOnly',
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'}),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].css"
    }),
  ],
  optimization: {
    concatenateModules: false
  }
};
