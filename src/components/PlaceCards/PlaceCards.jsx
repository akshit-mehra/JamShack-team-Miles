import React, { useContext, useEffect } from "react";
import "./PlaceCards.css";
import appContext from "../../context/AppContext";
import Cards from "../Cards/Cards";

const PlaceCards = () => {
  const context = useContext(appContext);
  const { listing,  getAllList } = context;

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <div>
        <div className="pl-title cat-h">
            Recetly Added
        </div>
      <div className="pl-h d-flex justify-content-around">
        {listing.map((res) => {
         
          return (
            <div className="c-data">
              <Cards
                key={res._id}
                imageURL={res.imageURL}
                category={res.category}
                title={res.title}
                price={res.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceCards;
