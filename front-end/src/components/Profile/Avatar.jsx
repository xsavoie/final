import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function Avatar(props){

  const { user, setUser } = useContext(UserContext);
 const [avatar, setAvatar] = useState("");
 const { setShowForm } = props;

  function editAvatar(avatar) {
    
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

  return(
    <form>
      
      <input type="text" value={avatar} placeholder="https://" onChange={(event) => setAvatar(event.target.value)}></input>

      <button
        type="button"
        className="btn-edit"
        onClick={(event) => {
          event.preventDefault();
          editAvatar(avatar);
          setShowForm(false);
        }} > 
        Upload 
      </button> 

    </form>
  );
}