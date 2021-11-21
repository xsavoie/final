
import React from "react";
import './login.scss';
import axios from "axios";

export default function Login(props) {

  // const [email, setEmail] = useState(props.email || "");
  // const [password, setPassword] = useState(props.passowrd || null);

  // const [error, setError] = useState("");



console.log(props);

    return (
      <div className="base-container" >
        <form onSubmit={(event)=> loginCheck(event)}>
        <div className="header">Login</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input id="email_login" type="text" name="email" placeholder="name@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input id="password_login" type="password" name="password" placeholder="password" />
            </div>
          </div>

        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        </form>
      </div>
    );

    function loginCheck(event) {
      event.preventDefault();
      let request = {
        email: document.getElementById("email_login").value,
        password: document.getElementById("password_login").value
      }
      
      axios.post('http://localhost:3000/users', request)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      })
    }

  }