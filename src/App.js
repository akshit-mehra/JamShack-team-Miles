import logo from './logo.svg';
import './App.css';
import ChatComp from './components/ChatComp'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="Main">
      {/* <ChatComp productId={"car"} convId={"buyerId"}/> */}
      {/* <Navbar/>
      <SearchBar/> */}
      <Home/>
    </div>
  );
}

export default App;
