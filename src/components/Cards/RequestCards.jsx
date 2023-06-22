import React from "react";
import "./RequestCards.css";
const RequestCards = (props) => {
  const warr=props.description.split(' ');
  const wshow=warr.splice(0,7).join(" ");
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
         {wshow}
        </p>
      </div>
      <button>Make an offer</button>
    </div>
  );
};

export default RequestCards;
