import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer/Footer'
import RequestCards from '../components/Cards/RequestCards'
import Reqarea from '../components/ReqCard/Reqarea'
import H_req from '../components/h_post/H_req'

const Request = () => {
  return (
    <div style={{backgroundColor:'#f6f3f0'}}>
        <SearchBar/>
       <Reqarea/>
       <H_req/>
        <Footer/>
    </div>
  )
}

export default Request;