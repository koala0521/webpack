import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './b';
import Header from './a';

// 公用的css文件
import './common/public.css'

// 自定义的css文件
import aCss from './css/a.css'
import bCss from './css/b.css'

console.log('====================================');
console.log( aCss , bCss );
console.log('====================================');

// 引入图片
import Gif from './common/img/2.gif'

// 使用css库和字体文件
import 'font-awesome/css/font-awesome.css'

// sass文件
// import './scss/a.scss'

ReactDOM.render(    
    <div>
        <Header id={ 21 } ></Header>
        <div className='active' >
            <h4> 这里是内容 sssaaa </h4>
            <div className='rocket' >字体图标</div>
            <div className='fa fa-rocket' >font-awesome库</div>
            <img src={require('./common/img/1.jpg')} alt=""/>
            <img src={ Gif } alt=""/>
        </div>
        <Footer tilte='aaaa' time={ (new Date).getTime() }></Footer>
    </div>,
    document.getElementById("root")
);