import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About D&A Real Estate</h4>
            <p>
              D&A Real Estate is committed to delivering a high level of
              expertise, customer service, and attention to detail to the
              market of accommodation booking.
            </p>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Sokolska Ulica 35</p>
            <p>+385 1 388 5005</p>
            <p>info@daanda.hr</p>
            <p>D&A Real Estate</p>
          </div>
          <div className="footer-column">
            <h4>Social Links</h4>
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
              <li>Mali Raj Komiza – Blue Apartment (€200/night)</li>
              <li>Mali Raj Komiza – Green Apartment (€220/night)</li>
              <li>Mali Raj Komiza – White Apartment (€250/night)</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="currency-selector">
            <label htmlFor="currency">Change Currency:</label>
            <select id="currency" name="currency">
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