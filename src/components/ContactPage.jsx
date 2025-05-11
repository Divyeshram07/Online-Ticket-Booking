import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">We'd love to hear from you! Reach out to us.</p>

      <div className="contact-content">
        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea required></textarea>
            <label>Message</label>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>contact@ticketzone.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <p>+91 8008503893</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Hyderabad, India</p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://x.com/divyesh_ram_28" className="social-icon"><FaTwitter /></a>
            <a href="https://x.com/divyesh_ram_28" className="social-icon"><FaInstagram /></a>
            <a href="https://x.com/divyesh_ram_28" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
