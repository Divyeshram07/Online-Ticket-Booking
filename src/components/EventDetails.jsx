import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "./EventDetails.css";
import { FaFacebook, FaTwitter } from "react-icons/fa"; // Import social icons

const events = [
  { 
    id: 1, 
    title: "Alan Walker India Tour", 
    category: "Music", 
    date: "Sun, 18 April", 
    venue: "Gachibowli Stadium", 
    image: "aln.jpg", 
    price: "₹1000", 
    description: "Hey India, get set 'cause Alan Walker's tour is about to hit you like a storm this April!",
    artist: { name: "Alan Walker", image: "aln2.jpg" } 
  },
  { 
    id: 2, 
    title: "SHRUTI HAASAN live at Odeum by PRISM", 
    category: "Concerts", 
    date: "Fri, 28 Mar", 
    venue: "Odeum by PRISM", 
    image: "sh1.jpg", 
    price: "₹1200", 
    description: "Experience a live music performance by Shruthi Hasan.",
    artist: { name: "Shruthi Hasan", image: "sh2.jpg" }
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <h2 className="not-found">Event Not Found</h2>;
  }

  return (
    <div className="event-details-container">
      {/* Event Banner */}
      <div className="event-banner">
        <img src={`/images/${event.image}`} alt={event.title} className="event-image" />
      </div>

      {/* Event Info */}
      <div className="event-info">
        <h1 className="event-title">{event.title}</h1>
        <p className="event-category">{event.category} | {event.date}</p>
        <p className="event-venue">📍 {event.venue}</p>
        <p className="event-price">💰 {event.price} onwards</p>
        <p className="event-description">{event.description}</p>

        {/* Book Now Button */}
        <button 
          className="book-btn" 
          onClick={() => navigate(`/ticket-selection/${id}`)} // Navigate to Ticket Selection page
        >
          BOOK NOW
        </button>
      </div>

      {/* Artist Info */}
      <div className="artist-info">
        <h3>🎤 Artist</h3>
        <div className="artist-container">
          <img src={`/images/${event.artist.image}`} alt={event.artist.name} className="artist-image" />
          <p>{event.artist.name}</p>
        </div>
      </div>

      {/* Share Section */}
      <div className="share-options">
        <h3>🔗 Share this event</h3>
        <div className="social-icons">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon facebook" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Check out this event!`} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon twitter" />
          </a>
        </div>
      </div>

      {/* Event Location */}
      <div className="event-location">
        <h3>📍 Location</h3>
        <iframe
  src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
  title="Map showing Hyderabad location"
  className="event-map"
  allowFullScreen
  loading="lazy"
></iframe>

      </div>
    </div>
  );
};

export default EventDetails;
