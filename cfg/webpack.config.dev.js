// 开发环境打包配置

const base = require('./webpack.config.base')
const dfPath = require('./path')
// webpack配置合并工具
const merge =require('webpack-merge')

// 合并方式配置
let strategyMerge = merge.strategy({
    entry: 'prepend'
});

let config = {
    module:{
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude: [
                    dfPath.node_modules
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
			{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            },
            {
                test: /\.(mp4|ogg|svg|ico)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            },
        ]
    },

    devtool: 'cheap-module-eval-source-map',
};

// 导出合并后的webpack配置
module.exports = strategyMerge( base , config );