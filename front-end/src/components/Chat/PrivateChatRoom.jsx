import React, { useEffect, useState, useContext } from "react";
import './PrivateChatRoom.scss'
import io from "socket.io-client";
import { UserContext } from "../contexts/UserContext";
import ChatRoom from './ChatRoom'

const socket = io.connect("http://localhost:3002");

export default function Chat(props) {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  
  return (
    <div className="Chat">
     {!showChat ? (
      <div className="joinChatContainer">

        <h3>Create a private chat room and invite your friends to join.</h3>
        
        
        <input
          type="text"
          placeholder="Enter a Nickname"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter a name for the room"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        /> 
        <button onClick={joinRoom}>Create Room</button>
        {/* <h1> Share the name of your room with your friends.</h1> */}
      </div>
    ) : (
      <ChatRoom socket={socket} username={username} room={room} />
    )}
  </div>
  )

}