import React, { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import "./Contact.css";
import Plavi from "../assets/homepage/plavi.jpg";
import Zeleni from "../assets/homepage/zeleni.jpg";
import Bijeli from "../assets/homepage/bijeli.jpg";
import zgcosy from "../assets/homepage/zgcosy.jpg";
import zgzeleni from "../assets/homepage/zgzeleni.jpg";
import zgljub from "../assets/homepage/zgljub.jpg";

const ContactPage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const listings = [
    {
      id: 1,
      image: Plavi,
      title: "Mali Raj Komiza – Blue Apartment",
      price: "€200",
      location: "Komiza, Vis",
      type: "Apartment / Private Room",
    },
    {
      id: 2,
      image: Zeleni,
      title: "Mali Raj Komiza – Green Apartment",
      price: "€220",
      location: "Komiza, Vis",
      type: "Apartment / Private Room",
    },
    {
      id: 3,
      image: Bijeli,
      title: "Mali Raj Komiza – White Apartment",
      price: "€250",
      location: "Komiza, Vis",
      type: "Apartment / Private Room",
    },
    {
      id: 4,
      image: zgcosy,
      title: "Cozy Apartment on a Main Square",
      price: "€80",
      location: "Downtown, Zagreb",
      type: "Studio / Entire Home",
    },
    {
      id: 5,
      image: zgzeleni,
      title: "Green Apartment on a Main Square",
      price: "€80",
      location: "Downtown, Zagreb",
      type: "Apartment / Entire Home",
    },
    {
      id: 6,
      image: zgljub,
      title: "Purple Apartment on a Main Square",
      price: "€100",
      location: "Downtown, Zagreb",
      type: "Studio / Entire Home",
    },
  ];

  const handleCarousel = (direction) => {
    setCarouselIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + listings.length) % listings.length
        : (prevIndex + 1) % listings.length
    );
  };

  return (
    <div className="contact-page">
      <HeroCarousel
        listings={listings}
        currentIndex={carouselIndex}
        onNavigate={handleCarousel}
      />

      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              Contact us for a complimentary consultation or any inquiries you
              might have. We're here to help you get started.
            </p>
            <ul>
              <li>
                <strong>Address:</strong> 25 Gundulićeva Ulica, 10000 Zagreb,
                Croatia
              </li>
              <li>
                <strong>Phone Number:</strong> +385 1 388 5005
              </li>
              <li>
                <strong>WhatsApp:</strong> +385 99 7531 470
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@danda.hr">info@danda.hr</a>
              </li>
            </ul>
          </div>

          <form className="contact-form">
            <h2>Contact Us</h2>
            <p>Fill out the form below for a complimentary consultation.</p>
            <div className="form-grid">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Address" />
              <input type="date" placeholder="Check-in" />
              <input type="date" placeholder="Check-out" />
              <textarea placeholder="Message" rows="3"></textarea>
            </div>
            <div className="form-footer">
              <label>
                <input type="checkbox" /> I consent to the GDPR Terms
              </label>
              <button type="submit" className="submit-btn">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
