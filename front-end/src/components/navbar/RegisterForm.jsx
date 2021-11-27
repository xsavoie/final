import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import "./RegisterForm.scss";
import { UserContext } from "../contexts/UserContext";
import { useFormFields } from "../hooks/useFormFields";


export default function RegisterForm(props) {

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validateRegister(submittedFields) {
    if (!validateEmail(submittedFields.email)) {
      setError("Enter valid email");
      return false;
    }
    if (submittedFields.password.length < 8 || submittedFields.confirmPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    if (submittedFields.password !== submittedFields.confirmPassword) {
      setError("Passwords must match");
      return false;
    }
    return true;
  };

  
  function registerCheck(event) {
    const valid = validateRegister(fields);

    if (valid) {
      const email = fields.email;
      const password = fields.password;
      let request = {
        email,
        password
      };

      // console.log("request", request)
      axios.post('http://localhost:3000/register', request)
        .then(res => {
          const response = res.data;

          if (typeof response === "string") {
            setError(response);
          }
          if (typeof response === "object") {
            const user = res.data[0];
            setUser(user);
            sessionStorage.setItem("user", JSON.stringify(user));
            props.setShowRegister(false);
            console.log("res: ", user);
          }
        })
        .catch(err => {
          console.log(err);
        })
    };
  };

  return (
    <div className={`${!props.showRegister ? "register-active" : ""} register-show`}>
      <h2>Register</h2>
      <Form className="registerfrom_style" autoComplete="off" onSubmit={event => event.preventDefault()}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div >
            <input id="email" type="text" name="email" placeholder="name@email.com"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </div>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div >
            <input id="password" type="password" name="password" placeholder="password"
              autoComplete="off"
              value={fields.password}
              onChange={handleFieldChange}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm your password</Form.Label>
          <div >
            <input id="confirmPassword" type="password" name="password" placeholder="password"
              autoComplete="off"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
            />
          </div>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            registerCheck();
            // props.setShowRegister(false)
          }}>
          Submit
        </Button>
      </Form>
      <span>{error}</span>
    </div>
  )
}