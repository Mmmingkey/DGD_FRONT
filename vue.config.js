module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://125.176.218.194:8000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};