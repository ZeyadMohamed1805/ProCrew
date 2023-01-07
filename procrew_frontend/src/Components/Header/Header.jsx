import React from 'react';
import { useState } from 'react';
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
                        <a href="#">Home</a>
                        <a href="#">Join</a>
                        <a href="#">About</a>
                    </div>
                </div>
                <div id="main-nav-right">
                    <button>Log In</button>
                    <button>Sign Up</button>
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
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </nav>
    </header>
  )
}
