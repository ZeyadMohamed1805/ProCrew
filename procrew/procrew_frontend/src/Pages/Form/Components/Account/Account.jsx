import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Account/Account.css";

export const Account = () => {
  const [signupDisplay, setSignupDisplay] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("flex");
  const [clientsAPI, setClientsAPI] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getclients")
    .then(response => response.json())
    .then(data => {console.log(data); setClientsAPI(data)});
  }, []);

  const handleDisplay = (form) => {
    if (form === "login") {
      setLoginDisplay("none");
      setSignupDisplay("flex");
    } else {
      setSignupDisplay("none");
      setLoginDisplay("flex");
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    
    clientsAPI.forEach(client => {
      if (client.email.toLowerCase() === email.toLowerCase()) {
        if (client.password.toLowerCase() === password.toLowerCase()) {
          window.location.href = "/dashboard";
        }
      }
    })
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const id = clientsAPI.length;
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;

    fetch("http://localhost:5000/addclients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      })
    })
  }

  return (
    <form>
      <div id="signup" style={{display: `${signupDisplay}`}}>
        <h1>Create Account</h1>
        <div id="signup-inputs">
          <div id="name">
            <input id="firstname" type="text" placeholder="Firstname"/>
            <input id="lastname" type="text" placeholder="Lastname"/>
          </div>
          <input id="signup-email" type="email" placeholder="Email" />
          <input id="signup-password" type="password" placeholder="Password" />
        </div>
        <input id="signup-submit" type="submit" value="Sign Up" onClick={handleSignup} />
        <p>Already have an account?</p>
        <button onClick={(e) => {e.preventDefault(); handleDisplay("signup")}}>Log In</button>
      </div>
      <div id="login" style={{display: `${loginDisplay}`}}>
        <h1>Enter Account</h1>
        <div id="login-inputs">
          <input id="login-email" type="email" placeholder="Email" />
          <input id="login-password" type="password" placeholder="Password" />
        </div>
        <input id="login-submit" type="submit" value="Log In" onClick={handleLogin} />
        <p>Don't have an account?</p>
        <button onClick={(e) => {e.preventDefault(); handleDisplay("login")}}>Register Now!</button>
      </div>
    </form>
  )
}