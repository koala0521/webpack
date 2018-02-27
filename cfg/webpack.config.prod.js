// 生产环境配置
const webpack = require('webpack');
const base = require('./webpack.config.base')
const path = require('path');
const dfPath = require('./path');
const merge = require('webpack-merge');

// js压缩工具
const ClosureCompilerPlugin = require('webpack-closure-compiler');
// css单独打包插件
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractCSS = new extractTextWebpackPlugin('assets/css/[name]_[contenthash:6].css');

// style!css?modules&localIdentName=[name]__[local]

// weback合并配置
let strategyMerge = merge.strategy({
    entry: 'replace',
    output: 'replace',
	module:{
		rules: 'replace'
	}
});

let config ={
entry: {
        vender:['react'],
        app: path.resolve(dfPath.root,'src/app.js')
    },
    output: {
        path: dfPath.dist,
        filename: 'assets/js/[name]_[chunkhash].bundle.js',
        publicPath: '/',
        chunkFilename: 'assets/js/[name].sepChunk.js',
		hashDigestLength: 6
    },

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
                use: extractCSS.extract({
                    use: ['css-loader']
                })
            },
			{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
					{
						loader: 'url-loader',
						options:{
							limit:8192,
							name: '[name]_[hash].[ext]',
							outputPath: 'assets/img/'
						}
					}
				],
            },
            {
                test: /\.(mp4|ogg|svg|ico)$/,
                use: [
					{
						loader: 'file-loader',
						options:{
							name: '[name]_[hash].[ext]',
							outputPath: 'assets/media/'
						}
					}
				]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [

					{
						loader: 'url-loader',
						options:{
							limit:10000,
							name: '[name]_[hash].[ext]',
							outputPath: 'assets/font/',
							mimetype: 'application/font-woff'
						}
					}
				]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
					{
						loader: 'url-loader',
						options:{
							limit:10000,
							name: '[name]_[hash].[ext]',
							outputPath: 'assets/font/',
							mimetype: 'application/octet-stream'
						}
					}
				]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
					{
						loader: 'file-loader',
						options:{
							name: '[name]_[hash].[ext]',
							outputPath: 'assets/font/',
						}
					}
				]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
					{
						loader: 'url-loader',
						options:{
							limit:10000,
							name: '[name]_[hash].[ext]',
							outputPath: 'assets/font/',
							mimetype: 'image/svg+xml'
						}
					}
				]
            },

        ]
    },

    plugins:[
        extractCSS,
        
        // 设置 process.env 环境变量的快捷方式。
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production'
        })
        
		// ,new ClosureCompilerPlugin()
    ],

    devtool: 'source-map'
};

module.exports = strategyMerge(base,config);