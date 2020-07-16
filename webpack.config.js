// 遵循CommonJs规范
var path = require('path'); //nodeJs模块

module.exports = {
  entry: {
    app: './src/index.js',
  }, //打包入口 可以写一个入口(直接写一个路径), 也可以写多个入口文件(用数组接收), 或者用键值对的形式
  output: {
    path: path.resolve(__dirname, 'dist'), // 根目录下的dist文件夹
    filename: 'main.js',
    publicPath: 'dist/'
  }, // 打包出口
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: [/\.css$/, /\.less$/],
        use: [
          {
            loader: 'style-loader',
            // loader: 'style-loader/url' 如果有多个文件就会有多个link标签

            options: {
              attributes: {
                frist: 1
              },
              injectType: 'singletonStyleTag'
            }
            // options: {
            //   attrs: {
            //     first: 1 // 顺序
            //   },
            //   singleton: true, // 设置样式放入一个style标签中
            //   insertInto: '#app', // 把style标签插入到指定id的元素中
            //   insertAt: 'top', // 改变style文件放置的位置
            //   transform: './css.transform.js'//根据相关的信息修改样式
            // }
          },
          {
            loader: 'css-loader'
            // loader: 'file-loader' 与style-loader/url 所对应
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }, // 处理第三方资源
}