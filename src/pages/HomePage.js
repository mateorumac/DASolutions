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
  FaStar, 
  FaClipboardCheck, 
  FaShieldAlt
} from "react-icons/fa";
import zagrebImg from "../assets/homepage/zagreb.webp";
import splitImg from "../assets/homepage/Split.webp";
import bracImg from "../assets/homepage/Brac.webp";
import visImg from "../assets/homepage/Vis.webp";
import coastImage from "../assets/homepage/coast.jpg";
import profile1 from "../assets/testimonials/james.jpg"
import profile2 from "../assets/testimonials/sarah.jpg"
import profile3 from "../assets/testimonials/michaela.jpg"

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
      image: profile1,
    },
    {
      name: "Sarah L.",
      role: "Happy Owner",
      message:
        "They handle everything from cleaning to facility management with great attention to detail. Highly recommended!",
      rating: 5,
      image: profile2,
    },
    {
      name: "Michaela R.",
      role: "Happy Client",
      message:
        "Their expertise drives higher returns for investors. I feel supported every step of the way.",
      rating: 5,
      image: profile3,
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
        <h2>Explore Our <span>Listings</span></h2>
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
      <h2>
        Best <span>Places</span> To Visit
      </h2>
        <div className="best-places-text">
          <p>
            What is your next destination? <br />
            We know it’s not easy to choose just one location, since Croatia is equally
            as beautiful wherever you look.
          
          That is why we have narrowed it down to the most popular regions.</p>
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
        <h2>Featured <span>Properties</span></h2>
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
      
      <section class="headline-section">
  <h2 class="hero-headline">
    Experience the <span>Best</span> with Us
  </h2>
  <p className="opis">Your dream vacation starts here.</p>
</section>

<section class="secondary-hero">
  <div class="hero-content">
    <h1>Enjoy the Adriatic Coast</h1>
    <p>Rich properties, rave reviews, and secure stays for a perfect experience.</p>
    <div class="features">
      <div class="feature">
        <FaStar className="feature-icon" />
        <h3>The Highest Quality Standards</h3>
        <p>We focus on rich and high-quality properties, delivering the best across the Adriatic.</p>
      </div>
      <div class="feature">
        <FaClipboardCheck className="feature-icon" />
        <h3>Rave Reviews</h3>
        <p>Discover properties highly rated by satisfied guests, with scores that speak for themselves.</p>
      </div>
      <div class="feature">
        <FaShieldAlt className="feature-icon" />
        <h3>Secure Stays</h3>
        <p>Enjoy peace of mind with comprehensive guest and property insurance included in every stay.</p>
      </div>
    </div>
    <div class="footer-question">
      <span>Have you already chosen your accommodation?</span>
    </div>
  </div>
</section>
<section className="how-it-works section">
  <div className="how-it-works-header">
    <h2>
      <span>Rent</span> with Us
    </h2>
  </div>

  <div className="how-it-works-content">
    <div className="how-it-works-subheader">
      <h3>How It Works</h3>
      <p>
        Learn how our streamlined process ensures you get the most out of your
        real estate with ease and professionalism.
      </p>
    </div>

    <div className="steps-container">
      <article className="step">
        <FaPhone className="step-icon" />
        <h3>Contact Us</h3>
        <p>
          Contacting us gives you the opportunity to learn more about our
          company and experience our collaborative working culture.
        </p>
      </article>
      <article className="step">
        <FaHome className="step-icon" />
        <h3>Set Up Properties</h3>
        <p>
          We collaborate to design and optimize the space to ensure it provides
          the highest comfort and appeal for guests.
        </p>
      </article>
      <article className="step">
        <FaCamera className="step-icon" />
        <h3>Creating Professional Photos</h3>
        <p>
          Professional photos are taken to showcase its best features,
          attracting more guests and maximizing its value.
        </p>
      </article>
      <article className="step">
        <FaClipboardList className="step-icon" />
        <h3>Publish Your Listing</h3>
        <p>
          Your listing will be published on our website and distributed to
          major OTAs, including Booking.com, Airbnb, Expedia, and others.
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
          You can relax and monitor reports while we ensure a high return on
          your real estate investments.
        </p>
      </article>
    </div>
  </div>
</section>
<section className="owner-testimonials section">
  <h2>Owner <span>Testimonials</span></h2>
  <div className="testimonial-container">
    {testimonials.map((testimonial, index) => (
      <article key={index} className="testimonial-card">
        <div className="profile">
          <img src={testimonial.image} alt={testimonial.name} />
          <div className="profile-details">
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
          </div>
        </div>
        <div className="rating">{'⭐'.repeat(testimonial.rating)}</div>
        <p className="comment">{testimonial.message}</p>
      </article>
    ))}
  </div>
</section>

      <section
  className="cta-hero"
  style={{
    background: `url(${coastImage}) no-repeat center center / cover`,
  }}
>
  <div className="cta-hero-content">
    <h1>Rent your real estate with us</h1>
    <p>
      Partner with us to maximize your rental income and leave all the hard work
      to our professional team.
    </p>
    <button className="cta-button">Join Us</button>
  </div>
</section>
    </main>
  );
};

export default HomePage;
