import React, { useContext, useEffect, useState } from "react";
import "./RequestCards.css";
import { useNavigate } from "react-router-dom";
import appContext from "../../context/AppContext";

const RequestCards = (props) => {
  const context = useContext(appContext);
  const { setofferProps } = context;

  const warr = props.description.split(" ");
  const wshow = warr.splice(0, 7).join(" ");
  const navigate = useNavigate();
  const handleChange = () => {
    setofferProps(props);
    if (props.bool) {
      navigate("/offers");
    } else {
      navigate("/offerinput", { state: { request: props } });
    }
  };

  return (
    <div className="req-body">
      <div className="req-title">
        <p>{props.title}</p>
      </div>
      {!props.confirm && (
        <div>
          <div className="req-cat">
            <p>{props.category}</p>
          </div>
          <div className="req-des">
            <p>{warr.length > 1 ? wshow + "..." : wshow}</p>
          </div>
        </div>
      )}
      {props.confirm && (
        <div>
          <div className="d-flex justify-content-between mt-2">
          <div className="req-cat">
            <p>{props.amount}</p>
          </div>
          <div className="req-des">
            <p>{props.condition}</p>
          </div>
          </div>
          <div className="req-des">
            <p>{props.description}</p>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <button style={{width:'100px'}}>Accept Offer</button>
            <button style={{width:'100px'}}>Reject Offer</button>
            </div>
          
        </div>
      )}
       {props.bool && <button onClick={handleChange}>View offers</button>}
      {!props.confirm && !props.bool && <button onClick={handleChange}>Make an offer</button>}
    </div>
  );
};

export default RequestCards;
