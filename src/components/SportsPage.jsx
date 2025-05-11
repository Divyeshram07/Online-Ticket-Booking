import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SportsPage.css";

const sportsEvents = [
  { title: "Cricket World Cup Final", category: "Cricket", date: "Sun, 10 Mar", venue: "Eden Gardens", image: "wc.jpg" },
  { title: "FIFA Club Finals", category: "Football", date: "Sat, 25 Feb", venue: "Wembley Stadium", image: "fifa.jpg" },
  { title: "NBA All-Star Game", category: "Basketball", date: "Fri, 15 Mar", venue: "Staples Center", image: "nba.jpg" },
  { title: "Formula 1 Grand Prix", category: "Racing", date: "Sun, 5 Apr", venue: "Silverstone", image: "f1.jpg" },
  { title: "Tennis Grand Slam Finals", category: "Tennis", date: "Mon, 12 Feb", venue: "Rod Laver Arena", image: "tennis1.jpg" }
];

const categories = ["All", "Cricket", "Football", "Basketball", "Racing", "Tennis"];

const SportsEventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredEvents = selectedCategory === "All"
    ? sportsEvents
    : sportsEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="sports-container">
      <aside className="filters">
        <h3>Filters</h3>
        <div className="filter-section">
          {categories.map((category, index) => (
            <button 
            className="book-btn"
            onClick={() => navigate("/stadium-seat-selection", { state: { event } })}
          >
            Book Now
          </button>
          ))}
        </div>
      </aside>

      <main className="sports-list">
        <h2>Upcoming Sports Events</h2>
        <div className="sports-grid">
          {filteredEvents.map((event, index) => (
            <div className="sports-card" key={index}>
              <img src={`./images/${event.image}`} alt={event.title} />
              <div className="sports-details">
                <h3>{event.title}</h3>
                <p className="category">{event.category}</p>
                <p className="date">{event.date}</p>
                <p className="venue">{event.venue}</p>
              </div>
              <button 
                className="book-btn"
                onClick={() => navigate("/stadium-seat-selection", { state: { event } })}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SportsEventPage;
