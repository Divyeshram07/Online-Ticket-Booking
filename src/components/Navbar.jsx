import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCity, FaFilm, FaCalendarAlt, FaFootballBall, FaPhone, FaHome, FaInfoCircle, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎥 <span>TicketZone</span></Link>
      </div>

      {/* City Selection */}
      <div className="city-select">
        <FaCity className="icon" />
        <select>
          <option>Hyderabad</option>
          <option>Bangalore</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Chennai</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search movies or events..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/"><FaHome className="nav-icon" /> Home</Link></li>
        <li><Link to="/movies"><FaFilm className="nav-icon" /> Movies</Link></li>
        <li><Link to="/eventpage"><FaCalendarAlt className="nav-icon" /> Events</Link></li>
        <li><Link to="/sports"><FaFootballBall className="nav-icon" /> Sports</Link></li>
        <li><Link to="/contact"><FaPhone className="nav-icon" /> Contact</Link></li>
        <li><Link to="/aboutus"><FaInfoCircle className="nav-icon" /> About Us</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link to="/register" className="register-btn">
          <FaUserPlus className="auth-icon" /> Register
        </Link>
        <Link to="/signin" className="signin-btn">
          <FaSignInAlt className="auth-icon" /> Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
