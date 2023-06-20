import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer/Footer'

const Request = () => {
  return (
    <div style={{backgroundColor:'#f6f3f0'}}>
        <Navbar/>
        <SearchBar/>
        <Footer/>
    </div>
  )
}

export default Request;