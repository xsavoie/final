
import React, { useEffect, useState, useContext } from "react";
import './Chat.scss'
import socketClient from "socket.io-client";
import { UserContext } from "../contexts/UserContext";



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
  const { user } = useContext(UserContext);

  // pass username from props later
  // const userName = 'User'+parseInt(Math.random()*10);
  const userName = user.username;

  useEffect(()=> {
    socket.on('message', (payload) => {
      setChat([...chat, payload])
    })
  })

  

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('message', {userName, message});
    console.log(message);
    setMessage('');
  }

    return (
      <div className="chat-container" >
        <form className="chat-form" onSubmit={event => event.preventDefault()}>
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
        <div>
        {chat.map((payload, index) => {
          return(
            <h4>{payload.userName} : <span>{payload.message}</span></h4>
          )
        })}
        </div>
      </div>
    );

}