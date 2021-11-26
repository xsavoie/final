import React, { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './Profile.scss';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ConfessionForm from "../Confession/ConfessionForm";
import Avatar from "./Avatar";



export default function Profile(props) {

  const { user, setUser } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false)
  const [about, setAbout] = useState("");
 
  // https://i.imgur.com/O1t7wwB.jpeg
  // https://i.imgur.com/5KfNDSg.jpeg

  function editAbout(about) {
    // const about = event.target.value
    const id = user.id 
    // const id = 1
    const request = {
      about,
      id
    }
    console.log("edit about", request)
    axios.put('http://localhost:3000/users/about_me', request)
      .then(res => {
        console.log(res)
        setUser(prev => ({ ...prev, about: about}))
        setAbout("");
        alert("About updated in database");
      })
      .catch(err => {
        console.log(err.message);
      })
  }


    return (
      
      <body className="profile-page"> 
        
        <h3 className="username-display">Hi {user.username}!</h3>


        <form className="avatar-block">
            <div>
              <img src={user.avatar} className="avatar-pic" alt=""></img>
            </div>

            <button
              type="button"
              className="btn-edit"
              onClick={(event) => {
                event.preventDefault()
                setShowForm(true);
              }}
            > 
              Upload a new picture! 
            </button> { showForm ? <Avatar setShowForm={setShowForm}/> : null }
          
          </form>
          
          <form>
          <Form.Group className="about" controlId="aboutForm.ControlTextarea1">
          <Form.Label>About Me: {user.about}</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Tell us something about yourself!"
            rows={3}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <button
            className="edit-button"
            variant="primary"
            size="sm"
            onClick={(event) => {
              event.preventDefault()
              editAbout(about)
            }} >
            Edit
        </button>


        </Form.Group>

        </form>
        {/* <ConfessionForm /> */}
      </body>
    );
  
}
