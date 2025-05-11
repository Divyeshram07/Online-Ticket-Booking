import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SeatSelection.css";

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedShow } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState(1);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [showSeatPopup, setShowSeatPopup] = useState(true);
  const ticketPrice = 250;

  const generateRandomBookedSeats = useCallback(() => {
    const totalSeats = 50;
    const randomCount = Math.floor(Math.random() * 10) + 5;
    const randomSeats = new Set();
    while (randomSeats.size < randomCount) {
      randomSeats.add(Math.floor(Math.random() * totalSeats));
    }
    setBookedSeats(Array.from(randomSeats));
  }, []);

  useEffect(() => {
    generateRandomBookedSeats();
  }, [generateRandomBookedSeats]);

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;

    let updatedSeats = [...chosenSeats];
    if (updatedSeats.includes(seatNumber)) {
      updatedSeats = updatedSeats.filter((seat) => seat !== seatNumber);
    } else if (updatedSeats.length < selectedSeats) {
      updatedSeats.push(seatNumber);
    }
    setChosenSeats(updatedSeats);
  };

  const handleConfirmSeats = async () => {
    if (chosenSeats.length === selectedSeats) {
      const ticketDetails = {
        theater: selectedShow?.theater,
        time: selectedShow?.time,
        seats: chosenSeats.join(","),
        totalPrice: chosenSeats.length * ticketPrice,
      };

      try {
        const response = await fetch("http://localhost:8080/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ticketDetails),
        });

        if (!response.ok) {
          throw new Error("Failed to save booking.");
        }

        const savedTicket = await response.json();

        navigate("/ticket-confirmation", {
          state: {
            ticket: {
              bookingId: savedTicket.id,
              theater: savedTicket.theater,
              time: savedTicket.time,
              seats: savedTicket.seats.split(",").map(Number),
              totalPrice: savedTicket.totalPrice,
            },
          },
        });
      } catch (err) {
        alert("Error confirming booking. Please try again.");
        console.error(err);
      }
    } else {
      alert("Please select the required number of seats.");
    }
  };

  return (
    <div className="seat-selection-container">
      {showSeatPopup ? (
        <div className="seat-popup">
          <h2>Select Number of Seats</h2>
          <input
            type="number"
            min="1"
            max="10"
            value={selectedSeats}
            onChange={(e) =>
              setSelectedSeats(
                Math.min(10, Math.max(1, parseInt(e.target.value) || 1))
              )
            }
          />
          <button onClick={() => setShowSeatPopup(false)}>Proceed</button>
        </div>
      ) : (
        <>
          <h2>
            {selectedShow?.theater} - {selectedShow?.time}
          </h2>
          <div className="screen">SCREEN</div>

          <div className="seat-container">
            {[...Array(5)].map((_, rowIndex) => (
              <div className="row" key={rowIndex}>
                {[...Array(10)].map((_, seatIndex) => {
                  const seatNumber = rowIndex * 10 + seatIndex;
                  return (
                    <div
                      key={seatNumber}
                      className={`seat 
                        ${bookedSeats.includes(seatNumber) ? "booked" : ""}
                        ${
                          chosenSeats.includes(seatNumber) ? "selected" : ""
                        }`}
                      onClick={() => handleSeatClick(seatNumber)}
                    >
                      {seatNumber + 1}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="pay-now-container">
            <p className="total-cost">
              Total Cost: Rs. {chosenSeats.length * ticketPrice}
            </p>
            <button className="pay-now-button" onClick={handleConfirmSeats}>
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SeatSelection;
