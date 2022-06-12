
import React, {Component} from "react";
import './footer.css';
import fb from './fb.png';
import insta from './insta.png'
import linkden from './linkden.png'
import twitter from './tw.png'
class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <section>
                <ul>
                    <li id="titl">WeMeet:</li><br/>
                    <li>Pricing</li>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                </ul>
                </section>
                <section>
                <ul>
                    <li id="titl">Features:</li><br/>
                    <li>Community</li>
                    <li>Events</li>
                    <li>Forums</li>
                </ul>
                </section>
                <section>
                <ul>
                <li id="titl">Explore:</li><br/>
                <li>Meetings</li>
                <li>Talks</li>
                <li>Categories</li>
                </ul>
                </section>
                <div className="connect">
                    <p>Connect:</p>
                    <hr/>
                    <img src={fb}/>
                    <img src={insta}/>
                    <img src={linkden}/>
                    <img src={twitter}/>
                    <hr/>
                </div>
            
                
            </div>
        )
    }
}

export default Footer;

