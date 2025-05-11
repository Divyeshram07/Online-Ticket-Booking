import React, { useState } from "react";
import "./TicketSelection.css";

const tickets = [
  { 
    id: 1, 
    name: "EB Family Zone Child", 
    price: 1000, 
    description: "Entry for 1 child in VIP Family Zone (4-14 years)", 
    fastFilling: true,
    details: [
      "Entry for 1 child in VIP Family Zone",
      "Child age must be 4 years to 14 years",
      "Drinks and Smoke Free Zone",
      "Child must be accompanied by an adult",
      "This does not include the ticket of parent/guardian/adult",
      "Adult ticket required separately"
    ]
  },
  { id: 2, name: "Early Bird GA", price: 1000, description: "General Admission Early Bird Offer" },
  { id: 3, name: "EB Family Zone Adult", price: 2000, description: "Entry for 1 adult in VIP Family Zone", fastFilling: true },
  { id: 4, name: "Early Bird VIP", price: 2000, description: "VIP Experience with premium seating" },
  { id: 5, name: "Early Bird Fanpit", price: 2500, description: "Front-row Fanpit Experience" },
];

const TicketSelection = () => {
  const [selectedTickets, setSelectedTickets] = useState({});
  const [expandedTickets, setExpandedTickets] = useState({}); // To track expanded details

  const handleAddTicket = (id) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemoveTicket = (id) => {
    setSelectedTickets((prev) => {
      const updated = { ...prev };
      if (updated[id] > 0) {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  const toggleDetails = (id) => {
    setExpandedTickets((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalAmount = Object.keys(selectedTickets).reduce(
    (acc, id) => acc + (selectedTickets[id] || 0) * tickets.find(t => t.id === Number(id)).price,
    0
  );

  return (
    <div className="ticket-selection-container">
      <h2 className="event-title">Alan Walker India Tour - Hyderabad</h2>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-info">
              <h3>{ticket.name}</h3>
              <p className="ticket-price">₹{ticket.price} {ticket.fastFilling && <span className="fast-filling">| Fast Filling</span>}</p>
              <p className="toggle-details" onClick={() => toggleDetails(ticket.id)}>
                {expandedTickets[ticket.id] ? "Know Less ▲" : "Know More ▼"}
              </p>

              {expandedTickets[ticket.id] && ticket.details && (
                <ul className="ticket-details">
                  {ticket.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="ticket-actions">
              {selectedTickets[ticket.id] > 0 ? (
                <div className="quantity-selector">
                  <button onClick={() => handleRemoveTicket(ticket.id)}>-</button>
                  <span>{selectedTickets[ticket.id]}</span>
                  <button onClick={() => handleAddTicket(ticket.id)}>+</button>
                </div>
              ) : (
                <button className="add-button" onClick={() => handleAddTicket(ticket.id)}>Add</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="total-section">
        <p>Total: ₹{totalAmount}</p>
        <button className="proceed-button">Proceed</button>
      </div>
    </div>
  );
};

export default TicketSelection;
