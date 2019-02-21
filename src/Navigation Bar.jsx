import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css'

export class Navigation extends Component {
    render() {
        return( 
            <div className='navBar'>
                <div><Link className="link" to='/'>Home</Link></div>
                <div><Link className='link' to='/1millionBC'>1,000,000 BC</Link></div>
                <div><Link className='link' to='/about'>About</Link></div>
            </div>
        )
    }
}