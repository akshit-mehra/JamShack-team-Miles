import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import Login from './components/Login/Login';
import ChatComp from './components/Chat/ChatComp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppState from './context/AppState';
import Request from './pages/Request';
import Rent from './pages/Rent';

import Input from './components/Input/Input';
import InputReq from './components/InputReq/InputReq';
import Sale_Details from './components/Sale_Details/Sale_Details';
import Profile from './components/Profile/Profile';
import Search from './pages/Search';
import Footer from './components/Footer/Footer';
import { useState } from 'react';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Main">
       <Router>
       <AppState>
     
         <Navbar/>
        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path='/request' element={<Request/>}/>
        <Route path='/rent' element={<Rent/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="/post" element={<Input/>} />
          <Route path="/postreq" element={<InputReq/>} />
          <Route path="/details" element={<Sale_Details/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path='/searchResults' element={<Search/>}/>
          <Route path="/chat" element={<ChatComp productId={"bike"} convId={"buyerId"} />}/>
        </Routes>
          {/* <Footer /> */}
      </AppState>
      </Router>
    </div>
  );
}

export default App;