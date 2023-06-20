import React ,{useState}from "react";
import "./Navbar.css";

const Navbar = () => {
  const [check_1, setcheck_1] = useState(true);
  const [check_2, setcheck_2] = useState(false);
  const [check_3, setcheck_3] = useState(false);

  const active_nav_1=(e)=>{
   
    if(check_1==false){
      setcheck_1(true);
      setcheck_2(false);
      setcheck_3(false);
    }
  }
  const active_nav_2=(e)=>{
  
    if(check_2==false){
      setcheck_2(true);
      setcheck_1(false);
      setcheck_3(false);
    }
  }
  const active_nav_3=(e)=>{
  
    if(check_3==false){
      setcheck_3(true);
      setcheck_2(false);
      setcheck_1(false);
    }
  }

  return (
    <div className="navb">
      <div className="nav-first d-flex justify-content-between  align-items-center">
        <div className="nav-title">
          <p>Khoj</p>
        </div>
        <div className="nav-btn">
          <button id="signIn">Sign In</button>
          <button id="nav-post">Post an ad</button>
        </div>
      </div>

      <div className="nav-second">
        <ul class="nav nav-tabs">
          <li class="nav-item" style={check_1 ? {border:'1px solid #ec5539',
          borderRadius:'6px 6px 0px 0px'}:{}}>
            <a class="nav-link" aria-current="page"  onClick={active_nav_1} style={check_1 ? {color:'#ec5539',backgroundColor:'#f6f3f0'}:{}}  >
              Sale
            </a>
          </li>
          <li class="nav-item" style={check_2 ? {border:'1px solid #ec5539',
          borderRadius:'6px 6px 0px 0px'}:{}}>
            <a class="nav-link " onClick={active_nav_2} style={check_2 ? {color:'#ec5539',backgroundColor:'#f6f3f0'}:{}}>
              Rent
            </a>
          </li>
          <li class="nav-item" style={check_3 ? {border:'1px solid #ec5539',
          borderRadius:'6px 6px 0px 0px'}:{}}>
            <a class="nav-link" onClick={active_nav_3} style={check_3 ? {color:'#ec5539',backgroundColor:'#f6f3f0'}:{}}>
              Request
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;