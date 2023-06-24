import React, { useEffect, useContext } from "react";
import "./Reqarea.css";
import appContext from "../../context/AppContext";
import RequestCards from "../Cards/RequestCards";

const Reqarea = () => {
  const context = useContext(appContext);
  const { getAllRequests, requests } = context;

  useEffect(() => {
    getAllRequests();
  },[]);

  return (
    <div className="req-area">
        <div className="req-ah cat-h">
            All Requests
        </div>
        <div className="reqall">
        {requests.map((res) => {
        return (
          <div className="c-data">
            <RequestCards
              key={res._id}
              description={res.description}
              category={res.category}
              title={res.title}
            />
          </div>
        );
      })}
        </div>
    </div>
  );
};

export default Reqarea;
