import React from "react";
import "./NavBar.css";

const NavBar = (props) => (
  <header className="navbar" onClick={props.click}>
    <button className="btn-toggle">
      <div className="btn-toggle__line"></div>
      <div className="btn-toggle__line"></div>
      <div className="btn-toggle__line"></div>
    </button>
  </header>
);

export default NavBar;
