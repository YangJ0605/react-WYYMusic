const path = require('path')
const CracoAlias = require('craco-alias')
const CracoLessPlugin = require('craco-less');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')


const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 1024,
        minRatio: 0.8
      }),
    ],
    alias: {
      '@': resolve('src'),
      // '@ant-design/icons$': resolve('utils/antdIcon.tsx')
    }
  },
  plugins: [
    // 别名设置
    // {
    //   plugin: CracoAlias,
    //   options: {
    //     source: 'tsconfig',
    //     baseUrl: './src',
    //     tsConfigPath: "./tsconfig.extend.json"
    //   }
    // },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },//主题颜色
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": true
        }
      ]
    ]
  }
}