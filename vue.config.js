module.exports = {
  // 改变vue默认web图标
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  },
  // webpack 链接 API，用于生成和修改 webpack 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@$', resolve('src'))
  // }
  // publicPath: "", //根路径
  // outputDir:'dist',//打包的时候生成的一个文件名
  // assetsDir: "assets", //静态资源目录(js,css,img,fonts)这些文件都可以写里面
  // lintOnSave: false, //是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  // devServer:{
  //     open:false,//启动项目后自动开启浏览器
  //     host:'localhost',//对应的主机名
  //     port:8080,//端口号
  //     https:false,//是否开启协议名,如果开启会发出警告
  //     hotOnly:false,//热模块更新的一种东西,webpack中自动有过配置,但如果我们下载一些新的模块可以更好的给我更新一些配置
  //     proxy:{
  //     //配置跨域
  //     '/api':{//配置跨域的名字
  //         target:'https://127.0.0.1:9701/lostelkAPI/',//跨域的地址
  //         ws:true,
  //         changOrigin:true,//是否跨域
  //         pathRewrite:{//当前的名字
  //             '^/api':''
  //         }
  //       }
  //     }
  // }
  // configureWebpack: {
  //   externals: {
  //     luckysheet: "luckysheet", // 其中 左侧是你要import时的名字 右侧是此js抛出的全局变量名称
  //   }
  // }
};
