//postcss配置文件 --- 用于加上兼容性前缀

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-cssnext'),
    require('cssnano') //css压缩
  ]
}