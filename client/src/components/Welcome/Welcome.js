import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="W">
        <p className="pa">Welcome mr Muhammed</p>
        <button className="Explore">Explore Events</button>
        <br />
        <button className="Join">Join Our Community</button>
        <br />
        <button className="Share">Share Events</button>
      </div>
    );
  }
}
export default Welcome;
