import './App.css';
import ChatComp from './components/ChatComp'
import Navbar from './components/Navbar';


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