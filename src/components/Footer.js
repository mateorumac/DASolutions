import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [currency, setCurrency] = useState("EUR");

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About D&A Real Estate</h4>
            <p>
              D&A Real Estate is committed to delivering a high level of expertise, customer service, and attention to detail in the market of accommodation booking.
            </p>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p><FaMapMarkerAlt className="footer-icon" /> Sokolska Ulica 35</p>
            <p><FaPhoneAlt className="footer-icon" /> +385 1 388 5005</p>
            <p><FaEnvelope className="footer-icon" /> info@daanda.hr</p>
          </div>
          <div className="footer-column">
            <h4>Connect with Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" /> Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" /> Twitter
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Featured Listings</h4>
            <ul className="featured-listings">
              <li>Mali Raj Komiza – Blue Apartment ({currency === "EUR" ? "€200/night" : currency === "USD" ? "$220/night" : "£175/night"})</li>
              <li>Mali Raj Komiza – Green Apartment ({currency === "EUR" ? "€220/night" : currency === "USD" ? "$240/night" : "£192/night"})</li>
              <li>Mali Raj Komiza – White Apartment ({currency === "EUR" ? "€250/night" : currency === "USD" ? "$270/night" : "£210/night"})</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="currency-selector">
            <label htmlFor="currency">Change Currency:</label>
            <select id="currency" name="currency" value={currency} onChange={handleCurrencyChange}>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <p>© 2024 D&A Real Estate | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
