import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navLink">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/countries">Countries</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default Navbar;
