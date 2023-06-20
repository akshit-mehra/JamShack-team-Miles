import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar'
import './Home.css'
import Home_cat from '../components/Home_cat'
import Cards from '../components/Cards/Cards'
import PlaceCards from '../components/PlaceCards/PlaceCards'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <SearchBar/>
        <Home_cat/>
        <PlaceCards/>
    </div>
  )
}

export default Home