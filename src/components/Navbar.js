import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const toggleDropdown = () => {
    setLanguageDropdown(!languageDropdown);
  };

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
          <div className="language-dropdown">
            <button
              className="language-button"
              onClick={toggleDropdown}
              aria-expanded={languageDropdown}
            >
              <FaGlobe className="globe-icon" />
            </button>
            {languageDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#HRV">HRV</a>
                </li>
                <li>
                  <a href="#ENG">ENG</a>
                </li>
                <li>
                  <a href="#DEU">DEU</a>
                </li>
                <li>
                  <a href="#ITA">ITA</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
