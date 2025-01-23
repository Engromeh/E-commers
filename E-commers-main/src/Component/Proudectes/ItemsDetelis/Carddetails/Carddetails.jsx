import React from "react";

const Carddetails = (props) => {
  const { proudectes } = props; 

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={proudectes.image }
        alt={proudectes.title }
      />
      <div className="card-body">
        <h5 className="card-title">{proudectes.title }</h5>
        <p className="card-text">
          {proudectes.description }
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Price: {proudectes.price }
        </li>
        <li className="list-group-item">
          Category: {proudectes.category }
        </li>
        <li className="list-group-item">
          Count: {proudectes.count }
        </li>
      </ul>
    </div>
  );
};

export default Carddetails;
