import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";

const events = [
  { id: 1, title: "Alan Walker India Tour", category: "Music", date: "Sun, 18 Apr", venue: "Gachibowli Stadium", image: "aln1.jpg", price: "₹1000" },
  { id: 2, title: "SHRUTI HAASAN live at Odeum by PRISM", category: "Concerts", date: "Fri, 28 Mar", venue: "Odeum By Prism", image: "sh.jpg", price: "₹1200" },
  { id: 3, title: "Humrahi - An Evening of Ghazals", category: "Music Show", date: "Fri, 10 Mar", venue: "Shilpakala Vedika", image: "leo.jpg", price: "₹1500" },
  { id: 4, title: "Gaurav Kapoor LIVE", category: "Stand-up Comedy", date: "Sun, 20 Apr", venue: "Heart Cup Coffee", image: "pushpa2.jpg", price: "₹800" },
];

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="event-container">
      <main className="event-list">
        <h2>Events in Hyderabad</h2>
        <div className="event-grid">
          {filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <img src={`./images/${event.image}`} alt={event.title} />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="category">{event.category}</p>
                <p className="date">{event.date}</p>
                <p className="venue">{event.venue}</p>
                <p className="price">{event.price} onwards</p>
              </div>
              <button 
                className="book-btn" 
                onClick={() => navigate(`/eventdetails/${event.id}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventPage;
