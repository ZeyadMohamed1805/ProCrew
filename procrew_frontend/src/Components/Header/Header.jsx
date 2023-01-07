import React from 'react';
import "../Sass/Header/Header.css";

export const Header = () => {
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
                <i className="fa-solid fa-burger"></i>
            </div>
        </nav>
    </header>
  )
}
