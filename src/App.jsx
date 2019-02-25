import React, { Component } from "react";
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/about';
import { Family } from './routes/family';
import { Navigation } from './Navigation Bar';
import { RoadTrip } from './routes/road'; 
import Footer from './Footer';
import Header from './Header'

export default class App extends Component {
    render() {
        return (
            <div className='body'>
                <Header>
                    <p>Nothing more than a Food Blog</p>
                </Header>
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <div>
                                <Route exact path='/' component={Home}></Route>
                                <Route path='/family' component={Family}></Route>
                                <Route path='/about' component={About}></Route>
                                <Route path='/Road-trip' component={RoadTrip}></Route>
                            </div>
                        </Switch>
                        <Footer>
                            Will Bodron: 2019
                        </Footer>
                    </div>
                </Router>
            </div>
        )
    }
}