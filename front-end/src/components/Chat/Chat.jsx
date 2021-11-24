
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

  // const {time, setTime} = useContext();

  const time = new Date().toLocaleString();

  const userName = user.username;

  useEffect(()=> {
    socket.on('message', (payload) => {
      setChat([...chat, payload])
    })
  });

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('message', {userName, message, time});
    console.log(message);
    setMessage('');
  }

    return (
      <body>
      <div className="chat-container" >

        <div className="chat_message_container">
          {chat.map((payload, index) => {
            return(
              <h5><b>{payload.userName}</b> : <span> {payload.message} </span><br/>
                <span> sent at:{payload.time} </span>
              </h5>
            )
          })}
        </div>

        <form className="chat-form" onSubmit={event => event.preventDefault()}>
        <div className="header">
          
            <h3> Hi {userName}! </h3></div>
          
            <div className="form-group">
              {/* <label htmlFor="chat_message"> Message </label> <br/> */}
              <input id="chat_message" type="text" name="chat_message" placeholder="What's going on?" 
              value = {message}
              onChange={(event) => {setMessage(event.target.value)}}
              required
              style={{width: "500px"}}
              />
            </div> <br/>
        <div className="footer">
          <button className="footer__btn" type="submit" onClick={sendMessage}>
            Send Message
          </button>
        </div>

        </form> <br/><br/><br/>

      </div>
      </body>
    );

}