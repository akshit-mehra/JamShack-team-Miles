import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import './Home.css'
import Home_cat from '../components/Home_cat'
import Cards from '../components/Cards/Cards'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <SearchBar/>
        <Home_cat/>
    </div>
  )
}

export default Home