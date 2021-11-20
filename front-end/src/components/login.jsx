
import React from "react";

export default function Login(props) {

    return (
      <div className="base-container" >
        <div className="header">Login</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input type="text" name="email" placeholder="name@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>

        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        
      </div>
    );
  }