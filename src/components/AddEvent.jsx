import React, { useState } from "react";
import "./AddForm.css"; // Import your CSS file for styling

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:8080/api/admin/addEvent", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Event added successfully");
      } else {
        alert("Error adding event");
      }
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Error adding event");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Event</h2>
      <form onSubmit={handleAddEvent}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Price (₹):</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
