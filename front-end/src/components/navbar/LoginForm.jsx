import React, {useState, useContext } from "react";
import axios from "axios";
// import { UserContext } from "../contexts/UserContext";
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import "./LoginForm.scss"

export default function LoginForm(props) {


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
    const request = {
      email,
      password
    }
    console.log("request", request)
    axios.post('http://localhost:3000/login', request)
    .then(res => {
      const user = res.data[0];
      props.setUser(user.id)
      sessionStorage.setItem("user", user.id)
      // console.log("res: ", user)
      // alert("Login successful ");
    })
    .catch(err => {
      console.log(err.message);
    })
  }

    

  return (
  <Form className="loginfrom_style" autoComplete="off" onSubmit={event => event.preventDefault()}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <div>
       <input id="email_login" type="text" name="email" placeholder="name@email.com" 
              value = {email}
              onChange={(event) => setEmail(event.target.value)}
              />
               </div>
              
     
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <div>
       <input id="password_login" type="password" name="password" placeholder="password" 
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              /> 
              </div>
    
    </Form.Group>

    <Button type="button" className="btn" onClick={loginCheck}>
      Submit
    </Button>
  </Form>
  )
}


// return (
    //   <div className="base-container" >
    //     <form autoComplete="off" onSubmit={event => event.preventDefault()}>
    //     <div className="header">Login</div>
        
    //         <div className="form-group">
    //           <label htmlFor="email">Email </label>
    //           <input id="email_login" type="text" name="email" placeholder="name@email.com" 
    //           value = {email}
    //           onChange={(event) => setEmail(event.target.value)}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="password">Password </label>
    //           <input id="password_login" type="password" name="password" placeholder="password" 
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //           />
    //         </div>

    //     <div className="footer">
    //       <button type="button" className="btn" onClick={loginCheck}>
    //         Login
    //       </button>
    //     </div>
    //     <section className="error_display">{error}</section>
    //     </form>
    //   </div>
    // );