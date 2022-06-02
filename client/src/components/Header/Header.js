
import React, { Component} from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Header.css'
import event1 from './event1.jpg'
import event2 from './event2.jpg';
import event3 from './event3.jpg';
import event4 from './event4.jpg';
import event5 from './event5.jpg';
import event6 from './event6.jpg';

class Header extends Component {
  render() {
    
    return (
       <div> 
      <nav>
        <ul>
          <li>
            <p id='logo'><span id='We'>We</span>Meet</p>
          </li>
          <li>
            <a id="h" href="/">Home</a>
          </li>
          <li>
            <a id="h" href="/">Events</a>
          </li>
          <li>
            <a id="h" href="/">Communities</a>
          </li>
          <li>
            <a id="h" href="/">Whey WeMeet?</a>
          </li>
          <li>
            <div className="ButtContainer">
              <button id="SignIn">SIGN IN</button>
              <button id="SignUp">SIGN UP</button>
            </div>
          </li>
        </ul>
      </nav>
      <AliceCarousel mouseTracking
        disableButtonsControls
        disableSlideInfo
        controlsStrategy="alternate">
      <img src={event1}  className="sliderimg" alt="" />
      <img src={event2}  className="sliderimg" alt=""/>
      <img src={event3}  className="sliderimg" alt=""/>
      <img src={event4} className="sliderimg" alt=""/>
      <img src={event5} className="sliderimg" alt=""/>
      <img src={event6} className="sliderimg" alt=""/>
</AliceCarousel>

<h1>
        <span>E</span>
        <span>X</span>
        <span>P</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
        <span>-</span>
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>N</span>
        <span>T</span>
        <span>S</span>
        <span>-</span>
        <span>E</span>
        <span>A</span>
        <span>S</span>
        <span>Y</span>
        <span>-</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>-</span>
        <span>Q</span>
        <span>U</span>
        <span>I</span>
        <span>C</span>
        <span>K</span>
    </h1>
</div>

      
    );
  }
}
export default Header;