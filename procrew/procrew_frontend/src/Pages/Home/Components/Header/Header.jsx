import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Header/Header.css";

export const Header = () => {
  //   Opening & Closing Sidebar
  const [sideNavDisplay, setSideNavDisplay] = useState("none");

  // Automatically closes sidebar when width is greater than 1000px;  
  setInterval(() => {
    if (sideNavDisplay == "flex" && window.innerWidth > 1000) {
        setSideNavDisplay("none");
    }
  }, 1);

  return (
    <header>
        <nav id="main-nav">
            <div id="main-nav-container">
                <div id="main-nav-left">
                    <img src={require("../Images/logo2.png")} alt="ProCrew" />
                    <div id="main-nav-links">
                        <a href="#home">Home</a>
                        <a href="#">Join</a>
                        <a href="#">About</a>
                    </div>
                </div>
                <div id="main-nav-right">
                    <Link to={"/form"}><button>Account</button></Link>
                </div>
                <i id="menu" className="fa-solid fa-burger" onClick={() => {sideNavDisplay == "none" ? setSideNavDisplay("flex") : setSideNavDisplay("none")}}></i>
            </div>
        </nav>
        <nav id="side-nav" style={{display: `${sideNavDisplay}`}}>
            <div id="side-nav-container">
                <div id="side-nav-top">
                    <a href="#">Home</a>
                    <a href="#">Join</a>
                    <a href="#">About</a>
                </div>
                <div id="side-nav-bottom">
                    <Link style={{width: "100%"}} to={"/form"}><button>Account</button></Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
