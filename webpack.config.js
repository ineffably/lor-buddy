const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const outDir = 'lib';

module.exports = (env, argv) => {
  const { mode = 'development' } = argv;
  const devtool = mode === 'production' ? false : 'inline-source-map';

  return ({
    mode,
    devtool,
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, outDir),
      filename: `index.js`,
      library: { name: 'lor-buddy', type: 'umd' }
    },
    devServer: {
      port: 8888,
      static: {
        directory: path.join(__dirname, './'),
        publicPath: '/'
      },
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
      // 'react': {
      //   commonjs: 'react',
      //   commonjs2: 'react',
      //   amd: 'react',
      //   root: 'React'
      // },
      // 'react-dom': {
      //   commonjs: 'react-dom',
      //   commonjs2: 'react-dom',
      //   amd: 'react-dom',
      //   root: 'ReactDOM'
      // }
    },
    stats: {
      assets: true,
      chunks: true,
      modules: true,
      builtAt: true,
      hash: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?|.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.module\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]-[hash:base64:5]'
                },
                importLoaders: 1,
              },
            },
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     postcssOptions: {
            //       plugins: ['postcss-simple-vars', 'postcss-nested'],
            //     },
            //   },
            // },
          ]
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './index.html')
      }),
      new BundleStatsWebpackPlugin()
    ]
  })
}

