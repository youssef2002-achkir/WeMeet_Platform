
import React, { Component} from "react";



class Header extends Component {
  
  render() {
    return (
       <div className="Header">
      <nav>
        <ul>
          <li>
          
            <p id='logo'><span id='We'>We</span>Meet</p>
          </li>
          <li>
            <a id="h" href="/">Home</a>
            
          </li>
          <li>
            <a id="h" href="/Events_b">Events</a>
          </li>
          <li>
            <a id="h" href="/Communities">Communities</a>
          </li>
          <li>
            <a id="h" href="/Login">Whey WeMeet?</a>
          </li>
          <li>
            <div className="ButtContainer">
              <a id="SignIn" href="/Login">SIGN IN</a>
              <a id="SignUp" href="/Signup">SIGN UP</a>
            </div>
          </li>
        </ul>
      </nav>    
</div>

      
    );
  }
}
export default Header;