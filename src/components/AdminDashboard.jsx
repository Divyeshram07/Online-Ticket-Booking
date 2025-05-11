import React from "react";
import { Link } from "react-router-dom";
import "./AddForm.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-buttons">
        <Link to="/add-Movie">
          <button>Add Movie</button>
        </Link>
        <Link to="/add-Event">
          <button>Add Event</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;


