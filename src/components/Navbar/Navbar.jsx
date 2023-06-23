import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import appContext from "../../context/AppContext";
import { useContext } from "react";
import userImg from "../../images/Vector (3).png";

const Navbar = () => {
  const context = useContext(appContext);
  const {
    check_1,
    check_2,
    check_3,
    active_nav_1,
    active_nav_2,
    active_nav_3,
  } = context;

  const navigate = useNavigate();

  // const [check_1, setcheck_1] = useState(true);
  // const [check_2, setcheck_2] = useState(false);
  // const [check_3, setcheck_3] = useState(false);

  // const active_nav_1=(e)=>{

  //   if(check_1==false){
  //     setcheck_1(true);
  //     setcheck_2(false);
  //     setcheck_3(false);
  //   }
  //   navigate("/")
  // }
  // const active_nav_2=(e)=>{

  //   if(check_2==false){
  //     setcheck_2(true);
  //     setcheck_1(false);
  //     setcheck_3(false);
  //     navigate("/rent")
  //   }

  // }
  // const active_nav_3=(e)=>{

  //   if(check_3==false){
  //     setcheck_3(true);
  //     setcheck_2(false);
  //     setcheck_1(false);
  //   }
  //   navigate("/request");

  // }
  const POST = () => {
    navigate("/post");
  };
  const LOG = () => {
    navigate("/login");
  };
  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const home=()=>{
    navigate("/");
  }

  return (
    <div className="navb">
      <div className="nav-first d-flex justify-content-between  align-items-center">
        <div className="nav-title">
          <p onClick={home}>Khoj</p>
        </div>
        <div className="nav-btn d-flex">
          {!localStorage.getItem("token") ? (
            <button id="signIn" onClick={LOG}>
              Sign In
            </button>
          ) : (
            
            <div className="d-flex">
              <img src={userImg} alt="" style={{ margin: "0 10px" }} />
              <button id="signIn" onClick={handleLogout}>Sign Out</button>
            </div>
          )}

          <button id="nav-post" onClick={POST}>
            Post an ad
          </button>
        </div>
      </div>

      <div className="nav-second">
        <ul class="nav nav-tabs">
          <li
            class="nav-item"
            style={
              check_1
                ? {
                    border: "1px solid #ec5539",
                    borderRadius: "6px 6px 0px 0px",
                  }
                : {}
            }
          >
            <a
              class="nav-link"
              aria-current="page"
              onClick={active_nav_1}
              style={
                check_1 ? { color: "#ec5539", backgroundColor: "#f6f3f0" } : {}
              }
            >
              Sale
            </a>
          </li>
          <li
            class="nav-item"
            style={
              check_2
                ? {
                    border: "1px solid #ec5539",
                    borderRadius: "6px 6px 0px 0px",
                  }
                : {}
            }
          >
            <a
              class="nav-link "
              onClick={active_nav_2}
              style={
                check_2 ? { color: "#ec5539", backgroundColor: "#f6f3f0" } : {}
              }
            >
              Rent
            </a>
          </li>
          <li
            class="nav-item"
            style={
              check_3
                ? {
                    border: "1px solid #ec5539",
                    borderRadius: "6px 6px 0px 0px",
                  }
                : {}
            }
          >
            <a
              class="nav-link"
              onClick={active_nav_3}
              style={
                check_3 ? { color: "#ec5539", backgroundColor: "#f6f3f0" } : {}
              }
            >
              Request
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
