import React, {useState} from "react";
import axios from "axios";
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


export default function RegisterForm(props) {

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

    props.setUser(res.data[0].id)
    console.log("res: ", res.data[0])
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

  // return (
  // <Form>
  //   <Form.Group className="mb-3" controlId="formBasicEmail">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //     <Form.Text className="text-muted">
  //       We'll never share your email with anyone else.
  //     </Form.Text>
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formBasicEmail">
  //     <Form.Label>Username</Form.Label>
  //     <Form.Control type="username" placeholder="Enter username" />
  //     <Form.Text className="text-muted">
  //     </Form.Text>
  //   </Form.Group>
  

  //   <Form.Group className="mb-3" controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formBasicPassword">
  //     <Form.Label>Confirm Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>

  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>
  // )
}