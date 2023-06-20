import React,{useState} from 'react'
import './searchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [search, setsearch] = useState("");
  const handlechange=(e)=>{
    setsearch(e.target.value);
  }
  return (
    <div className='searchBar'>
       <FontAwesomeIcon icon={faSearch} id='s-icon' />
        <input type="text" name="search" value={search} id="" placeholder='Search an Item' onChange={handlechange}/>
        <button id="Search-btn">Search</button>
    </div>
  )
}

export default SearchBar