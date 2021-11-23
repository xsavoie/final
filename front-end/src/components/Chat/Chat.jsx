
import React, { useEffect, useState } from "react";

import axios from "axios";

import socketClient from "socket.io-client";

const socket = socketClient("http://localhost:3001", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

socket.on('connection', () => {
  console.log(`I'm connected with the back-end`);
});

export default function Chat(props) {

  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(()=> {
    socket.on('message', (payload) => {
      setChat([...chat, payload])
    })
  })

  

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('message', {message});
    console.log(message);
    setMessage('');
  }

    return (
      <div className="base-container" >
        <form onSubmit={event => event.preventDefault()}>
        <div className="header"> Chat</div>
          
            <div className="form-group">
              <label htmlFor="chat_message">Message</label>
              <input id="chat_message" type="text" name="chat_message" placeholder="What's going on?" 
              value = {message}
              onChange={(event) => {setMessage(event.target.value)}}
              required
              />
            </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={sendMessage}>
            Send Message
          </button>
        </div>

        </form>
        {chat.map((payload, index) => {
          return(
            <h3>{payload.message}</h3>
          )
        })}
      </div>
    );

}