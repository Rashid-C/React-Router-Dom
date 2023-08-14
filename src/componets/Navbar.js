import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MediCare</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
