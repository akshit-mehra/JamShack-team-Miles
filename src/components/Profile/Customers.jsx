import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useEffect, useContext } from "react";

const Customers = () => {
  // const prop = useLocation().state;
  // const [data, setdata] = useState([]);
  // const [udata, setudata] = useState([]);


  const context = useContext(appContext);

 const { potentialCustomers,getbuyers,profileListId ,getAllUsers,users} = context;
 
 useLayoutEffect(() => {
  getbuyers(profileListId);
  getAllUsers();
  console.log(users);
  console.log(potentialCustomers);

 },[])

  return (
    <div className="d-flex justify-content-around mt-5" >
      {
        potentialCustomers.map((item) => {
          return users.map((user) => {
            if (item.offeredBy === user._id) {
              return (
                <div  style={{ width:'300px',marginRight:'10px',border:'1px solid #00000042',fontSize:'25px',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                  <p1 style={{padding:'5px'}}> Customer name:{user.name}</p1>
                  <button style={{width:'60%',alignSelf:'center',padding:'3px'}} id="signIn" >Chat with customer</button>

                </div>
              );
            }
          })
            
          
        })
      }

    </div>
  );
};

export default Customers;
