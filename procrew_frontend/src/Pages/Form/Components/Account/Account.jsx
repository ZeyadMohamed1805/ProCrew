import React from 'react';
import "../Sass/Account/Account.css";

export const Account = () => {
  return (
    <form>
      <div id="signup">
        <h1>Create Account</h1>
        <div id="inputs">
          <div id="name">
            <input type="text" placeholder="Firstname"/>
            <input type="text" placeholder="Lastname"/>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Retype password" />
        </div>
        <input type="submit" id="submit" value="Sign Up" />
        <p>Already have an account?</p>
        <button>Log In</button>
      </div>
    </form>
  )
}