import React from "react";
import appContext from "./AppContext";
import { useState } from "react";

const AppState = (props) => {
  const host = "http://localhost:3001";

  const InitialRequests = [];

  const [requests, setrequests] = useState(InitialRequests)
  const [listing, setlisting] = useState(InitialRequests)

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
    const addRequest = async (title, description, offeringAmount, isRental, category) => {
      // API call
      const response = await fetch(`${host}/api/request/makerequest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
  
        body: JSON.stringify({ title, description, offeringAmount, isRental, category}),
      });
  
      console.log(response);
  
      // console.log("adding a new card");
      const newReq = {
        _id: "63a4c599dd6cd2769bd0b956",
        title : title,
        description : description,
        requester : "6488a9ee521f4d0860b028ac",
        valid : true,
        offeringAmount : offeringAmount,
        date: "2023-06-13T18:04:01.211Z",
        category: category,
        isRental: isRental,
        __v: 0
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
    }
     // function to get all listing from the database
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
    }

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
    }


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
        getAllList
      }}
    >
      {props.children}
    </appContext.Provider>
  );

}




export default AppState;
