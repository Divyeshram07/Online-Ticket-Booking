import React, { useState } from "react";
import "./ForgotPasswordPopup.css";

const ForgotPasswordPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = () => {
    if (email) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setSentOtp(generatedOtp);
      console.log("OTP Sent to:", email, "OTP:", generatedOtp); // Simulate sending OTP
      setStep(2);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === sentOtp) {
      setStep(3);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword.length >= 6) {
      alert("Password reset successfully! Please log in with your new password.");
      onClose(); // Close popup
    } else {
      alert("Password must be at least 6 characters.");
    }
  };

  return (
    <div className="forgot-password-popup">
      <div className="popup-box">
        <h3>Reset Password</h3>
        {step === 1 && (
          <>
            <p>Enter your registered email:</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={handleSendOtp}>Send OTP</button>
          </>
        )}
        {step === 2 && (
          <>
            <p>Enter the OTP sent to your email:</p>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
        {step === 3 && (
          <>
            <p>Enter your new password:</p>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button onClick={handleResetPassword}>Reset Password</button>
          </>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
