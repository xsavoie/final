import React, { useState, useContext } from "react";
import axios from "axios";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./LoginForm.scss";
import { UserContext } from "../contexts/UserContext";
import { useFormFields } from "../../hooks/useFormFields";

export default function LoginForm(props) {

  const [fields, handleFieldChange] = useFormFields({
    loginEmail: "",
    loginPassword: ""
  });

  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);



  function validateLogin(fields) {
    if (fields.loginEmail === "") {
      setError("Email cannot be blank");
      return false;
    };
    if(fields.loginPassword === ""){
      setError("Enter password");
      return false;
    };
    return true;
  };

  function loginCheck(event) {
    const valid = validateLogin(fields)

    if (valid) {
      // event.preventDefault();
      const email = fields.loginEmail;
      const password = fields.loginPassword;
      const request = {
        email,
        password
      };
      // console.log("request", request)
      axios.post('http://localhost:3000/login', request)
      .then(res => {
        const user = res.data;
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        props.setShowLogin(false);
        // console.log("res: ", user)
      })
      .catch(err => {
        console.log(err.message);
      })
    }
  };

  return (
    <div className={`${!props.showLogin ? "login-active" : ""} login-show`}>
      <h2>Login</h2>
      <Form className="loginfrom_style" autoComplete="off" onSubmit={event => event.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div>
            <input id="loginEmail" type="text" name="email" placeholder="name@email.com"
              value={fields.loginEmail}
              onChange={handleFieldChange}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div>
            <input id="loginPassword" type="password" name="password" placeholder="password"
              autoComplete="off"
              value={fields.loginPassword}
              onChange={handleFieldChange}
            />
          </div>
        </Form.Group>
        <Button
          type="button"
          className="btn"
          onClick={() => {
            // event.preventDefault();
            loginCheck();
            // props.setShowLogin(false);
          }}
        >
          Submit
        </Button>
      </Form>
      <span className="login-form--error">{error}</span>
    </div>
  )
}