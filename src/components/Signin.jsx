import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Signin.css";
import ForgotPasswordPopup from "./ForgotPasswordPopup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Signin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA before signing in!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const { role, name } = response.data;

      localStorage.setItem("userRole", role);
      localStorage.setItem("userName", name);

      if (role === "ADMIN") {
        navigate("/admin");
      } else if (role === "USER") {
        navigate("/");
      } else {
        alert("Unknown role: " + role);
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg =
        error.response?.data?.message || error.response?.data || "Login failed. Please try again.";
      alert(errorMsg);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="signin-container">
      <video autoPlay loop muted className="background-video">
        <source src="/videos/salaar.mp4" type="video/mp4" />
      </video>

      <div className="signin-box">
        <h2>Welcome Back!</h2>
        <p>Sign in to continue</p>

        <form onSubmit={handleSubmit}>
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

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <div style={{ margin: "15px 0" }}>
            <ReCAPTCHA
              sitekey="6Ldp6DQrAAAAAElVUI6S1NMu8xM1Lnz8TxHeIOXT"
              onChange={handleCaptchaChange}
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="forgot-password" onClick={() => setShowForgotPassword(true)}>
          Forgot Password?
        </p>
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>

      {showForgotPassword && (
        <ForgotPasswordPopup onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
};

export default Signin;
