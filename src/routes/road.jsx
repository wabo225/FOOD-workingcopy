import React, { Component } from 'react';
import "../App.css"
import SlideShow from '../slideShow'
import pic1 from '../images/RdTp/pic (1).jpg';
import pic2 from '../images/RdTp/pic (2).jpg';
import pic3 from '../images/RdTp/pic (3).jpg';
import pic4 from '../images/RdTp/pic (4).jpg';
import pic5 from '../images/RdTp/pic (5).jpg';
import pic6 from '../images/RdTp/pic (6).jpg';
import pic7 from '../images/RdTp/pic (7).jpg';


export class RoadTrip extends Component {
    render() {
        return (<div className='content'>
            <h3>Roadtrippers Guide to the Midwest</h3>
            <p className='block-paragraph'>This past summer, two of my high-school friends and I took to the road to celebrate graduation. We would exercise our newfound independence on the open Highway, driving nearly four-thousand miles.We, having camped, hiked, and backpacked, chose to try to keep our spending down while on the trip by sleeping outdoors most nights and by cooking most meals. I want to share with you, the reader, how we were able to see the midwest in 17 days with a budget of 600 dollars.</p>
            <p className='block-paragraph'>This guide will explain how the three of us survived and thrived, hopefully inspiring you to find your own adventures!</p>
            <h3 className='flair'>1: Planning</h3>
            <p className='block-paragraph'>For us, the most important parts of out planning phase was making sure we could get the most out of our trip and trying to keep the trip itself flexible and stressfree. In order to do this, we spoke to some veteran travelers and roadtrippers. Their advice for us was not only extremely helpful, but also exciting.</p>
            <h3 className='flair'>2: Food</h3>
            <p className='block-paragraph'>We spent a lot of time preparing, eating, or thinking about food. None of the three of us where experienced chefs, we didn't even know how to work our camp-stove the first night, but by the end of our trip we were sharing our jambalaya with strangers in a campsite halfway down the Grand Canyon. Backpacking, for the initiated, is a fantastic hobby that involves multiday hiking and living out of a backpack. We did two such hikes on our trip: one in Zion National Park and the other in the Grand Canyon. We carried a tent, to sleep in, food to eat, and everything to cook it. I'll share two recipes we were able to fix with our limited abilities, budget, and resources.</p>
            <h4>Simple Jambalaya</h4>
            <ol>
                <li>You'll only need a couple boxes of Zatarains Jambalaya Mix that you've been saving since you first left Louisianam, one Summer Sausage, and canned chunk chicken.</li><br/>
                <li>Since you have an incredibly direct flame on your tiny propane stove, be assured that no matter how much stirring, you will burn the bottom of the pot. The crunch really only adds flavor and you're definitely hungry enough to eat anything after the 10 mile hike it took to get here.</li><br/>
                <li>Don't worry that you made way too much. The other people, watching the early and gorgeous sunset from our interesting perspective from the bottom of the Grand Canyon, will certainly be curious about your exotic food. The wildlife certainly is interested, but it's best not to share with them.</li><br/>
                <li>Finally, sit back (hopefully you've packed a chair or found a comfy log), bring out your chopsticks and eat your starving heart out. This moment will last forever in your mind, so savor it. Savor the flavorful food, the fellowship, and the fantasticly photographic landscape. </li>
            </ol>
            <h4>Sandy Stir Fry</h4>
                <ol>
                    <li>Ingredients: 2 cups Jasmine Rice, olive oil, a little too much Sambal Olek, Stir Fry Sauce, Fresh Green Beans, Canned Chicken, and salt and pepper.</li><br/>
                    <li>This recipe involves more prep time and is more involved than our Simple Jambalaya. You will have gotten quite used to being independent, young, and free by this point, and you think you've figured some things about cooking out here. While the other of your two friends set up the campsite, you'll sit perched in a tree and snap the ends off the green beans. We also recommend snapping them in half so they're a bit easier to eat. Cook the green beans in the olive oil until they're about half as stiff as they started. We don't want them to be mushy or crunchy, but somewhere in between. Once they're nearly done, toss in the chunk chicken and finish seasoning with salt and pepper. Since we only have one burner, by the power of tv-magic, take out the fully cooked, now cooling rice from the pot and mix in your own bowl with stir fry sauce and the spicy Sambal Olek. Rest easy, and eat slowing, knowing that cleanup will be hell.</li>
                </ol>
            <h3 className='flair'>3: Photography</h3>
            <p className='block-paragraph'>Take Pictures!</p>

            <SlideShow>
                <img className="images" src={pic1} alt="rd"></img>
                <img className="images" src={pic2} alt="rd"></img>
                <img className="images" src={pic3} alt="rd"></img>
                <img className="images" src={pic4} alt="rd"></img>
                <img className="images" src={pic5} alt="rd"></img>
                <img className="images" src={pic6} alt="rd"></img>
                <img className="images" src={pic7} alt="rd"></img>
            </SlideShow>
        </div>)
    }
}