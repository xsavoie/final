import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import  './Avatar.scss'

export default function Avatar(props){

    // https://i.imgur.com/O1t7wwB.jpeg
  // https://i.imgur.com/5KfNDSg.jpeg

  const { user, setUser } = useContext(UserContext);
 const [avatar, setAvatar] = useState("");
 const { setShowAvatarForm } = props;

  function editAvatar(avatar) {
    
    const id = user.id 
    const request = {
      avatar,
      id
    }
    axios.put('http://localhost:3000/users/avatar', request)
      .then(res => {
        setAvatar("");
        return setUser(prev => ({ ...prev, avatar: res.data.data}))
      }).then(user => {
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return(
    <form>
      
      <input type="text" value={avatar} placeholder="https://" onChange={(event) => setAvatar(event.target.value)}></input>

      <button
        type="button"
        className="avatar-edit-btn"
        onClick={(event) => {
          event.preventDefault();
          editAvatar(avatar);
          setShowAvatarForm(false);
        }} > 
        Upload 
      </button> 

    </form>
  );
}