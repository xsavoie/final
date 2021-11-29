import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './profile.scss';

import Avatar from "./Avatar";
import AboutMe from "./AboutMe";
import MyConfessionsList from './MyConfessionsList'




export default function Profile(props) {

  const { user } = useContext(UserContext);
  const [showAvatarForm, setShowAvatarForm] = useState(false)
  const [showAboutMeForm, setShowAboutMeForm] = useState(false)


  // https://i.imgur.com/O1t7wwB.jpeg
  // https://i.imgur.com/5KfNDSg.jpeg


  return (

    <div className="profile-page">
      <div className="name-avatar-container">
        <h3 className="username-display">Hi {user.username}!</h3>
        {/* <div> */}
        <img src={user.avatar} className="avatar-pic" alt=""></img>
        {/* </div> */}
        {/* <form className="avatar-block"> */}
        <button
          type="button"
          className="btn-avatar"
          onClick={(event) => {
            event.preventDefault()
            setShowAvatarForm(!showAvatarForm);
          }}
        >
          Upload a new picture!
        </button>
        {showAvatarForm ? <Avatar setShowAvatarForm={setShowAvatarForm} /> : null}
        {/* </form> */}
        <div className="about-confessions-container">
          <form className="about-block">
            <div className="about-me-label"> About Me: <br />{user.about} </div>
            <button
              type="button"
              className="btn-edit"
              onClick={(event) => {
                event.preventDefault()
                setShowAboutMeForm(!showAboutMeForm);
              }} >
              Edit about me!
            </button> {showAboutMeForm ? <AboutMe setShowAboutMeForm={setShowAboutMeForm} /> : null}
          </form>

          <div className="confession-container">
            {/* <ConfessionForm /> */}
            <MyConfessionsList confessions={props.confessions} />
          </div>
        </div>
      </div>
    </div>


  );

}
