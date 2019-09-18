module.exports = {
  publicPath: './',
  devServer: {    
    proxy: {
      '/api': {
        target: "http://localhost:8082",
        // target: 'http://154.211.159.144',     
        // target: 'http://tiyu.pplinkes.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    after:require('./src/mock/mock-server')
  }
};
