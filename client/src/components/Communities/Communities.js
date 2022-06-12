import React, { Component } from "react";
import Footer from "../Footer/footer";


class Communities extends Component {
  render() {
    return (
      <div className="Communities">
<div className="above">
<nav>
                    <h1>WE</h1><h2>Meet</h2>
                    <input type="search" placeholder='Search for keywords'/>
                    <input type="search" placeholder='Neighborhood or city '/>
                    <img  src={require('../exploreEvent/search icon.png')}/>
                    <div>
                        <a>Start New Group</a>
                        <button id="SignIn">SIGN IN</button>
                        <button id="SignUp">SIGN UP</button>
                    </div>
                </nav><br/><br/>
                <hr/>
                <header>
                  <button>Events</button>
                  <button>Groups</button>
                  <p>Suggested Groups near Rabat</p>
                </header><br/>
                <hr/>
                </div>
                <div className="content">
                  <section id="one">
                    <img src={require("./coding group.png")}/>
                    <p>
                    <a href="./randomG">New Group</a><br/>
                    <h1>White Hackers Group</h1>
                    <i>Rabat</i>
                    <h4>Here we are gathering to perform coding tips and apply multiple tasks Lorem Ipsum..... </h4><br/><br/>
                    16 Members Public
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./football activity.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Play_week Group</h1>
                    <i>Casablanca</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    160 Members Public
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./how history affects politics.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Novel Readers Group</h1>
                    <i>Mohammedia</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    1243 Members Public
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./batman.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Movie_Night Group</h1>
                    <i>Settat</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    145 Members Public
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./one piece event.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Lorem Ipsum Group</h1>
                    <i>City</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    157 Members Public
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./batman.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Lore Ipsum Group</h1>
                    <i>City</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    208 Members Private
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./how history affects politics.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Lorem Ipsum Group</h1>
                    <i>City</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    346 Members Private
                    </p>
                  </section><br/>
                  <section id="one">
                    <img src={require("./batman.jpg")}/>
                    <p>
                    <a>New Group</a><br/>
                    <h1>Lorem Ipsum Group</h1>
                    <i>City</i>
                    <h4>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem... </h4><br/><br/>
                    346 Members Public
                    </p>
                  </section>
                </div>
          <Footer/>
      </div>
    );
  }
}

export default Communities;
