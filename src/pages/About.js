import React, { useEffect, useState } from "react";
import "./About.css";

// Animated Stat Item Component
const StatItem = ({ label, end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-item">
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Intro Section */}
      <section className="intro-section">
        <h1>About D&A Real Estate</h1>
        <p>
          D&A Real Estate is proud to offer assistance with getting the highest
          level of service in managing your apartments.
        </p>
      </section>
      <section className="about-hero">
        <div className="about-hero-images">
          <img src="/assets/apartment1.jpg" alt="Apartment 1" />
          <div className="hero-sub-images">
            <img src="/assets/apartment2.jpg" alt="Apartment 2" />
            <img src="/assets/apartment3.jpg" alt="Apartment 3" />
          </div>
        </div>
        <div className="about-description">
          <h2>What is D&A Real Estate and where do these listings come from?</h2>
          <p>
            You can choose from tens of listings managed by our company in
            Croatia. D&A Real Estate is a property management and long-term
            rental company based in Zagreb, Croatia. We have a lot of
            experience in short-term rentals, long-term rentals, and sales in
            Zagreb, on Croatian Coast, and other European locations.
          </p>
          <p>
            We pride ourselves in providing a good, trustworthy service at a
            reasonable price, so you can relax and know you're in safe hands!
          </p>
          <button className="submit-btn">Search our listings</button>
        </div>
      </section>
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <StatItem label="Bookings" end={100000} />
          <StatItem label="Team Members" end={15} />
          <StatItem label="Rental Offices" end={3} />
          <StatItem label="Business Years" end={6} />
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <h2>How we help you get into a short-term rental business</h2>
        <div className="help-content">
          <div className="help-text">
            <h3>Prepare the perfect property</h3>
            <p>
            Consult us to find perfect real estate or to refurbish existing
            real estate and prepare it for guests.
            </p>
          </div>
          <div className="help-text">
            <h3>Legal compliance</h3>
            <p>
            We offer extensive legal consulting, accounting consulting, and
            compliance with all the local laws and regulations.
            </p>
          </div>
          <div className="help-text">
            <h3>Book your home</h3>
            <p>
            Kick back, follow statistics and look up to your great return of
            investments.
            </p>
          </div>
          <div className="service-image">
            <img src="/assets/apartment4.jpg" alt="Service" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why choose our guidance in short-term rentals</h2>
        <p>
          Find out why we offer you the greatest value for money.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Maximize your profits</h3>
            <p>
            Using top-of-the-notch software solutions, and carefully
              monitoring all the expenses we maximize profits for all of our
              clients.
            </p>
          </div>
          <div className="feature-card">
            <h3>Spotless cleaning</h3>
            <p>
            With our huge experience in cleaning, we make sure to always
            choose reliable and hard-working housekeepers!
            </p>
          </div>
          <div className="feature-card">
            <h3>Reliable payout management</h3>
            <p>
            D&A Real Estate manages all payouts on your behalf, ensuring
              consistent and timely payments without any concerns about delayed
              client transactions.
            </p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support hours for customers</h3>
            <p>
              We offer you 24/7 support to address all the guest needs.
            </p>
          </div>
          <div className="feature-card">
            <h3>Facility management</h3>
            <p>
            D&A Real Estate provides exceptional facility management through
            a dedicated team of in-house professionals and trusted partners.
            </p>
          </div>
          <div className="feature-card">
            <h3>Business culture</h3>
            <p>
            Our commitment to transparency and strong business culture fosters
              a positive experience and builds lasting relationships with our
              clients.
            </p>
          </div>
        </div>
      </section>

     {/* Contact Section */}
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

export default AboutPage;
