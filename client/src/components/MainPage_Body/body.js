import React, {Component} from "react";
import { Link } from "react-router-dom";
import './body.css'
class Body extends Component{
    render(){
        return(
            <div className="Body">
             <h2>How WeMeet Works?</h2><br/>
             <p>Meet new people who share your interests through online and in-person events. 
                It's free to create an account.</p><br/><br/>
                <div className="imageC">
                <div className="cc" ><img src={require("./find group.jpg")}></img><Link to='/Communities'><button>Join Group</button></Link></div>
                <div className="cc" id="srow"><img src={require("./event icpon.png")}></img><Link to='/Events_b'><button>Find Events</button></Link></div>
                <div className="cc"><img src= {require("./join gr4oup.png")}></img><Link to='/newgrp'><button>Start Group</button></Link></div><br/>
                <div className="cc" id="srow"><img src={require("./friend icon.jpg")}></img><Link to='/Communities'><button>New Friends</button></Link></div>
                <div className="cc" ><img src={require("./welcome.png")}></img><Link to='/newgrp'><button id="w">Join weMeet</button></Link></div>
            </div>
            </div>
        )
            
    }
}

export default Body;