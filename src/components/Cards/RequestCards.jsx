import React, { useContext, useEffect, useState } from "react";
import "./RequestCards.css";
import { useNavigate } from "react-router-dom";
import appContext from "../../context/AppContext";




const RequestCards = (props) => {

  const context = useContext(appContext);
  const { setofferProps } = context;

  const warr = props.description.split(" ");
  const wshow = warr.splice(0, 7).join(" ");
  const navigate=useNavigate();
  const handleChange = () => {

    setofferProps(props);
    navigate("/offerinput", { state: { request: props } });

  };
  return (
    <div className="req-body">
      <div className="req-title">
        <p>{props.title}</p>
      </div>
      <div className="req-cat">
        <p>{props.category}</p>
      </div>
      <div className="req-des">
        <p>{warr.length > 8 ? wshow + "..." : wshow}</p>
      </div>
      <button onClick={handleChange}>Make an offer</button>
    </div>
  );
};

export default RequestCards;
