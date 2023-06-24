import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Customers = () => {
  const prodID = useLocation().state;
  const [data, setdata] = useState([]);
  const [udata, setudata] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:3001/api/interest/getinterest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    setdata({ ans });
  };
  // will complete by fetching use info by userid

  const userData = () => {
    
      data.ans.map((item) => {
        if (item.Productid == prodID) {
          {
            setudata(item.offeredBy);
          }
        }
      });
  };

  useLayoutEffect(() => {
    getData();
    if(data.ans!=null){
        userData();
    }
   
  }, [data.ans]);

  return (
    <div>
      {/* {data.ans &&
        data.ans.map((item) => {
          if (item.Productid == prodID) {
            return <div>{setudata(item.offeredBy)}</div>;
          }
        })} */}
        {udata}
        {console.log(data.ans)}
       
    </div>
  );
};

export default Customers;