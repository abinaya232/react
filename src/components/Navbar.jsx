import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <header className="header">
      <h1>My Landing Page</h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
