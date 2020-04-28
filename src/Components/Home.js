import React from "react";
import Nav from "./Nav";
import "../stylesheets/Global.scss";
import "../stylesheets/Nav.scss";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="title lines">Web Development </div>
    </div>
  );
}
