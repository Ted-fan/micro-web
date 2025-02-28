const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "//localhost:9000",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 9000
  },
  configureWebpack: {
    output: {
      library: `vue-sub`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_vue-sub` // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    }
  }
})
