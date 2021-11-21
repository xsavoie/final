import React, { useState } from "react";
import './register.scss';
import axios from "axios";

export default function Register(props) {

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

  function registerCheck(event) {
    event.preventDefault();
    let request = {
      email: document.getElementById("email_register").value,
      password: document.getElementById("password_register").value
    }
    console.log("request", request)
    axios.post('http://localhost:3000/register', request)
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
      <div className="header">Register</div>
        
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input id="email_register" type="text" name="email" placeholder="name@email.com" 
            value = {email}
            onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input id="password_register" type="password" name="password" placeholder="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
          </div>

      <div className="footer">
        <button type="button" className="btn" onClick={registerCheck}>
          Register
        </button>
      </div>
      <section className="error_display">{error}</section>
      </form>
    </div>
  );
}