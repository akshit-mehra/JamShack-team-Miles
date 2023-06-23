import React,{useContext, useState} from 'react'
import './searchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import appContext from '../context/AppContext';


const SearchBar = () => {
  const context=useContext(appContext);
  const {check_1,check_2,check_3}=context;
  const[option,setoption]=useState('sale');
  const host='http://localhost:3001'
  const [search, setsearch] = useState("");
  const handlechange=(e)=>{
    setsearch(e.target.value);
    console.log(search);
  }
  const Onsearch=async(e)=>{
    e.preventDefault();
    if(check_1){
      setoption('sale')
    }
    if(check_2){
      setoption('rent')
    }
    if(check_3){
      setoption('req')
    }
    
    const data= await fetch(`${host}/api/nav/${option}`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({search})

    })
    const ans=await data.json();
    console.log(ans);
  }
  return (
    <div className='searchBar'>
       <FontAwesomeIcon icon={faSearch} id='s-icon' />
        <input type="text" name="search" value={search} id="" placeholder='Search an Item' onChange={handlechange}/>
        <button id="Search-btn" onClick={Onsearch}>Search</button>
    </div>
  )
}

export default SearchBar