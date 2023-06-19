import logo from './logo.svg';
import './App.css';
import ChatComp from './components/ChatComp'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="Main">
      {/* <ChatComp productId={"car"} convId={"buyerId"}/> */}
      <Navbar/>
    </div>
  );
}

export default App;
