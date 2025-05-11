import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      alert("Please fill in all fields.");
      return;
    }

    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword,
      role,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", payload);
      alert("Registration successful! Please log in.");
      window.location.href = "/signin";
    } catch (error) {
      console.error("Registration error:", error);
      const errorMsg = error.response?.data || error.message || "Unknown error";
      alert("Registration failed: " + errorMsg);
    }
  };

  return (
    <div className="register-container">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/animal.mp4" type="video/mp4" />
      </video>
      <div className="register-box">
        <h2>Create an Account</h2>
        <p>Sign up to get started</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Full Name or Admin ID"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Dropdown */}
          <div className="input-group">
  <FaUser className="icon" />
  <select
    className="custom-select"
    value={role}
    onChange={(e) => setRole(e.target.value)}
    required
  >
    <option value="USER">User</option>
    <option value="ADMIN">Admin</option>
  </select>
</div>

          <button type="submit" className="register-btn">
            Sign Up
          </button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
