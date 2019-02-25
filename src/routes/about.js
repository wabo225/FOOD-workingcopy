import React, { Component } from "react";
import '../App.css';
import code from '../images/Code.PNG'


export class About extends Component {
    render(){
        return(
        <div className="content">
            <h3>About: "Food and the Human Condition"</h3>
            <p>This is a website dedicated to describing the human condition and my life through food.</p>
            <img className="images" src={code} alt="code" />
            <p className="block-paragraph">I also tried, with this project to strengthen and develop my technical expertise. I "coded" this website fom scratch using React (a framework for javascript), html, and css. The design for the website certainly needs some work, and comparing it to a fully-fledged blog you might find online leaves more to want from mine. But, as my first website, I think this is a great start. From the start I had anticipated incorporating more custom animations such as a shrinking header or a scrolling timeline, but those have proved to be much harder with javascript and css than they are with python or p5.</p>
    </div>)
    };
}