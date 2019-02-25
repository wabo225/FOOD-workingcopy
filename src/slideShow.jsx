import React, { Component } from 'react';
import "./App.css"

export default class SlideShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 0
        }
    }

    handleFButton(e) {
        //e.preventDefault();
        const l = this.state.slide;
        this.setState({
            ...this.state,
            slide: (l + 1)%this.props.children.length
        });
        console.log(this.state);
    }

    // handleBButton(e) {
    //     //e.preventDefault();
    //     const l = this.state.slide;
    //     this.setState({
    //         ...this.state,
    //         slide: (l-1)%(this.state.amountOfSlides)
    //     });
        
    // }

    render() {
        const slides = this.props.children;
        console.log(this.state)
        return (<div>
            <button style={{'text-align':"right", "float": "left"}} className= 'button' onClick={(e) => this.handleFButton(e)}>Next Picture</button>
            <p>{this.state.slide}/{this.props.children.length}</p>
            {slides[this.state.slide]}
        </div>)
    }
}