
import React, { useState } from "react";
import './login.scss';
import axios from "axios";

export default function Login(props) {

  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");

  const [error, setError] = useState("");


  // function validate() {
  //   if (email === "") {
  //     setError("Enter valid email");
  //     return;
  //   }
  //   if(password === ""){
  //     setError("Enter password");
  //     return;
  //   }
  //   props.onSave(email, password);
  // }

  function loginCheck(event) {
    event.preventDefault();
    let request = {
      email: document.getElementById("email_login").value,
      password: document.getElementById("password_login").value
    }
    console.log("request", request)
    axios.post('http://localhost:3000/login', request)
    .then(res => {
      console.log("res: ", res)
      alert("Login successful ");
    })
    .catch(err => {
      console.log(err);
    })
  }

    return (
      <div className="base-container" >
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <div className="header">Login</div>
          
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input id="email_login" type="text" name="email" placeholder="name@email.com" 
              value = {email}
              onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input id="password_login" type="password" name="password" placeholder="password" 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              />
            </div>

        <div className="footer">
          <button type="button" className="btn" onClick={loginCheck}>
            Login
          </button>
        </div>
        <section className="error_display">{error}</section>
        </form>
      </div>
    );

}