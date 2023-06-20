import React from 'react'
import './Home_cat.css'
import appliances from '../images/Frame 48 (1).png';
import Loud from '../images/Frame 49.png';
import book from '../images/Frame 50.png';
import call from '../images/Frame 51.png';
import tennis from '../images/Frame 52.png';

const Home_cat = () => {
  return (
    <div>
        <div className="cat-h">
            Popular Products
        </div>
        <div className="cat-icons">
            {/* <img src={appliances} alt="" />; */}
          <div>
          <img src={Loud} alt="" />
          <p>Electronics</p>
          </div>
            <div>
            <img src={book} alt=""/>
            <p>Appliances</p>
            </div>
           <div>
           <img src={call} alt="" />
           <p>Text Books</p>
           </div>
           <div>
           <img src={tennis} alt="" />
           <p>Sport <br />Equipments</p>
           </div>
            
        </div>
    </div>
  )
}

export default Home_cat