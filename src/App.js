import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import ChatComp from './components/Chat/ChatComp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppState from './context/AppState';



function App() {
  return (
    <div className="Main">
       <AppState>
        <Router>
         <Navbar/>
        <Routes>
        <Route path="/" element={<ChatComp productId={"car"} convId={"buyerId"}/>} />
          <Route path="login" element={<Login/>} />
        </Routes>
          {/* <Footer /> */}
        </Router>
      </AppState>
    </div>
  );
}

export default App;