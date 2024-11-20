import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          D&A Solutions
        </a>
        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>
        <nav className="secondary-nav">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
          <a href="/submit-property" className="highlighted">
            Submit Property
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
