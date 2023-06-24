import React, { useContext, useEffect } from "react";
import appContext from "../../context/AppContext";
import Cards from "../Cards/Cards";

const RentCard = () => {
    const context = useContext(appContext);
  const { rent,  getAllRent } = context;
  useEffect(() => {
    getAllRent();
  }, []);

  return (
    <div>
        <div className="pl-title cat-h">
            Recetly Added
        </div>
        <div className="pl-h d-flex justify-content-equal">
        {rent.map((res) => {
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
        })}
      </div>
    </div>
  )
}

export default RentCard