import React from "react";
import "./Cards.css";
import img from "../Cards/Appliances.png";
const Cards = (props) => {
  return (
    <div className="c-body">
      <div className="image">
        <img src={props.imageURL} alt="" />
      </div>
      <div className="c-about">
        <p id="category">{props.category}</p>
        <p id="c-price">₹{props.price}</p>
      </div>
      <div className="c-title">{props.title}</div>
      <button>View more details</button>
    </div>
  );
};

export default Cards;
