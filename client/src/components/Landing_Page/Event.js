import React, {Component} from "react";
import { Link } from "react-router-dom";
import Events from "../Events/Events_body";
import Footer from '../Footer/footer'

class Event extends Component{
    render(){
        return(
            <div className="Event">
                <div id="header">
                <h1>
                       <span>ALWAYS YOU</span>
                       <div class="message">
                       <div class="word1">EXPLORE</div>
                       <div class="word2">SHARE</div>
                       <div class="word3">BE PART OF</div>
                       </div>
                </h1>
                <div className="ButtContainer">
            <input type="text" placeholder="Search.."/>
            <Link to='/newevent'><button id="plus">Add</button></Link>
              <button id="SignIn">SIGN IN</button>
              <button id="SignUp">SIGN UP</button>
              
            </div>
                </div>
            
                <Events/>
                <Footer/>
            </div>
        )
    }
}

export default Event;