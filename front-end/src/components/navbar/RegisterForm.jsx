import React, { useState, Fragment, useContext } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap'
import "./RegisterForm.scss"
import { userProvider } from '../contexts/UserProvider'
import { UserContext } from "../contexts/UserContext";


export default function RegisterForm(props) {

  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");

  const [error, setError] = useState("");

  const { user, setUser } = useContext(UserContext)


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
    // event.preventDefault();
    let request = {
      email,
      password,
    }
    console.log("request", request)
    axios.post('http://localhost:3000/register', request)
      .then(res => {
        const user = res.data[0]
        setUser(user)
        sessionStorage.setItem("user", JSON.stringify(user))
        // console.log("res: ", user)
        // alert("Login successful ");
      })
      .catch(err => {
        console.log(err);
      })
  }
  console.log(props.showRegister)

  return (
    <div className={`${!props.showRegister ? "register-active" : ""} register-show`}>
      <h2>Register</h2>
      <Form className="registerfrom_style" autoComplete="off" onSubmit={event => event.preventDefault()}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div >
            <input id="email_register" type="text" name="email" placeholder="name@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div >
            <input id="password_register" type="password" name="password" placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit" 
        onClick={() => {
          registerCheck()
          props.setShowRegister(false)
          }}>
          Submit
        </Button>
      </Form>
    </div>
  )
}


 // return (
  //   <div className="base-container" >
  //     <form autoComplete="off" onSubmit={event => event.preventDefault()}>
  //       <div className="header">Register</div>

  //       <div className="form-group">
  //         <label htmlFor="email">Email </label>
  //         <input id="email_register" type="text" name="email" placeholder="name@email.com"
  //           value={email}
  //           onChange={(event) => setEmail(event.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="password">Password </label>
  //         <input id="password_register" type="password" name="password" placeholder="password"
  //           value={password}
  //           onChange={(event) => setPassword(event.target.value)}
  //         />
  //       </div>

  //       <div className="footer">
  //         <button type="button" className="btn" onClick={registerCheck}>
  //           Register
  //         </button>
  //       </div>
  //       <section className="error_display">{error}</section>
  //     </form>
  //   </div>
  // );