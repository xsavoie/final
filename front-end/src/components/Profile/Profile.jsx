import React, { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './profile.scss';

import axios from "axios";


import ConfessionForm from "../Confession/ConfessionForm";
import ConfessionList from '../Confession/ConfessionsList';
import Avatar from "./Avatar";
import AboutMe from "./AboutMe";
import MyConfessionsList from './MyConfessionsList' 




export default function Profile(props) {

  const { user, setUser } = useContext(UserContext);
  const [showAvatarForm, setShowAvatarForm] = useState(false)
  const [showAboutMeForm, setShowAboutMeForm] = useState(false)
 
 
  // https://i.imgur.com/O1t7wwB.jpeg
  // https://i.imgur.com/5KfNDSg.jpeg


    return (
      
      <body className="profile-page"> 

      <div className="name-avatar-container">
        
        <h3 className="username-display">Hi {user.username}!</h3>

        <form className="avatar-block">
            <div>
              <img src={user.avatar} className="avatar-pic" alt=""></img>
            </div>
            <button
              type="button"
              className="btn-avatar"
              onClick={(event) => {
                event.preventDefault()
                setShowAvatarForm(true);
              }}
            > 
              Upload a new picture! 
            </button> { showAvatarForm ? <Avatar setShowAvatarForm={setShowAvatarForm}/> : null }
        </form>

        </div>

        <div className="about-confessions-container">

        <form className="about-block">
          <div className="about-me-label"> About Me: <br/>{user.about} </div>
          <button
            type="button"
            className="btn-edit"
            onClick={(event) => {
              event.preventDefault()
              setShowAboutMeForm(true);
            }} > 
          Edit about me! 
          </button> { showAboutMeForm ? <AboutMe setShowAboutMeForm={setShowAboutMeForm}/> : null }
        </form>

            <div className="confession-container">
              {/* <ConfessionForm /> */}
              <MyConfessionsList confessions={props.confessions}/>
       
            </div>

            </div>


      </body>

    );
  
}