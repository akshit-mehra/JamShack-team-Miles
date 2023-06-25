import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useEffect, useContext } from "react";

const Customers = () => {
  const prop = useLocation().state;
  const [data, setdata] = useState([]);
  const [udata, setudata] = useState([]);
  const context = useContext(appContext);
  const { getAllUsers, users } = context;
  const prodID = prop.props.id;
  const[offeredBy,setOfferedBy]=useState(prop.data.ans);


  const change = () => {
    prop.data.ans.map((item) => {
      if (item.Productid == prodID) {
        setudata([item.offeredBy]);
      }
    });
  }

useEffect(() => {
  getAllUsers();
},[]);

  return (
    <div>
      {offeredBy &&
        offeredBy.map((item) => {
          if (item.Productid == prodID) {
            {console.log(users)}
          }
        })}
      {/* <button onClick={change}></button> */}
      {console.log(prop)}
    </div>
  );
};

export default Customers;
