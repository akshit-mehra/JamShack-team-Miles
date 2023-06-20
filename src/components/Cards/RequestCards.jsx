import React from "react";
import "./RequestCards.css";
const RequestCards = (props) => {
  return (
    <div className="req-body">
      <div className="req-title">
        <p>{props.title}</p>
      </div>
      <div className="req-cat">
        <p>{props.category}</p>
      </div>
      <div className="req-des">
        <p>
         {props.description}
        </p>
      </div>
      <button>Make an offer</button>
    </div>
  );
};

export default RequestCards;
