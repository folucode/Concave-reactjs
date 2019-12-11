import React from "react";
import "./NavBar.css";

const NavBar = (props) => (
  <header className="navbar">
    <button className="btn-toggle" onClick={props.click}>
      <div className="btn-toggle__line"></div>
      <div className="btn-toggle__line"></div>
      <div className="btn-toggle__line"></div>
    </button>
  </header>
);

export default NavBar;
