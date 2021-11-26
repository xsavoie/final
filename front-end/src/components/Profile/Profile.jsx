import React, { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './profile.scss';
import axios from "axios";

import ConfessionForm from "../Confession/ConfessionForm";
import Avatar from "./Avatar";
import AboutMe from "./AboutMe";



export default function Profile(props) {

  const { user, setUser } = useContext(UserContext);
  const [showAvatarForm, setShowAvatarForm] = useState(false)
  const [showAboutMeForm, setShowAboutMeForm] = useState(false)
 
 
  // https://i.imgur.com/O1t7wwB.jpeg
  // https://i.imgur.com/5KfNDSg.jpeg

  


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
                setShowAvatarForm(true);
              }}
            > 
              Upload a new picture! 
            </button> { showAvatarForm ? <Avatar setShowAvatarForm={setShowAvatarForm}/> : null }
          </form>


          <form className="about-block">
          <div> About Me: {user.about} </div>
            <button
              type="button"
              className="btn-edit"
              onClick={(event) => {
                event.preventDefault()
                setShowAboutMeForm(true);
              }}
            > 
            
              Edit about me! 
            </button> { showAboutMeForm ? <AboutMe setShowAboutMeForm={setShowAboutMeForm}/> : null }
          </form>
          

    );
  
}
