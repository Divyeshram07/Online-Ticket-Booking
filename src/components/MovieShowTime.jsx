import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MovieShowTime.css";
import { FaTicketAlt } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const movieTheaters = {
  "The Batman": [
    {
      theater: "AAA Cinemas: Ameerpet",
      ticket: "M-Ticket",
      food: "Food & Beverage",
      timings: ["01:25 PM", "04:00 PM", "07:10 PM", "10:20 PM"],
      format: "Laser Dolby Digital",
      cancellable: false,
    },
    {
      theater: "AMB Cinemas: Gachibowli",
      ticket: "M-Ticket",
      food: "Food & Beverage",
      timings: ["12:00 PM", "03:30 PM", "06:45 PM", "09:45 PM"],
      format: "Barco Flagship Laser",
      cancellable: true,
    }
  ],
  "Thandel": [
    {
      theater: "PVR ICON: Banjara Hills",
      ticket: "M-Ticket",
      food: "Food & Beverage",
      timings: ["02:00 PM", "05:30 PM", "09:00 PM"],
      format: "IMAX 3D",
      cancellable: true,
    },
    {
      theater: "Asian Cinemas: Uppal",
      ticket: "M-Ticket",
      food: "Food & Beverage",
      timings: ["12:45 PM", "04:15 PM", "07:45 PM", "11:30 PM"],
      format: "Dolby Atmos",
      cancellable: false,
    }
  ]
};

const MovieShowtimes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieTitle = location.state?.movieTitle || "Select a Movie";

  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    setTheaters(movieTheaters[movieTitle] || []);
  }, [movieTitle]);

  return (
    <div className="showtime-container">
      <h2 className="movie-title">{movieTitle}</h2>

      <div className="categories">
        <span>COMEDY</span> <span>DRAMA</span> <span>THRILLER</span>
      </div>

      <div className="date-selector">
        <button className="selected-date">TUE 25 FEB</button>
        <button>WED 26 FEB</button>
        <button>THU 27 FEB</button>
      </div>

      <div className="filter-section">
        <button className="selected-filter">Telugu - 2D</button>
        <button>Filter Price Range</button>
        <button>Filter Show Timings</button>
      </div>

      <div className="showtime-list">
        {theaters.length > 0 ? (
          theaters.map((cinema, index) => (
            <div key={index} className="cinema">
              <div className="cinema-header">
                <h3>{cinema.theater}</h3>
                <AiOutlineInfoCircle className="info-icon" />
              </div>
              <div className="cinema-details">
                <p>
                  <FaTicketAlt /> {cinema.ticket}
                  <MdFastfood /> {cinema.food}
                </p>
              </div>
              <div className="timings">
  {cinema.timings.map((time, idx) => (
    <button
      key={idx}
      className="time-btn"
      onClick={() =>
        navigate("/seatselection", {
          state: {
            selectedShow: {
              movieTitle,
              time,
              theater: cinema.theater,
              format: cinema.format,
              ticket: cinema.ticket,
              food: cinema.food,
              cancellable: cinema.cancellable,
            },
          },
        })
      }
    >
      {time} <span className="format">{cinema.format}</span>
    </button>
  ))}
</div>

              {!cinema.cancellable && (
                <p className="non-cancellable">Non-cancellable</p>
              )}
            </div>
          ))
        ) : (
          <p className="no-showtimes">No showtimes available</p>
        )}
      </div>
    </div>
  );
};

export default MovieShowtimes;
