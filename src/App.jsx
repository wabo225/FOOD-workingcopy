import React, { Component } from "react";
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/about';
import { Fire } from './routes/fire';
import { Navigation } from './Navigation Bar';
import Footer from './Footer';
import Header from './Header'

export default class App extends Component {
    render() {
        return (
            <div className='body'>
                <Header>
                    <p>Analysis of Food</p>
                </Header>
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <div>
                                <Route exact path='/' component={Home}></Route>
                                <Route path='/1millionBC' component={Fire}></Route>
                                <Route path='/about' component={About}></Route>
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