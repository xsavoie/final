import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";



export default function MyConfessions(props) {

  const { user, setUser } = useContext(UserContext);

  function myConfessions(about) {
    const id = user.id 
    console.log("id from front end myconfessions.js :", id)
    const request = id 
    console.log("request: ", request)
    axios.get('http://localhost:3000/users/my_confessions', {params: {request}} )
      .then(res => {
        
        console.log("res.data front end my confessions jsx: ", res.data);
       
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return(

    <div className="myConfessions">
      Hello my confessions

      <button
            className="my-confessions-button"
            onClick={(event) => {
              event.preventDefault();
              myConfessions();
            }} >
            My Confessions
          </button>

    </div>

  );

}

