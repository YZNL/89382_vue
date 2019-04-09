module.exports = {
  plugins: {
    autoprefixer: {}
  },
  proxyTable: {
    '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
      target: 'http://39.108.152.84:8080/', //源地址 
      changeOrigin: true, //改变源 
      pathRewrite: {
        '^/api': 'http://39.108.152.84:8080/' //路径重写 
      }
    }
  }
}
