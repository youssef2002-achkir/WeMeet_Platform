import React, { Component } from "react";
import "./ExploreEvent.css";

class ExploreEvent extends Component {
  render() {
    return (
      <div>
        <p id="Ih">Cinema</p>
        <ul className="FirstCategorie">
          <li>
            <a id="Cinema" href="www.google.com">
              <img id="c" src={require("./Tom cinema activity.jpg")} alt="c0" />
            </a>
          </li>
          <li>
            <a id="Cinema" href="#">
              <img id="c" src={require("./one piece event.jpg")} alt="c1" />
            </a>
          </li>
          <li>
            <a id="Cinema" href="/">
              <img id="c" src={require("./joris.jpg")} alt="c2" />
            </a>
          </li>
          <li>
            <a id="Cinema" href="#">
              <img id="c" src={require("./spiderMen2022.jpeg")} alt="c3" />
            </a>
          </li>
          <li>
            <a id="Cinema" href="#">
              <img id="c" src={require("./batman.jpg")} alt="c4" />
            </a>
          </li>
        </ul>
        <p id="Is">Sports</p>
        <ul className="SecondCategorie">
          <li>
            <a id="Sports" href="www.google.com">
              <img id="s" src={require("./bicycle event.jpg")} alt="s0" />
            </a>
          </li>
          <li>
            <a id="Sports" href="#">
              <img id="s" src={require("./Freeski Event.jpg")} alt="s1" />
            </a>
          </li>
          <li>
            <a id="Sports" href="/">
              <img id="s" src={require("./football event.jpg")} alt="s2" />
            </a>
          </li>
          <li>
            <a id="Sports" href="#">
              <img id="s" src={require("./Motocross event.jpg")} alt="s3" />
            </a>
          </li>
          <li>
            <a id="Sports" href="#">
              <img id="s" src={require("./Tennis Event.jpg")} alt="s4" />
            </a>
          </li>
        </ul>
        <p id="Ip">Politics</p>
        <ul className="ThirdCategorie">
          <li>
            <a id="Politics" href="www.google.com">
              <img
                id="p"
                src={require("./how history affects politics.jpg")}
                alt="p0"
              />
            </a>
          </li>
          <li>
            <a id="Politics" href="#">
              <img id="p" src={require("./political parties.jpg")} alt="p1" />
            </a>
          </li>
          <li>
            <a id="Politics" href="/">
              <img
                id="p"
                src={require("./paris peace politics.jpg")}
                alt="p2"
              />
            </a>
          </li>
          <li>
            <a id="Cinema" href="#">
              <img id="p" src={require("./months after polls.jpg")} alt="p3" />
            </a>
          </li>
          <li>
            <a id="Politics" href="#">
              <img id="p" src={require("./usa.jpg")} alt="p4" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ExploreEvent;
