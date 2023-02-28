const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false, // 编译完成是否自动打开网页，true为自动打开，false为不打开
    host: '0.0.0.0', // 指定使用地址，默认localhost，0.0.0.0 代表可以被外界访问
    port: 8080, // 访问端口
    proxy: {
      "/devApi": {
        target: "http://v3.web-jshtml.cn/api", // (必选)API服务器的地址
        changeOrigin: true,                    // (必选) 是否允许跨越
        ws: false,                            // (可选) 是否启用websockets
        secure: false,                         // (可选) 是否启用https接口
        pathRewrite: {                         // (可选) 请求路径重写
          "^/devApi": ""  //匹配开头为 /devApi的字符串，并替换成空字符串
        }
      }
    }
  }
})
