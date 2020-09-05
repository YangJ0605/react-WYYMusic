const path = require('path')
const CracoAlias = require('craco-alias')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    // 别名设置
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: "./tsconfig.extend.json"
      }
    }
  ]
}