import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useEffect, useContext } from "react";

const Sale_Details = () => {
  const data = useLocation().state;
  const context = useContext(appContext);

  const { getAllList, getAllRent, listing, rent, check_1, check_2 } = context;
  const [reqData, setreqData] = useState([]);
  const retrieveData = () => {
    if (check_1 == true) {
      listing.map((item) => {
        if (item._id == data) {
          setreqData(item);
        }
      });
    } else {
      rent.map((item) => {
        if (item._id == data) {
          setreqData(item);
        }
      });
    }
  };
  useLayoutEffect(() => {
    if (check_1 == true) {
      getAllList();
      retrieveData();
    }
    if (check_2 == true) {
      getAllRent();
      retrieveData();
    }
  }, [check_1, check_2]);

  return (
    <div
      style={{
        backgroundColor: "#f6f3f0",
        height: "81vh",
        flexDirection: "column",
      }}
      className="d-flex justify-content-center"
    >
      <div className="d-flex justify-content-center">
        <div
          className="details-img"
          style={{ height: "300px", width: "300px", marginRight: "100px" }}
        >
          <img
            src={reqData.imageURL}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="details-content" style={{ width: "500px" }}>
          <div
            className="details-title d-flex justify-content-between"
            style={{ paddingTop: "30px", alignItems: "center" }}
          >
            <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
              {reqData.title}
            </p>
            <p
              style={{ color: "#EC5539", fontWeight: "600", fontSize: "20px" }}
            >
              ₹{reqData.price}
            </p>
          </div>
          <div>
            <p
              style={{
                color: "#8F8F8F",
                fontSize: "14px",
                fontWeight: "300",
                marginBottom: "30px",
              }}
            >
              <span style={{ color: "black", fontWeight: "500" }}>
                Condition :
              </span>
              {reqData.condition}
            </p>
          </div>
          <div style={{ marginBottom: "7px" }}>
            <p style={{ color: "#8F8F8F", fontSize: "18px" }}>
              {reqData.description}
            </p>
          </div>
          {reqData.otherDetails && (
            <div>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Other Details
              </p>
              <ul
                style={{
                  color: "#8F8F8F",
                  fontSize: "17px",
                  fontWeight: "300",
                  marginBottom: "30px",
                }}
              >
                {reqData.otherDetails[0] && <li>{reqData.otherDetails[0]}</li>}
                {reqData.otherDetails[1] && <li>{reqData.otherDetails[1]}</li>}
                {reqData.otherDetails[2] && <li>{reqData.otherDetails[2]}</li>}
              </ul>
            </div>
          )}
          <div>
            <button id="nav-post" style={{width:'190px'}}>Chat with the seller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale_Details;
