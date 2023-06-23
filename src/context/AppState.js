import React from "react";
import appContext from "./AppContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppState = (props) => {
  const navigate = useNavigate();
  const host = "http://localhost:3001";

  const InitialRequests = [];
  const InitialListings = [];
  const InitialRent = [];
  const InitialOffers = [];

  const [requests, setrequests] = useState(InitialRequests);
  const [listing, setlisting] = useState(InitialListings);
  const [rent, setrent] = useState(InitialRent);
  const [offers, setoffers] = useState(InitialOffers);

  // Category
  const [category, setcategory] = useState("");
  // navbar
  const [check_1, setcheck_1] = useState(true);
  const [check_2, setcheck_2] = useState(false);
  const [check_3, setcheck_3] = useState(false);

  const active_nav_1 = (e) => {
    if (check_1 == false) {
      setcheck_1(true);
      setcheck_2(false);
      setcheck_3(false);
    }
    navigate("/");
  };
  const active_nav_2 = (e) => {
    if (check_2 == false) {
      setcheck_2(true);
      setcheck_1(false);
      setcheck_3(false);
      navigate("/rent");
    }
  };
  const active_nav_3 = (e) => {
    if (check_3 == false) {
      setcheck_3(true);
      setcheck_2(false);
      setcheck_1(false);
    }
    navigate("/request");
  };

  const startChat = async (productId) => {
    // API call to start a chat
    const response = await fetch(`${host}/api/chat/startchat/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    // TODO: code to send mail to seller
  };

  const getbuyers = async (productId) => {
    // API call
    const response = await fetch(`${host}/api/chat/getbuyers/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    return json;
  };

  // add a new request
  const addRequest = async (
    title,
    description,
    offeringAmount,
    isRental,
    category
  ) => {
    // API call
    const response = await fetch(`${host}/api/request/makerequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({
        title,
        description,
        offeringAmount,
        isRental,
        category,
      }),
    });

    console.log(response);

    // console.log("adding a new card");
    const newReq = {
      _id: "63a4c599dd6cd2769bd0b956",
      title: title,
      description: description,
      requester: "6488a9ee521f4d0860b028ac",
      valid: true,
      offeringAmount: offeringAmount,
      date: "2023-06-13T18:04:01.211Z",
      category: category,
      isRental: isRental,
      __v: 0,
    };
    setrequests(requests.concat(newReq));
  };

  // function to get all requests from the database
  const getAllRequests = async () => {
    // API CAll
    const response = await fetch(`${host}/api/request/getrequest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setrequests(json);
  };

  // function to mark a request as fulfilled
  const markRequest = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/request/markrequest${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    console.log(response);
  };

  // function to get all Sell listing from the database
  const getAllList = async () => {
    // API CAll
    const response = await fetch(`${host}/api/listing/getlistings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setlisting(json);
  };
  // function to get all Sell listing from the database
  const getAllRent = async () => {
    // API CAll
    const response = await fetch(`${host}/api/listing/getrent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setrent(json);
  };

  const makeoffer = async (
    productId,
    offerAmount,
    offerDescription,
    offerCondition,
    offerLocation
  ) => {
    // API call
    const response = await fetch(`${host}/api/request/makeoffer/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({
        productId,
        offerAmount,
        offerDescription,
        offerCondition,
        offerLocation,
      }),
    });

    console.log(response);

    // console.log("adding a new card");
  };

  const getalloffers = async (productId) => {
    // API call
    const response = await fetch(
      `${host}/api/request/getalloffers/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setoffers(json);
  };

  const acceptoffer = async (offerId) => {
    const response = await fetch(`${host}/api/request/acceptoffer/${offerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
  };

  const rejectoffer = async (offerId) => {
    const response = await fetch(`${host}/api/request/rejectoffer/${offerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
  };

  return (
    <appContext.Provider
      value={{
        requests,
        listing,
        startChat,
        getbuyers,
        addRequest,
        getAllRequests,
        markRequest,
        getAllList,
        requests,
        setrequests,
        rent,
        getAllRent,
        makeoffer,
        getalloffers,
        acceptoffer,
        rejectoffer,
        check_1,
        check_2,
        check_3,

        active_nav_1,
        active_nav_2,
        active_nav_3,
        category,
        setcategory,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default AppState;
