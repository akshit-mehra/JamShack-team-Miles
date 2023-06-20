import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import Login from './components/Login/Login';
import ChatComp from './components/Chat/ChatComp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppState from './context/AppState';
import Request from './pages/Request';




function App() {
  return (
    <div className="Main">
       <AppState>
        <Router>
         {/* <Navbar/> */}
        <Routes>
        {/* <Route path="/" element={<ChatComp productId={"car"} convId={"buyerId"}/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path='/request' element={<Request/>}/>
          <Route path="login" element={<Login/>} />
        </Routes>
          {/* <Footer /> */}
        </Router>
      </AppState>
    </div>
  );
}

export default App;