

import React, { Component, useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './profile.scss';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ConfessionForm from "../Confession/ConfessionForm";



export default function Profile(props) {

  const { user } = useContext(UserContext);

  const [about, setAbout] = useState("");

  function editAvatar(event) {
    // event.preventDefault();
    const avatar = '🤬';
    const id = user.id 
    const request = {
      avatar,
      id
    }
    // console.log("request", request)
    axios.post('http://localhost:3000/:id', request)
      .then(res => {

        alert("Avatar updated in database");
      })
      .catch(err => {
        console.log(err.message);
      })
  }


  function editAbout(event) {
    // event.preventDefault();
    const about = 'hello about updated with hardcoded value';
    const id = user.id 
    const request = {
      about,
      id
    }
    // console.log("request", request)
    axios.post('http://localhost:3000/:id', request)
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


        <form>
          <div className="avatar">{user.avatar} </div>
          <button
            type="button"
            className="btn-edit"
            onClick={(event) => {
              event.preventDefault();
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
            onChange={(event) => setAbout(event.target.value)}
          />
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              editAbout(user.id, about)
              setAbout("")
              // hides form after submission
              // props.setShowForm(false)
            }} >
            Edit
        </Button>


        </Form.Group>

        </form>
        <p><ConfessionForm /></p> 
      </div>
    );
  
}