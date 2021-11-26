import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import Form from 'react-bootstrap/Form';

export default function AboutMe(props) {

  const { user, setUser } = useContext(UserContext);
  const [about, setAbout] = useState("");
  const { setShowAboutMeForm } = props;


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
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return(

    <form>
          <Form.Group className="about" controlId="aboutForm.ControlTextarea1">
          
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
              event.preventDefault();
              editAbout(about);
              setShowAboutMeForm(false);
            }} >
            Edit
        </button>
        </Form.Group>
        </form>

  );

}