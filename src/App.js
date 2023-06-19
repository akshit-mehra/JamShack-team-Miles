import logo from './logo.svg';
import './App.css';
import ChatComp from './components/ChatComp'

function App() {
  return (
    <div className="App">
      <ChatComp productId={"car"} convId={"buyerId"}/>
    </div>
  );
}

export default App;
