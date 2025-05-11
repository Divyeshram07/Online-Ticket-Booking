import React from "react";
import { useLocation } from "react-router-dom";
import "./StadiumSeatSelection.css";

const StadiumSeatSelection = () => {
  const location = useLocation();
  const event = location.state?.event; // Get event details

  return (
    <div className="stadium-container">
      <h2 className="title">{event ? event.title : "Select Your Seats"}</h2>
      <div className="stadium-map">
        <div className="section section-a">A</div>
        <div className="section section-b">B</div>
        <div className="section section-c">C</div>
        <div className="section section-d">D</div>
      </div>
    </div>
  );
};

export default StadiumSeatSelection;
