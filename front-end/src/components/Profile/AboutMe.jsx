import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import './AboutMe.scss'

export default function AboutMe(props) {

  const { user, setUser } = useContext(UserContext);
  const [about, setAbout] = useState(user.about || "");
  const { setShowAboutMeForm } = props;


  function editAbout(about) {
    const id = user.id 
    const request = {
      about,
      id
    }
    axios.put('http://localhost:3000/users/about_me', request)
      .then(res => {
        setUser(prev => ({ ...prev, about: about}))
        setAbout("");
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return(

    <form className="text_box">
      <Form.Group className="about" controlId="aboutForm.ControlTextarea1">
      <div>
        <Form.Control
          // className="text_box"
          as="textarea"
          placeholder="Tell us something about yourself!"
          rows={3}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        </div>
        <div className="about-edit-button-possition">
        <button
            // variant="primary"
            className="about-edit-button"
            size="sm"
            onClick={(event) => {
              event.preventDefault();
              editAbout(about);
              setShowAboutMeForm(false);
            }} >
            Edit
          </button>
          </div>
        </Form.Group>
    </form>

  );

}


