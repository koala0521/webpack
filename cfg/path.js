// 常用路劲配置
const path = require('path');

const rv = (...a)=>path.resolve(__dirname, '../',...a);

module.exports = {
    root: rv('./'),
    dist: rv('dist'),
    src: rv('src'), 
    node_modules: rv('node_modules')
};