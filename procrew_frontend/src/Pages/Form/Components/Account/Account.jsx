import React, { useState } from 'react';
import "../Sass/Account/Account.css";

export const Account = () => {
  const [signupDisplay, setSignupDisplay] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("flex");

  const handleDisplay = (form) => {
    if (form === "login") {
      setLoginDisplay("none");
      setSignupDisplay("flex");
    } else {
      setSignupDisplay("none");
      setLoginDisplay("flex");
    }

    console.log(form);
  }

  return (
    <form>
      <div id="signup" style={{display: `${signupDisplay}`}}>
        <h1>Create Account</h1>
        <div id="signup-inputs">
          <div id="name">
            <input type="text" placeholder="Firstname"/>
            <input type="text" placeholder="Lastname"/>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Retype password" />
        </div>
        <input id="signup-submit" type="submit" value="Sign Up" />
        <p>Already have an account?</p>
        <button onClick={(e) => {e.preventDefault(); handleDisplay("signup")}}>Log In</button>
      </div>
      <div id="login" style={{display: `${loginDisplay}`}}>
        <h1>Enter Account</h1>
        <div id="login-inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <input id="login-submit" type="submit" value="Log In" />
        <p>Don't have an account?</p>
        <button onClick={(e) => {e.preventDefault(); handleDisplay("login")}}>Register Now!</button>
      </div>
    </form>
  )
}