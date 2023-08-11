import React from "react";
import { Link } from "react-scroll";

import logo from "./assets/TheProgressionRealmLogo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
          <img src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link activeClass="active" smooth spy to="home">Home</Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="videos">Videos</Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="rules">Rules</Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="duelists">Duelists</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
