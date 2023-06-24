import React, { useEffect, useContext, useState } from "react";
import "./Reqarea.css";
import appContext from "../../context/AppContext";
import RequestCards from "../Cards/RequestCards";

import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Reqarea = () => {
  const context = useContext(appContext);
  const { getAllRequests, requests } = context;

  useEffect(() => {
    getAllRequests();
  },[]);


  const [search, setsearch] = useState("");

  const handlechange=(e)=>{
    setsearch(e.target.value);
    console.log(search);

  }

  return (
    <>
    <div className='searchBar'>
        <FontAwesomeIcon icon={faSearch} id='s-icon' />
        <input type="text" name="search" value={search} id="" placeholder='Search an Item' onChange={handlechange} />
        <Link to={'/searchResults'} state={search}><button id="Search-btn">Search</button></Link>
      </div>
    <div className="req-area">
        <div className="req-ah cat-h">
            All Requests
        </div>
        <div className="reqall">
        {requests.map((res) => {
          {
            if (res.title.toUpperCase().indexOf(search.toUpperCase()) > -1) {
            return (
              <div className="c-data">
            <RequestCards
              key={res._id}
              description={res.description}
              category={res.category}
              title={res.title}
              />
          </div>
        );
            }
      }
      })}
        </div>
    </div>
    </>
  );
};

export default Reqarea;
