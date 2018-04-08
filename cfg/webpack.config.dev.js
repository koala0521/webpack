// 开发环境打包配置

const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config.base')
const dfPath = require('./path')
// webpack配置合并工具
const merge =require('webpack-merge')


const RS = (...arg)=>path.resolve( __dirname , ...arg )

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
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            // css模块化，方便多人开发
                            module:true,
                            // 定义模块化css后的类名（默认为hash值，可读性差）path:路劲； name：文件名； local：本地定义的className
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    }
                ],
                // 排除的文件，遇到这些文件不会用 loader 处理，也就不会模块化
                exclude:[
                    RS('./src/common'),                  
                    RS('node_modules')
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:[
                    RS('./src/common'),                  
                    RS('node_modules')
                ]
                
            },   
            //处理less文件
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader' 
                ]
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
    plugins:[
        // 模块热替换功能
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-module-eval-source-map',

    devServer:{
        // 服务器打包后，输出的资源路劲
        publicPath:'/',
        open:true
    }
};

// 导出合并后的webpack配置
module.exports = strategyMerge( base , config );