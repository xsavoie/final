import React, { useRef, useEffect, useState, useContext, Fragment } from "react";
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

    <div className="profile__page">
      <div className="profile__top">
        <div className="name-avatar-container">
          <h3 className="username-display">Hello {user.username}!</h3>
          <img src={user.avatar} className="avatar-pic" alt=""></img>
          <div className="btn-avatar-position">
            {!showAvatarForm &&<button
              type="button"
              className="btn-avatar"
              onClick={(event) => {
                event.preventDefault()
                setShowAvatarForm(!showAvatarForm);
              }}
            >
              Upload a new picture!
            </button> }
          </div>
          {showAvatarForm ? <Avatar setShowAvatarForm={setShowAvatarForm} /> : null}
        </div>
        <div className="about-confessions-container">
          <form className="about-block">
            <div className="about_me">About me</div>
            <div className="about-me-label">{user.about} </div>
            <div className="edit_button_position">
              {!showAboutMeForm && <button
                type="button"
                className="btn-edit"
                onClick={(event) => {
                  event.preventDefault()
                  setShowAboutMeForm(!showAboutMeForm);
                }} >
                Edit about me!
              </button> }
            </div>
            {showAboutMeForm ? <AboutMe setShowAboutMeForm={setShowAboutMeForm} /> : null}
          </form>
        </div>
      </div>
      <div className="confession-container">
            
           <MyConfessionsList confessions={props.confessions} />
            
      </div>
    </div>


  );

}
