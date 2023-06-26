import React, { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useEffect, useContext } from "react";

const Customers = () => {
  // const prop = useLocation().state;
  // const [data, setdata] = useState([]);
  // const [udata, setudata] = useState([]);

  const navigate = useNavigate();

  const context = useContext(appContext);

 const { potentialCustomers,getbuyers,profileListId ,getAllUsers,users, setchatProductId, setchatConvId} = context;
 
 useLayoutEffect(() => {
  getbuyers(profileListId);
  getAllUsers();
  console.log(users);
  console.log(potentialCustomers);
 },[])

  const OpenChat = (e) => {
    // console.log(e.target.value);
    // console.log(profileListId);
    setchatConvId(e.target.value);
    setchatProductId(profileListId);

    navigate("/chat");
  }

  return (
    <div className="d-flex justify-content-around mt-5" style={{flexWrap:'wrap'}}>
      {
        potentialCustomers.map((item) => {
          return users.map((user) => {
            if (item.offeredBy === user._id) {
              return (
                <div  style={{ width:'300px',marginRight:'10px',border:'1px solid #00000042',fontSize:'25px',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',flexBasis:'30%',margin:'10px 0px'}}>
                  <p1 style={{padding:'7px',whiteSpace:'nowrap'}}> Customer name:{user.name}</p1>
                  <button style={{width:'60%',alignSelf:'center',padding:'3px',minHeight:'fit-content',minWidth:'fit-content'}} id="signIn" value={user._id} onClick={OpenChat}>Chat with customer</button>

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
