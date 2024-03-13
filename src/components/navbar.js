import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mb-8">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
