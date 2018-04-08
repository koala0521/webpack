import React, { Component } from 'react';

// less文件
import './less/test.less';

export default class Header extends Component {
    
    constructor(){
        super();
    }
    render(){
        
        console.log(this.props);   
        
        return <h3 className="header" >Header</h3>
    }

};

