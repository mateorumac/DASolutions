import React, { useState } from "react";
import "./HomePage.css";
import {
  FaPhone,
  FaHome,
  FaCamera,
  FaClipboardList,
  FaUsers,
  FaChartLine,
  FaTag,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import zagrebImg from "../assets/homepage/zagreb.jpg";
import splitImg from "../assets/homepage/Split.jpeg";
import bracImg from "../assets/homepage/Brac.jpg";
import visImg from "../assets/homepage/Vis.jpg";

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState({});

  const handleCarousel = (cardIndex, direction) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [cardIndex]: (prev[cardIndex] || 0) + direction,
    }));
  };

  const listings = [
    {
      id: 1,
      image: "/images/listing1.jpg",
      title: "Mali Raj Komiza – Blue Apartment",
      price: "€200",
      location: "Komiza, Vis",
      type: "Apartment / Private Room",
    },
    {
      id: 2,
      image: "/images/listing2.jpg",
      title: "Mali Raj Komiza – Green Apartment",
      price: "€220",
      location: "Komiza, Vis",
      type: "Apartment / Private Room",
    },
    {
      id: 3,
      image: "/images/listing3.jpg",
      title: "Mali Raj Komiza – White Apartment",
      price: "€250",
      location: "Komiza, Vis",
      type: "Apartment / Private Room",
    },
    {
      id: 4,
      image: "/images/listing4.jpg",
      title: "Cozy Apartment on a Main Square",
      price: "€80",
      location: "Downtown, Zagreb",
      type: "Studio / Entire Home",
    },
    {
      id: 5,
      image: "/images/listing5.jpg",
      title: "Green Apartment on a Main Square",
      price: "€80",
      location: "Downtown, Zagreb",
      type: "Apartment / Entire Home",
    },
    {
      id: 6,
      image: "/images/listing6.jpg",
      title: "Purple Apartment on a Main Square",
      price: "€100",
      location: "Downtown, Zagreb",
      type: "Studio / Entire Home",
    },
  ];

  const bestPlaces = [
    {
      id: 1,
      image: zagrebImg,
      title: "Zagreb",
      listings: "9 Listings",
    },
    {
      id: 2,
      image: splitImg,
      title: "Split",
      listings: "0 Listings",
    },
    {
      id: 3,
      image: bracImg,
      title: "Brac",
      listings: "5 Listings",
    },
    {
      id: 4,
      image: visImg,
      title: "Vis",
      listings: "3 Listings",
    },
  ];

  const testimonials = [
    {
      name: "James T.",
      role: "Happy Owner",
      message:
        "Working with D&A Real Estate has been a game changer for my investments. Their transparency gives me complete confidence.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      role: "Happy Owner",
      message:
        "They handle everything from cleaning to facility management with great attention to detail. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michaela R.",
      role: "Happy Client",
      message:
        "Their expertise drives higher returns for investors. I feel supported every step of the way.",
      rating: 5,
    },
  ];

  return (
    <main className="homepage">
<section className="hero-carousel">
  {listings.map((listing, index) => (
    <article key={index} className="carousel-item">
      <img src={listing.image} alt={listing.title} />
      <div className="carousel-caption">
        <h3>{listing.title}</h3>
        <p>{listing.location}</p>
      </div>
    </article>
  ))}

  <div className="hero-search-container">
    <form className="search-form">
      <div className="search-field">
        <label htmlFor="location">Where</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter location"
        />
      </div>
      <div className="search-field">
        <label htmlFor="arrival">Arrival</label>
        <input type="date" id="arrival" name="arrival" />
      </div>
      <div className="search-field">
        <label htmlFor="departure">Departure</label>
        <input type="date" id="departure" name="departure" />
      </div>
      <div className="search-field">
        <label htmlFor="guests">Guests</label>
        <select id="guests" name="guests">
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5+">5+ Guests</option>
        </select>
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  </div>
</section>


      <section className="explore-listings section">
        <h2>Explore Our Listings</h2>
        <div className="card-container">
          {listings.map((listing, index) => (
            <article key={index} className="card">
              <div className="carousel">
                <button
                  className="carousel-btn prev"
                  onClick={() => handleCarousel(index, -1)}
                >
                  &lt;
                </button>
                <img src={listing.image} alt={listing.title} className="carousel-image" />
                <button
                  className="carousel-btn next"
                  onClick={() => handleCarousel(index, 1)}
                >
                  &gt;
                </button>
                <div className="carousel-indicators">
                  <span className="indicator active"></span>
                  <span className="indicator"></span>
                  <span className="indicator"></span>
                </div>
              </div>
              <div className="card-content">
                <h3>{listing.title}</h3>
                <p>
                  <FaTag className="icon" /> {listing.price}/night
                </p>
                <p>
                  <FaMapMarkerAlt className="icon" /> {listing.location}
                </p>
                <p>
                  <FaHome className="icon" /> {listing.type}
                </p>
                <button className="heart-btn">
                  <FaHeart className="icon-heart" />
                </button>
                <a href={`/listings/${listing.id}`} className="btn">
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="best-places section">
        <h2>Best Places To Visit</h2>
        <div className="best-places-text">
          <p>
            What is your next destination? <br />
            We know it’s not easy to choose just one location, since Croatia is equally
            as beautiful wherever you look.
          </p>
          <p>That is why we have narrowed it down to the most popular regions.</p>
        </div>
        <div className="best-places-container">
          {bestPlaces.map((place) => (
            <article
              key={place.id}
              className="best-place-card"
              style={{ backgroundImage: `url(${place.image})` }}
            >
              <div className="best-place-content">
                <h3>{place.title}</h3>
                <p>{place.listings}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-listings section">
        <h2>Featured Properties</h2>
        <div className="card-container">
          {listings.slice(0, 3).map((listing, index) => (
            <article key={index} className="card">
              <div className="carousel">
                <button
                  className="carousel-btn prev"
                  onClick={() => handleCarousel(index, -1)}
                >
                  &lt;
                </button>
                <img src={listing.image} alt={listing.title} className="carousel-image" />
                <button
                  className="carousel-btn next"
                  onClick={() => handleCarousel(index, 1)}
                >
                  &gt;
                </button>
                <div className="carousel-indicators">
                  <span className="indicator active"></span>
                  <span className="indicator"></span>
                  <span className="indicator"></span>
                </div>
              </div>
              <div className="card-content">
                <h3>{listing.title}</h3>
                <p>
                  <FaTag className="icon" /> {listing.price}/night
                </p>
                <p>
                  <FaMapMarkerAlt className="icon" /> {listing.location}
                </p>
                <p>
                  <FaHome className="icon" /> {listing.type}
                </p>
                <button className="heart-btn">
                  <FaHeart className="icon-heart" />
                </button>
                <a href={`/listings/${listing.id}`} className="btn">
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="how-it-works section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <article className="step">
            <FaPhone className="step-icon" />
            <h3>Contact Us</h3>
            <p>
              Contacting us gives you the opportunity to learn more about our company
              and experience our collaborative working culture.
            </p>
          </article>
          <article className="step">
            <FaHome className="step-icon" />
            <h3>Set Up Properties</h3>
            <p>
              We collaborate to design and optimize the space to ensure it provides the
              highest comfort and appeal for guests.
            </p>
          </article>
          <article className="step">
            <FaCamera className="step-icon" />
            <h3>Creating Professional Photos</h3>
            <p>
              Professional photos are taken to showcase its best features, attracting
              more guests and maximizing its value.
            </p>
          </article>
          <article className="step">
            <FaClipboardList className="step-icon" />
            <h3>Publish Your Listing</h3>
            <p>
              Your listing will be published on our website and distributed to major
              OTAs, including Booking.com, Airbnb, Expedia, and others.
            </p>
          </article>
          <article className="step">
            <FaUsers className="step-icon" />
            <h3>Get Reservations</h3>
            <p>
              Guests are provided, allowing you to track and monitor your initial
              reservations.
            </p>
          </article>
          <article className="step">
            <FaChartLine className="step-icon" />
            <h3>Build a Successful Business</h3>
            <p>
              You can relax and monitor reports while we ensure a high return on your
              real estate investments.
            </p>
          </article>
        </div>
      </section>

      <section className="owner-testimonials section">
        <h2>Owner Testimonials</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <p>{testimonial.message}</p>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
              <p>{'⭐'.repeat(testimonial.rating)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
