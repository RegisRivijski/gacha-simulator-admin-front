module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/gacha-simulator/api/': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '/gacha-simulator/api/': '/',
        },
      },
    },
  },
};
