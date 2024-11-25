import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setLanguageDropdown((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setLanguageDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left Column */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
            <a href="/" className="navbar-brand">D&A Solutions</a>
          </div>
        </div>

        {/* Center Column */}
        <div className="navbar-center">
          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        {/* Right Column */}
        <div className="navbar-right">
          <nav className="secondary-nav">
            <a href="/login">Login</a>
            <a href="/submit-property" className="highlighted">Submit Property</a>
            <div className="language-dropdown" ref={dropdownRef}>
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
                    <a href="#HRV" onClick={closeDropdown}>
                      <img
                        src="https://flagcdn.com/w40/hr.png"
                        alt="Croatian Flag"
                        className="flag-icon"
                      />
                      HRV
                    </a>
                  </li>
                  <li>
                    <a href="#ENG" onClick={closeDropdown}>
                      <img
                        src="https://flagcdn.com/w40/gb.png"
                        alt="UK Flag"
                        className="flag-icon"
                      />
                      ENG
                    </a>
                  </li>
                  <li>
                    <a href="#DEU" onClick={closeDropdown}>
                      <img
                        src="https://flagcdn.com/w40/de.png"
                        alt="German Flag"
                        className="flag-icon"
                      />
                      DEU
                    </a>
                  </li>
                  <li>
                    <a href="#ITA" onClick={closeDropdown}>
                      <img
                        src="https://flagcdn.com/w40/it.png"
                        alt="Italian Flag"
                        className="flag-icon"
                      />
                      ITA
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
