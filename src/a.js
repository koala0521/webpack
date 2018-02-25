import React, { Component } from 'react';

export default class Header extends Component {
    
    constructor(){
        super();
    }
    render(){
        
        console.log(this.props);   
        
        return <h3>Header</h3>
    }

};

