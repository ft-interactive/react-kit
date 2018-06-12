import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageminWebpackPlugin from 'imagemin-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';
import getContext from './config';

module.exports = async (env = 'development') => ({
  mode: env,
  entry: {
    bundle: ['./index.js'],
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
  },
  output: {
    filename: env === 'production' ? '[name].[hash].js' : '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(txt|csv|tsv|xml)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'raw-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  browsers: 'defaults',
                },
              ],
              ['react'],
            ],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties',
              'syntax-dynamic-import',
              'transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name]--[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]--[hash].[ext]',
            },
          },
          {
            loader: 'extract-loader',
          },
          { loader: 'css-loader', options: { sourceMap: true, url: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.scss/,
        use: [
          // env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['bower_components'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    allowedHosts: ['.ngrok.io', 'local.ft.com'],
  },
  devtool: 'source-map',
  plugins: [
    new HotModuleReplacementPlugin(), // Re-enable if devServer.hot is set to true
    new MiniCssExtractPlugin({
      filename: env === 'production' ? '[name].[contenthash].css' : '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './views/server.js',
      templateParameters: await getContext(),
      filename: 'index.html',
    }),
    env === 'production'
      ? new ImageminWebpackPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
      : undefined,
  ].filter(i => i),
});
