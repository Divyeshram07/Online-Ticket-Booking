import React, { useState } from "react";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddMovie = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:8080/api/admin/addMovie", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Movie added successfully");
      } else {
        alert("Error adding movie");
      }
    } catch (error) {
      console.error("Error adding movie:", error);
      alert("Error adding movie");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Movie</h2>
      <form onSubmit={handleAddMovie}>
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

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
