import React, { Component } from "react";
import "./Kommunity.css";

class Kommunity extends Component {
  render() {
    return (
      <div>
        <ul className="Groups">
          <li>
            <button id="Fgb">Join</button>
            <p id="Fg">
              <span id="Sp1">EliteCoders</span>
              <br /> 4443members
            </p>
            <a id="Code" href="www.google.com">
              <img id="Fgi" src={require("./coding group.png")} alt="g0" />
            </a>
          </li>
          <li>
            <button id="Sgb">Join</button>
            <p id="Sg">
              <span id="Sp2">Otakos</span>
              <br /> 1223members
            </p>
            <a id="Anime" href="#">
              <img id="Sgi" src={require("./one piece event.jpg")} alt="g1" />
            </a>
          </li>
          <li>
            <button id="Tgb">Join</button>
            <p id="Tg">
              <span id="Sp3">MovieNight</span>
              <br />
              2356members
            </p>
            <a id="Movie" href="/">
              <img id="Tgi" src={require("./batman.jpg")} alt="g2" />
            </a>
          </li>
        </ul>
        <ul className="Groups">
          <li>
            <button id="Fgb2">Join</button>
            <p id="Fg2">
              <span id="Sp12">Football</span>
              <br /> 4443members
            </p>
            <a id="Foot" href="www.google.com">
              <img
                id="Fgi2"
                src={require("./football activity.jpg")}
                alt="g02"
              />
            </a>
          </li>
          <li>
            <button id="Sgb2">Join</button>
            <p id="Sg2">
              <span id="Sp22">Daily Tennis</span>
              <br /> 1223members
            </p>
            <a id="Tennis" href="#">
              <img id="Sgi2" src={require("./Tennis Event.jpg")} alt="g12" />
            </a>
          </li>
          <li>
            <button id="Tgb2">Join</button>
            <p id="Tg2">
              <span id="Sp32">Conferences</span>
              <br />
              2356members
            </p>
            <a id="Conference" href="/">
              <img
                id="Tgi2"
                src={require("./how history affects politics.jpg")}
                alt="g22"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Kommunity;
