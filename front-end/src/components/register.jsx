import React from "react";

export default function Register(props) {

    return (
      <div className="base-container" >
        <div className="header">Register</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input type="text" name="email" placeholder="name@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username </label>
              <input type="text" name="username" placeholder="AnonymousUsername" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>

        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
        
      </div>
    );
  }