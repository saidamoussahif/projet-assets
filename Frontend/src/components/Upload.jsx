import React, { useState } from "react";
import "./upload.css";

function Upload() {
  const [images] = useState("");

  return (
    <div className="row">
      <form>
        {images ? (
          <img
            src={images}
            alt="pdt"
            className="uploadImage"
          />
        ) : (
          <button
            className="choose"
          >
            Choose image
          </button>
        )}

        <input type="text" placeholder="Title" required />
        <input type="number" placeholder="Price" required />
        <input type="text" placeholder="Description" required />

        <button className="add" type="submit">
          Add
        </button>
      
      </form>
    </div>
  );
}

export default Upload;
