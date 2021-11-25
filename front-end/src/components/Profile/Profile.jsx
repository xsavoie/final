

import React, { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './profile.scss';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ConfessionForm from "../Confession/ConfessionForm";
import './profile.scss';



export default function Profile(props) {

  const { user } = useContext(UserContext);

  const [about, setAbout] = useState();
  const [avatar, setAvatar] = useState();

  const inputFile = useRef(null)

  function editAvatar() {
  
    const avatar = '🤬';
    const id = user.id 
    const request = {
      avatar,
      id
    }
    // console.log("request", request)
    console.log("edit avatar request object: ", request)
    axios.put('http://localhost:3000/users', request)
      .then(res => {
        console.log("res.data.data from editAvatar function :", res.data.data)
        const newAvatar = res.data.data;
        setAvatar = newAvatar;
        alert("Avatar updated in database");
      })
      .catch(err => {
        console.log(err.message);
      })
  }


  function editAbout(event) {
    // const about = event.target.value
    const id = user.id 
    const request = {
      about,
      id
    }
    console.log("edit about", request)
    axios.put('http://localhost:3000/users', request)
      .then(res => {
        alert("About updated in database");
      })
      .catch(err => {
        console.log(err.message);
      })
  }


  

    return (
      <div>
        <h1>Hi {user.username}!</h1>
        <form className="avatar-block">
          <div className="avatar-pic">
            <img src = "https://avatars.dicebear.com/api/bottts/your-custom-seed.svg" ></img>
          </div>
          {/* <input type="text" ref={inputFile} placeholder="Enter the link to your pic"></input> */}
          
          <button
            type="button"
            className="btn-edit"
            onClick={(event) => {
              event.preventDefault()
              editAvatar()
            }} > 
            Add new Emoji! 
          </button> 
        
          <Form.Group className="about" controlId="aboutForm.ControlTextarea1">
          <Form.Label>About Me: {user.about}</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Tell us something about yourself!"
            rows={3}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <Button
            variant="primary"
            size="sm"
            onClick={(event) => {
              event.preventDefault()
              editAbout(user.id, about)
              // has to hide the form after submission 
            }} >
            Edit
        </Button>


        </Form.Group>

        </form>
        <ConfessionForm />
      </div>
    );
  
}