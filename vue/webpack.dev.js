const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8020,
        open: true,
        compress: true,
        proxy: {
            '/': {
                target: 'http://idsp-fc.sit.sf-express.com',
                // target: 'http://10.118.45.51:8080',
                pathRewrite: {'^/': '/'}
            }
		}
    }
})