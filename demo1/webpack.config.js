const path=require("path");

module.exports = {
  entry:{
    app:"./app.js"
  },
  output:{
    publicPath: __dirname + "/dist/",//js引用路径
    path:path.resolve(__dirname,"dist"),//打包输出目录
    filename:"bundle.js"
  }
}