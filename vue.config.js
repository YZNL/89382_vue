module.exports = {
  // 修改为相对路径
  publicPath: './',
  devServer: {
    open: false, // 项目启动时是否自动打开网页
    overlay: {
      warnings: true,
      errors: true
    },
    // proxy: {
    //   '/': {
    //     target: 'http://39.108.152.84:8080/repair_war/report',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
