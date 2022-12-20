import React from "react";
import "./DisplayData.css";
// import image from "../../public/images/images.png";

function DisplayData() {
  return (
    <div className="display-container">
      <div className="fetch-cards">
      
          <div className="card" >
            <div className="card-body">
                {/* <img src={image} alt="name"/> */}
            </div>
            <div className="card-footer">
              <h3 className="text-2xl text-start text-indigo-700">name</h3>
            </div>
            <div className="card-footer">
              <p className="text-xl text-start text-indigo-900">price</p>
            </div>
            <span className="card-footer">
              <p className="text-xl text-start text-indigo-900">description</p>
            </span>
          </div>
   
      </div>
    </div>
  );
}

export default DisplayData;
