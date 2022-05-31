import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <p id='logo'><span id='We'>We</span>Meet</p>
          </li>
          <li>
            <a id="h">Home</a>
          </li>
          <li>
            <a id="h">Events</a>
          </li>
          <li>
            <a id="h">Communities</a>
          </li>
          <li>
            <a id="h">Whey WeMeet?</a>
          </li>
          <li>
            <div className="ButtContainer">
              <button id="SignIn">SIGN IN</button>
              <button id="SignUp">SIGN UP</button>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Header;
