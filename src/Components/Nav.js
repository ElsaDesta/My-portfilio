import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.scss";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="nav--title">Elsabeth Desta</div>
        <div className="nav--items">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
