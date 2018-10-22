const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
        // test: /\.css$/, // 针对CSS结尾的文件设置LOADER

        //transform
        // use: [
        //   {
        //     loader: "style-loader",
        //     options: {
        //       transform: "./css.transform.js" // transform 文件
        //     }
        //   },
        //   {
        //     loader: "css-loader"
        //   }
        // ]
        // use,unuse
        // use: [
        //   {
        //     loader: "style-loader/useable" // 注意此处的style-loader后面的 useable
        //   },
        //   {
        //     loader: "css-loader"
        //   }
        // ]

        // css放在style里
        // use: [
        //   {
        //     loader: "style-loader",
        //     options: {
        //       singleton: true // 处理为单个style标签
        //     }
        //   },
        //   {
        //     loader: "css-loader",
        //     options: {
        //       minimize: true // css代码压缩
        //     }
        //   }
        // ]

        // 以link的形式引入
        // use: [
        //   {
        //     loader: "style-loader/url"
        //   },
        //   {
        //     loader: "file-loader"
        //   }
        // ]
      }
    ]
  }
};