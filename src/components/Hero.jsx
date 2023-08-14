import React from "react";
import Standings from "./Standings";
import Latest from "./Latest";
import News from "./News";

import logo from "../assets/TheProgressionRealmLogo.png"
function Hero() {
  return (
    <div className="hero-container">
      {/* <img className="hero-logo" src={logo} alt="logo" /> */}
      <center className="site-title">
        <h1>The Progression Realm</h1>
        <p>Streaming Every Sunday @ 9:30pm EST!</p>
      </center>
      <div className="row">
        <Standings />
        <Latest />
        <News />
        
      </div>
    </div>
  );
}

export default Hero;
