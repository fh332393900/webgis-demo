const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = 'Workers'
module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/webgis-demo/' : '/',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, cesiumWorkers),
          to: 'Workers',
        },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, 'Assets'),
          to: 'Assets',
        },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, 'Widgets'),
          to: 'Widgets',
        },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, 'ThirdParty/Workers'),
          to: 'ThirdParty/Workers',
        },
      ]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./'),
      }),
    ],
    module: {
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/,
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, cesiumSource),
          use: {
            loader: require.resolve('@open-wc/webpack-import-meta-loader'),
          },
        },
      ],
    },
  },
}
