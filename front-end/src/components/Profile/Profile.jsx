import React, { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './profile.scss';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ConfessionForm from "../Confession/ConfessionForm";
import './profile.scss';



export default function Profile(props) {

  const { user, setUser } = useContext(UserContext);

  const [about, setAbout] = useState("");
  const [avatar, setAvatar] = useState("");

  // https://i.imgur.com/O1t7wwB.jpeg
  // https://i.imgur.com/5KfNDSg.jpeg


  function editAvatar(avatar) {
  
    // const avatar = '🤬';
    const id = user.id 
    const request = {
      avatar,
      id
    }
    // console.log("request", request)
    console.log("edit avatar request object: ", request)
    axios.put('http://localhost:3000/users/avatar', request)
      .then(res => {
        console.log("res.data.data from editAvatar function :", res.data.data)
        // const newAvatar = res.data.data;
        // setAvatar = newAvatar;
        setAvatar("");
        sessionStorage.removeItem("user")
        return setUser(prev => ({ ...prev, avatar: res.data.data}))
        // alert("Avatar updated in database");
      }).then(user => {
        console.log("*****", user)
        sessionStorage.setItem("user", JSON.stringify(user))
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // console.log("random", user)

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
      <div>
        <h1>Hi {user.username}!</h1>
        <form className="avatar-block">
          <div className="avatar-pic">
            <img src ={user.avatar} alt=""></img>
          </div>
          {/* <input type="text" ref={inputFile} placeholder="Enter the link to your pic"></input> */}
          
          <button
            type="button"
            className="btn-edit"
            onClick={(event) => {
              event.preventDefault()
              editAvatar(avatar)
            }} > 
            Add new Emoji! 
          </button> 
            <input type="text" value={avatar} onChange={(event) => setAvatar(event.target.value)}></input>
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
              editAbout(about)
              // has to hide the form after submission 
            }} >
            Edit
        </Button>


        </Form.Group>

        </form>
        {/* <ConfessionForm /> */}
      </div>
    );
  
}
