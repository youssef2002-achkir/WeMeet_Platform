
import React, {Componenet} from "react";

class Footer extends Componenet{
    
}

import React, {Component} from "react";
import './footer.css';
class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <section>
                <ul>
                    <li>WeMeet</li>
                    <li>Pricing</li>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                </ul>
                </section>
                <section>
                <ul>
                    <li>Features</li>
                    <li>Community</li>
                    <li>Events</li>
                    <li>Forums</li>
                </ul>
                </section>
                <section>
                <ul>
                <li>Explore</li>
                <li>Meetings</li>
                <li>Talks</li>
                <li>Categories</li>
                </ul>
                </section>
                
            </div>
        )
    }
}

export default Footer;

