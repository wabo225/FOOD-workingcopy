import React, { Component } from "react";
import biscuit from '../images/recipies/biscuit.jpeg'
import dinnerRolls from '../images/recipies/dinnerRolls.jpg'

import '../App.css';

export class Family extends Component {
    render(){
        return(
        <div className="content">
            <h3>Family</h3>
            <p className="block-paragraph">The easiest way to describe my past is to say that I come from a small family. I have no aunts, uncles, or cousins. Family reunions happen whenever the whole family of four is around a dinner table. That said, our family does have memories and notions of some larger family, and we can only try to connect with them through the shared recipies.</p>
            <p>I'd like to share some of these here. Feel no pressure to try these, for I'm sure there's some sort of genetic reason we all love Coley's baking. Regardless of their value to the rest of the world, these family recipies and family reunions formed me into the man I am today.</p>
            <img style={{'float':'left', 'width':"50%" }} className="images" src={biscuit} alt="recipe"></img>
            <img style={{'float':'left', 'width':"50%" }} className="images" src={dinnerRolls} alt="recipe"></img>
            
            <p className="block-paragraph">    
            I come from a long line of small scale gardeners. My grandfather did it best. He would spent hours tending his acre. Some of my fondest memories are of following my grandfather around those carefully planned, fragrant rows of green beans, tomatoes, squash, and eggplant. When he finally had to stop, I knew it was a sign of something much worse. My own parents too lost their love for gardening when their work became more involved. Though there may be no gardens now, what they may not have known is that while they were watering plants, something more valuable was growing. My brother and I learned lessons about work and science out in our grandfather's yard. Now, reflecting, I saw that it was never about growing plants, but about growing us. We are the only future of the family. We owe it to our ancestors to keep using their recipes and to keep gardening.
            </p>
    </div>)
    };
}