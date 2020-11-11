let glob = require('glob') // 用于筛选文件

// 工厂函数 - 配置pages实现多页面获取某文件夹下的html与js
function handleEntry(entry) {
  let entries = {},
    entryTemplate = '';
  glob.sync(entry).forEach(item => {
    entryTemplate = item.split('/').splice(-3) // 获取文件路径组成的数组
    entries[entryTemplate[2]] = {
      entry: entryTemplate.join('/') + '/' + entryTemplate[2] + '.js',
      template: 'public/index.html',
      title: entryTemplate[2],
      filename: entryTemplate[2]
    }
  })
  return entries
}
let pages = handleEntry('./src/views/**?');
// 以下开始配置
module.exports = {
  lintOnSave: false, // 关掉eslint
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,
  // 入口设置
  pages,
  devServer: {
    index: 'index', // 运行时，默认打开index页面
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
  }
}