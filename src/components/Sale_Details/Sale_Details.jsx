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
    listing.map((item) => {
      if (item._id == data) {
        setreqData(item);
      }
    });

    rent.map((item) => {
      if (item._id == data) {
        setreqData(item);
      }
    });
  };
  const [subcheck, setsubcheck] = useState(false);
  const sendUser = async () => {
    const res = await fetch("http://localhost:3001/api/interest/addinterest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ Productid: reqData._id }),
    });
    const ans = await res.json();
    setsubcheck(true);
    console.log(ans);
  };

  useLayoutEffect(() => {
    getAllList();
    getAllRent();
    retrieveData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f6f3f0",
        height: "81vh",
        flexDirection: "column",
      }}
      className="d-flex justify-content-center"
    >
      {reqData && (
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
                style={{
                  color: "#EC5539",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                ₹{reqData.price} {reqData.isRental == true ? "/day" : ""}
              </p>
            </div>
            {reqData.condition && (
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
            )}
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
                    listStyle: "revert",
                  }}
                >
                  {reqData.otherDetails[0] && (
                    <li style={{ listStyle: "revert" }}>
                      {reqData.otherDetails[0]}
                    </li>
                  )}
                  {reqData.otherDetails[1] && (
                    <li style={{ listStyle: "revert" }}>
                      {reqData.otherDetails[1]}
                    </li>
                  )}
                  {reqData.otherDetails[2] && (
                    <li style={{ listStyle: "revert" }}>
                      {reqData.otherDetails[2]}
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div>
              {!subcheck && (
                <button
                id="nav-post"
                style={{ width: "190px" }}
                onClick={sendUser}
              >
                Connect with the seller
              </button>
              )}
              {subcheck && (
                <div style={{border:'1px solid #EC5539', width:'fit-content'}}>
                  <p style={{ color: "#EC5539" ,padding:'5px'}}>Request sent successfully</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sale_Details;