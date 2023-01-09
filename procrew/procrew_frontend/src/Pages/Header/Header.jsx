import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sass/Header/Header.css";

export const Header = (props) => {
  //   Opening & Closing Sidebar
  const [sideNavDisplay, setSideNavDisplay] = useState("none");

  return (
    <header>
        <nav id="main-nav">
            <div id="main-nav-container">
                <div id="main-nav-left">
                    <img src={require("./Images/logo2.png")} alt="ProCrew" />
                </div>
                <div id="main-nav-right">
                    <button onClick={() => {sideNavDisplay == "none" ? setSideNavDisplay("flex") : setSideNavDisplay("none")}}>Cart</button>
                </div>
                <i id="menu" className="fa-solid fa-cart-shopping" onClick={() => {sideNavDisplay == "none" ? setSideNavDisplay("flex") : setSideNavDisplay("none")}}></i>
            </div>
        </nav>
        <nav id="side-nav" style={{display: `${sideNavDisplay}`}}>
            <div id="side-nav-container">
                <div id="side-nav-top">
                    Cart Item
                </div>
                <div id="side-nav-bottom">
                    <Link to={"/checkout"} style={{width: "100%"}}><button>Checkout</button></Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
