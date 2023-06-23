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



function App() {
  return (
    <div className="Main">
       <Router>
       <AppState>
     
         <Navbar/>
        <Routes>
        {/* <Route path="/" element={<ChatComp productId={"car"} convId={"buyerId"}/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path='/request' element={<Request/>}/>
        <Route path='/rent' element={<Rent/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="/post" element={<Input/>} />
          <Route path="/postreq" element={<InputReq/>} />
        </Routes>
          {/* <Footer /> */}
      </AppState>
      </Router>
    </div>
  );
}

export default App;