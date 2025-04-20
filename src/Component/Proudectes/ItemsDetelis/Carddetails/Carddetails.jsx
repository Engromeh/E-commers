import React from "react";
import { Link } from "react-router-dom";

const Carddetails = (props) => {
  const { proudectes } = props;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        marginLeft:"435px",
      }}
    >
      <div
        className="card"
        style={{
          width: "27rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop:"10%",
        }}
      >
        <img
          className="carddetails-img card-img-top"
          src={proudectes.image}
          alt={proudectes.title}
       
        />

        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
            {proudectes.title}
          </h5>
          <p
            className="card-text"
            style={{ fontSize: "0.9rem", color: "#555" }}
          >
            {proudectes.description}
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ fontSize: "0.9rem" }}>
            Price: {proudectes.price}
          </li>
          <li className="list-group-item" style={{ fontSize: "0.9rem" }}>
            Category: {proudectes.category}
          </li>
          <li className="list-group-item" style={{ fontSize: "0.9rem" }}>
            Count: {proudectes.count}
          </li>
        </ul>
        <div className="d-flex justify-content-center p-2">

        <button className="btn btn-primary w-50">Add to Cart</button>

        </div>

      </div>

      
    </div>
  );
};

export default Carddetails;