import React from "react";
import "./Cards.css";
import img from "../Cards/Appliances.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Cards = (props) => {
  const navigate = useNavigate();
  // const details=()=>{
  //   navigate("/details")

  // }
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
      <Link to={`/details`} state={props.id}>  <button>View more details</button> </Link>
     
    </div>
  );
};

export default Cards;
