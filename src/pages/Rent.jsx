import React from 'react'
import SearchBar from "../components/SearchBar";
import Home_cat from '../components/Home_cat';
import RentCard from '../components/RentCards/RentCard';
import Footer from '../components/Footer/Footer';
import H_Post from '../components/h_post/H_Post';
const Rent = () => {
  return (
    <div style={{backgroundColor:'#f6f3f0'}}>
      <SearchBar/>
      <Home_cat/>
      <RentCard/>
      <H_Post/>
      <Footer/>
    </div>
  )
}

export default Rent