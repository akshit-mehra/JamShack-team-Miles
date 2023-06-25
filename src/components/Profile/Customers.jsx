import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useEffect, useContext } from "react";

const Customers = () => {
  // const prop = useLocation().state;
  // const [data, setdata] = useState([]);
  // const [udata, setudata] = useState([]);


  const context = useContext(appContext);

  const { getAllUsers, users, potentialCustomers } = context;
  // const prodID = prop.props.id;
  // const[offeredBy,setOfferedBy]=useState(prop.data.ans);


  // const change = () => {
  //   prop.data.ans.map((item) => {
  //     if (item.Productid == prodID) {
  //       setudata([item.offeredBy]);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   getAllUsers();
  // },[]);

  return (
    <div>
      {potentialCustomers.map((item) => {
        <h1 style={ {fontSize: '350px'}}>{item.offeredBy}</h1>
      }
      )
      }

    </div>
  );
};

export default Customers;
