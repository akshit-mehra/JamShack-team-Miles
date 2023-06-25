import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Offerinput = () => {
    const context = useContext(appContext);
  const {makeoffer, offerProps }=context;

  // const data = useLocation().state.request;

  const handleChange = (e) => {
    setoffVal({ ...offVal, [e.target.name]: e.target.value });
    console.log(offVal);
  };


  const [offVal, setoffVal] = useState({
    offerTitle: "",
    offerDescription: "",
    offerAmount: "",
    offerCondition: "Good",
    offerLocation:"",
  });


  const navigate = useNavigate();
  const submitAd = async(e) => {
    await makeoffer(
        offerProps._id,
        offVal.offerTitle,
        offVal.offerAmount,
        offVal.offerDescription,
        offVal.offerCondition,
        offVal.offerLocation
    )
    navigate("/request");


  }
  return (
    <div style={{ height: "70vh", display: "flex", flexDirection: "column" }}>
      <div
        className="offer-title"
        style={{
          fontSize: "40px",
          fontWeight: "800",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        {offerProps.title}
      </div>
      <div
        className="offer-description"
        style={{
          fontSize: "18px",
          marginLeft: "50px",
          color: "#8F8F8F",
          width: "70%",
        }}
      >
        {offerProps.description}
      </div>
      <div
        style={{
          marginTop: "40px",
          color: "#EC5539",
          fontWeight: "500",
          fontSize: "22px",
          marginLeft: "50px",
        }}
      >
        <p>Enter Details so the user can make a decision</p>
      </div>
      <div className="d-flex aligns-items-center" style={{marginLeft:'50px',marginTop:'10px'}}>
        <form className="row g-3 ">
          {/* first row of input form */}
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Product Name"
                name="offerTitle"
                onChange={handleChange}
              />
              <label htmlFor="offerTitle">Title</label>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="inputPrice"
                placeholder="Price"
                name="offerAmount"
                onChange={handleChange}
              />
              <label htmlFor="offerAmount">Enter Price(in ₹)</label>
            </div>
          </div>

          <div className="col-md-3"></div>

          <div className="col-md-4">
            <div className="form-floating">
              <select
                className="form-select"
                id="condition"
                name="offerCondition"
                onChange={handleChange}
              >
                <option value="Bad">Bad</option>
                <option value="Fair">Fair</option>
                <option selected value="Good">
                  Good
                </option>
                <option value="Very Good">Very Good</option>
                <option value="Excellent">Excellent</option>
              </select>
              <label htmlFor="offerCondition">Condition of Product</label>
            </div>
          </div>
          

          

          <div className="mb-3 col-md-9">
            <textarea
              className="form-control"
              id="description"
              rows="5"
              placeholder="Wrtie a description"
              name="offerDescription"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Location"
                name="offerLocation"
                onChange={handleChange}
              />
              <label htmlFor="offerLocation">Location</label>
            </div>
          </div>


          <div className="col-12">
            <button
              onClick={submitAd}
              id="SubmitAd"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Offerinput;
