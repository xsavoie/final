import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

 
export default function Profile(props) {
  
  const { user } = useContext(UserContext);


    return (
      <div>
        <h1>Hi {user.username}!</h1>
        <p> Add Avatar  </p>
        <p>About Me input box</p>
        <p>My Confessions (confessions that i've posted)</p>
      </div>
    );
  
}
 
