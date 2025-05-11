import React from "react";
import "./MovieCards.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaChair } from "react-icons/fa";

const movies = [
  {
    id: 1,
    title: "Taylor Swift - The Eras Tour",
    price: "₹2999.99",
    date: "April 15, 2024",
    time: "19:30",
    location: "Gachibowli Stadium",
    seats: "150 seats available",
    image: "/images/sift.jpg",
    category: "Concert",
  },
  {
    id: 2,
    title: "Oppenheimer",
    price: "₹199.99",
    date: "March 20, 2024",
    time: "20:00",
    location: "AAA Cinemas",
    seats: "200 seats available",
    image: "/images/op.jpg",
    category: "Movie",
  },
  {
    id: 3,
    title: "SSMB 29",
    price: "₹399.99",
    date: "June 10, 2024",
    time: "20:30",
    location: "Sudharshan 35mm",
    seats: "100 seats available",
    image: "/images/ssmb29.jpg",
    category: "Movie",
  },
];

const MovieCards = () => {
  return (
    <div className="movie-cards-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="movie-image">
            <img src={movie.image} alt={movie.title} />
            <span className={`category-badge ${movie.category.toLowerCase()}`}>
              {movie.category}
            </span>
          </div>
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <span className="price">{movie.price}</span>
            <p className="movie-description">
              Watch the most anticipated event of the year!
            </p>
            <div className="movie-info">
              <p>
                <FaCalendarAlt className="icon" /> {movie.date}
              </p>
              <p>
                <FaClock className="icon" /> {movie.time}
              </p>
              <p>
                <FaMapMarkerAlt className="icon" /> {movie.location}
              </p>
              <p>
                <FaChair className="icon" /> {movie.seats}
              </p>
            </div>
            <button className="book-button">Book Tickets</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
