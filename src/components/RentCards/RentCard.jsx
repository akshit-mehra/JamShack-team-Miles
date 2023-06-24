import React, { useContext, useEffect, useState } from "react";
import appContext from "../../context/AppContext";
import Cards from "../Cards/Cards";



import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const RentCard = () => {
  const context = useContext(appContext);
  const { rent, getAllRent } = context;
  useEffect(() => {
    getAllRent();
  }, []);


  const [search, setsearch] = useState("");

  const handlechange = (e) => {
    setsearch(e.target.value);
    console.log(search);

  }

  return (
    <div>
      <div className='searchBar'>
        <FontAwesomeIcon icon={faSearch} id='s-icon' />
        <input type="text" name="search" value={search} id="" placeholder='Search an Item' onChange={handlechange} />
        <Link to={'/searchResults'} state={search}><button id="Search-btn">Search</button></Link>
      </div>

      <div className="pl-title cat-h">
        Recetly Added
      </div>
      <div className="pl-h d-flex justify-content-equal">
        {rent.map((res) => {
          {
            if (res.title.toUpperCase().indexOf(search.toUpperCase()) > -1) {
              return (
                <div className="c-data">
                  <Cards
                    id={res._id}
                    key={res._id}
                    imageURL={res.imageURL}
                    category={res.category}
                    title={res.title}
                    price={res.price}
                  />
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  )
}

export default RentCard