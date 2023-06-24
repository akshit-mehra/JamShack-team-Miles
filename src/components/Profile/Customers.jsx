import React, { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const Customers = () => {
    const prodID=useLocation().state;
    const [data, setdata] = useState([])
    const getData=async()=>{
        const res=await fetch("http://localhost:3001/api/interest/getinterest",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
        });
        const ans=await res.json();
       setdata({ans});
    }
    // will complete by fetching use info by userid

    useLayoutEffect(() => {
        getData();
    }, [])

  return (
    <div>
        {data.ans && data.ans.map((item)=>{
            if(item.Productid==prodID){
                return(
                    <div>
                        {item.offeredBy}
                    </div>
                )
            }
        }
   
  )

}
</div>
)}

export default Customers