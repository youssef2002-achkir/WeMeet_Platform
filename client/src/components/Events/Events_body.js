import React, { Component } from "react";
import Event from '../Landing_Page/Event'
import "./how history affects politics.jpg"

class Events extends Component {
  render() {

    const w3_open = () => {
      document.getElementById("mySidebar").style.display = "block";
    }
//cinma
    const w3_close = () => {
      document.getElementById("mySidebar").style.display = "none";
    }

    
    
    return (
      
      
      <div className="Events">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <div class="w3-sidebar w3-bar-block w3-border-right"  id="mySidebar">
         <button className="w3-bar-item w3-large" onClick={w3_close} >Close&times; </button><br/>
          <button class="w3-button w3-teal">Cinema</button><br/><br/>
          <button class="w3-button w3-teal" >Sports</button><br/><br/>
          <button class="w3-button w3-teal" >Politics</button><br/><br/>
          <button class="w3-button w3-teal ">Technology</button><br/><br/>
          <button class="w3-button w3-teal " >Culture</button><br/><br/>
          <button class="w3-button w3-teal " >Competition</button><br/><br/>
          
          </div>
          <div class="w3-teal">
               <button class="w3-button w3-teal w3-xlarge" onClick={w3_open}>☰</button>
          </div>
<br/>
<div className="ev">
        <div className="Cinema">
              <p id="title">Cinema</p><br/>
              <div className="Images">
              <section>
              <img id="c" src={require("./Tom cinema activity.jpg")} alt="c0" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum...</h2><a href="./Cinema_E">more..</a>
              </div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              
              </section>
              <section>
              <img id="c" src={require("./one piece event.jpg")} alt="c1" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a >more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="c" src={require("./joris.jpg")} alt="c2" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="c" src={require("./spiderMen2022.jpeg")} alt="c3" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="c" src={require("./batman.jpg")} alt="c4" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              </div>
        </div><br/>

        
        <div className="Sports">
              <p id="title">Sports</p><br/>
              <div className="Images">
              <section>
              <img id="s" src={require("./bicycle event.jpg")} alt="s0" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="s" src={require("./Freeski Event.jpg")} alt="s1" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="s" src={require("./football event.jpg")} alt="s2" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="s" src={require("./Motocross event.jpg")} alt="s3" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="s" src={require("./Tennis Event.jpg")} alt="s4" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              </div>
        </div>

<br/>
        <div className="Politics">
              <p id="title">Politics</p><br/>
              <div className="Images">
              <section>
              <img id="p"src={require("./how history affects politics.jpg")}alt="p0"/><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="p" src={require("./political parties.jpg")} alt="p1" /> <p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="p" src={require("./paris peace politics.jpg")} alt="p2" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="p" src={require("./months after polls.jpg")} alt="p3" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              <section>
              <img id="p" src={require("./usa.jpg")} alt="p4" /><p id="date">Wednesday, June 15, 2022</p>
              <div className="desc"><h2>Lorem Ipsum</h2><a>more..</a></div>
              <div id="group">Lorem Ipsum <a id="gg">Group</a></div>
              </section>
              </div>
        </div>
        </div>
      
            
      </div>
    );
  }
}

export default Events;
