// webpack基础配置
const path = require('path');
const webpack = require('webpack');
const Html = require('html-webpack-plugin');
const CleanFolder = require('clean-webpack-plugin');

const dfPath = require('./path');

module.exports = {
    
    entry: {
        app: path.resolve(dfPath.root,'src/app.js')
    },

    output: {
        path: dfPath.dist,
        filename: '[name].bundle.js',
        publicPath: '/',
        chunkFilename: '[name].sepChunk.js'
    },

    module:{
        rules:[
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['link:href']
                    }
                }
            }
        ]
    },
    plugins:[
        new Html({
            name:'index.html',
            template:'./cfg/public/index.html'
        }),
        new CleanFolder(['dist'],{
            root:dfPath.root
        }),
        // 自动加载模块配置,不需要 require 或者 import
        new webpack.ProvidePlugin({
            React:'react',
            Component:['react','Component'],
            ReactDOM:'react-dom',
            PT:'prop-types',
            Route:['react-router-dom','Route'],
            Router: ['react-router-dom', 'BrowserRouter'],
            connect: ['react-redux', 'connect'],
            Provide: ['react-redux', 'Privide']
        })
    ],

    //模块解析配置 ：一般那情况下不需要配置
    resolve:{
        // 模块查找路劲配置,数组第一项，路劲有优先查找权
        modules:[
            'node_modules',
            dfPath.root,
            dfPath.src
        ]
    },

    devServer:{
        // 服务器打包后，输出的资源路劲
        publicPath:'/',
        open:true,
        historyApiFallback:true,
        inline:true,
        hot:true
    }
};
