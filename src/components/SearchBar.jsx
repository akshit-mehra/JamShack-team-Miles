import React from 'react'
import './searchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className='searchBar'>
       <FontAwesomeIcon icon={faSearch} id='s-icon' />
        <input type="text" name="" id="" placeholder='Search an Item'/>
        <button id="Search-btn">Search</button>
    </div>
  )
}

export default SearchBar