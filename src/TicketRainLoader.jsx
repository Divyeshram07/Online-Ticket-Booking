import React, { useEffect } from "react";
import "./TicketRainLoader.css";

const TicketRainLoader = ({ onFinish }) => {
  useEffect(() => {
    const audio = new Audio("/ticket-drop.mp3");
    audio.volume = 0.6; // adjust volume
    audio.play().catch((e) => console.log("Sound error:", e));

    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds loader
    return () => clearTimeout(timer);
  }, [onFinish]);

  const renderTickets = () => {
    const tickets = [];
    for (let i = 0; i < 30; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 2}s`,
      };
      tickets.push(
        <img
          key={i}
          src="./images/ticket1.png"
          alt="ticket"
          className="ticket"
          style={style}
        />
      );
    }
    return tickets;
  };

  return <div className="ticket-rain-loader">{renderTickets()}</div>;
};

export default TicketRainLoader;
