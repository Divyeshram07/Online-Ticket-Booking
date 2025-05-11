import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TicketConfirmation.css";

const TicketConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state || {};

  if (!ticket) {
    navigate("/");
    return null;
  }

  return (
    <div className="ticket-confirmation-container">
      <h2>🎟️ Ticket Confirmation</h2>
      <p><strong>Booking ID:</strong> {ticket.bookingId}</p>
      <p><strong>Theater:</strong> {ticket.theater}</p>
      <p><strong>Time:</strong> {ticket.time}</p>
      <p><strong>Seats:</strong> {ticket.seats.join(", ")}</p>
      <p><strong>Total Price:</strong> ₹{ticket.totalPrice}</p>
    </div>
  );
};

export default TicketConfirmation;
