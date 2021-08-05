import * as webpack from 'webpack';
import * as SriPlugin from 'webpack-subresource-integrity';
// @ts-ignore
// import ResourcehintWebpackPlugin from 'resource-hints-webpack-plugin';
import * as ImageminMinimizerPlugin from 'image-minimizer-webpack-plugin';

import 'dotenv/config';

export default {
  /*experiments: {
    asyncWebAssembly: true
  },*/
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '/assets/webfonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.wasm$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '/wasm/[name].[ext]'
          }
        },
        type: 'javascript/auto'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'NODE_ENV': process.env.NODE_ENV,
      'API_ENTRYPOINT': process.env.API_ENTRYPOINT
    }),
    new SriPlugin({
      hashFuncNames: ['sha256'],
      enabled: process.env.NODE_ENV === 'production'
    }),
    // new ResourcehintWebpackPlugin(),
    new ImageminMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          ['svgo', { plugins: [{ removeViewBox: false }] }]
        ]
      }
    })
  ]
} as unknown as webpack.Configuration
