import React from "react";
import "./HomePage.css";

const HomePage = () => {
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
      image: "/images/zagreb.jpg",
      title: "Zagreb",
      listings: "6 Listings",
    },
    {
      id: 2,
      image: "/images/split.jpg",
      title: "Split",
      listings: "5 Listings",
    },
    {
      id: 3,
      image: "/images/brac.jpg",
      title: "Brac",
      listings: "3 Listings",
    },
    {
      id: 4,
      image: "/images/vis.jpg",
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
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-carousel">
        {listings.map((listing, index) => (
          <div key={index} className="carousel-item">
            <img src={listing.image} alt={listing.title} />
            <div className="carousel-caption">
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Listings Section */}
      <div className="explore-listings section">
        <h2>Explore Our Listings</h2>
        <div className="card-container">
          {listings.map((listing, index) => (
            <div key={index} className="card">
              <img src={listing.image} alt={listing.title} />
              <div className="card-content">
                <h3>{listing.title}</h3>
                <p>{listing.price}/night</p>
                <p>{listing.location}</p>
                <p>{listing.type}</p>
                <a href={`/listings/${listing.id}`} className="btn">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Places to Visit Section */}
      <div className="best-places section">
        <h2>Best Places To Visit</h2>
        <div className="card-container">
          {bestPlaces.map((place) => (
            <div key={place.id} className="card">
              <img src={place.image} alt={place.title} />
              <div className="card-content">
                <h3>{place.title}</h3>
                <p>{place.listings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="featured-listings section">
        <h2>Featured Properties</h2>
        <div className="card-container">
          {listings.slice(0, 3).map((listing, index) => (
            <div key={index} className="card">
              <img src={listing.image} alt={listing.title} />
              <div className="card-content">
                <h3>{listing.title}</h3>
                <p>{listing.price}/night</p>
                <p>{listing.location}</p>
                <p>{listing.type}</p>
                <a href={`/listings/${listing.id}`} className="btn">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <h3>Contact Us</h3>
            <p>
              Contacting us gives you the opportunity to learn more about our
              company and experience our collaborative working culture.
            </p>
          </div>
          <div className="step">
            <h3>Set Up Properties</h3>
            <p>
              We collaborate to design and optimize the space to ensure it
              provides the highest comfort and appeal for guests.
            </p>
          </div>
          <div className="step">
            <h3>Creating Professional Photos</h3>
            <p>
              Professional photos are taken to showcase its best features,
              attracting more guests and maximizing its value.
            </p>
          </div>
          <div className="step">
            <h3>Publish Your Listing</h3>
            <p>
              Your listing will be published on our website and distributed to
              major OTAs, including Booking.com, Airbnb, Expedia, and others.
            </p>
          </div>
          <div className="step">
            <h3>Get Reservations</h3>
            <p>
              Guests are provided, allowing you to track and monitor your
              initial reservations.
            </p>
          </div>
          <div className="step">
            <h3>Build a Successful Business</h3>
            <p>
              You can relax and monitor reports while we ensure a high return
              on your real estate investments.
            </p>
          </div>
        </div>
      </div>

      {/* Owner Testimonials Section */}
      <div className="owner-testimonials section">
        <h2>Owner Testimonials</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>{testimonial.message}</p>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
              <p>{'⭐'.repeat(testimonial.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
