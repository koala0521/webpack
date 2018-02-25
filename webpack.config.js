const webpack = require('webpack');
//当前项目的绝对路劲
const path = require('path');

// 命令行参数解析引擎
const argv = require('minimist')(process.argv.slice(2));

let env = null;

switch (argv.env) {
    case 'production':
        //生产环境 
        env = 'webpack.config.prod';
        break;
    default:
        env = 'webpack.config.dev';

}

console.log(`you are in ${argv.env} mode`);

const RS = (...arg)=>path.resolve( __dirname , ...arg );


module.exports = require( RS( 'cfg',env ) );

// module.exports = {
    
//     //webpack分析模块依赖的入口文件，
//     entry:'./src/app.js',
//     output:{
//         path: RS('dist/'),
//         filename:'assets/js/main.js',
//         publicPath:'/'
//     },

//     //模块处理
//     module:{
//         //处理规则：
//         rules: [
//             //babel-loader可以处理很多类型的语法
//             {
//                 test: /\.js$/,
//                 use: [{
//                     loader: 'babel-loader'
//                 }],
//                 exclude:[path.resolve( __dirname , 'node_modules' )]
//             },
//             // 分离打包后的 css
//             {
//                 test: /\.css$/,
//                 use: extractCSS.extract({
//                     use: ['css-loader']
//                 })
//             },


//             // {
//             //     test:/\.css$/,
//             //     use:[
//             //         'style-loader',
//             //         {
//             //             loader:'css-loader',
//             //             options:{
//             //                 // css模块化，方便多人开发
//             //                 module:true,
//             //                 // 定义模块化css后的类名（默认为hash值，可读性差）
//             //                 localIdentName: '[path]-[name]'
//             //             },
//             //         }
//             //     ],
//             //     // 排除的文件，遇到这些文件不会用 loader 处理，也就不会模块化
//             //     exclude:[
//             //         RS('./src/common'),                  
//             //         RS('node_modules')
//             //     ]
//             // },
//             // {
//             //     test:/\.css$/,
//             //     use:['style-loader','css-loader'],
//             //     include:[
//             //         RS('./src/common'),                  
//             //         RS('node_modules')
//             //     ]
                
//             // },
//             // 处理sass/scss语法
//             {
//                 test:/\.(sass|scss)$/,
//                 use:[
//                     'style-loader',
//                     {
//                         loader:'css-loader'
//                     },
//                     {
//                         loader:'sass-loader',
//                         options:{
//                             // 输出文件的命名设置 默认规则 [hash].[ext]
//                             name:'css/[name]_[hash:8].[ext]'
//                         }
//                     }
//                 ]   
//             },
//             // 处理图片
//             {
//                 test:/\.(jpg|png|gif|jgeg)$/,
//                 use: [{
//                     loader: 'file-loader',
//                     options: {
//                         limit:90000,
//                         // 输出文件的命名设置 默认规则 [hash].[ext]
//                         name: 'assets/img/[name]_[hash:8].[ext]'
//                     }
//                 }]
//             },
//             // 处理图标字体
//             {
//                 test:/\.(ttf|eot|woff|woff2|svg)$/,
//                 use:[
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             // 输出文件的命名设置 默认规则 [hash].[ext]
//                             name: 'assets/fonts/[name]_[hash:8].[ext]'
//                         }
//                     }
//             ]
//             }
//         ]
//     },
//     //插件
//     plugins:[
        
//         extractCSS,

//         //自定义配置
//         new HtmlWepackPlugin({
//             // 输出的html文件
//             filename:'index.html',
//             // 输出的html文件用到的模板文件  [ 可选 ]
//             template:'src/index.html'
//         }),
//         new CleanFiles('dist')
//     ],
//     devServer:{
//         // 服务器打包后，输出的资源路劲
//         publicPath:'/',
//         open:true
//     }
// };