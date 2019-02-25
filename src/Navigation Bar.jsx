import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css'

export class Navigation extends Component {
    render() {
        return( 
            <div className='navBar'>
                <div><Link className="link" to='/'>Home</Link></div>
                <div><Link className='link' to='/family'>Family</Link></div>
                <div><Link className='link' to='/Road-Trip'>Road Trip</Link></div>
                <div><Link className='link' to='/about'>About</Link></div>
            </div>
        )
    }
}