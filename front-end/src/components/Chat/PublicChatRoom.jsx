import React, { useEffect, useState, useContext } from "react";
import './PublicChatRoom.scss'
import io from "socket.io-client";
import { UserContext } from "../contexts/UserContext";
import ChatRoom from './ChatRoom'

const socket = io.connect("http://localhost:3001");

export default function PublicChatRoom(props) {

  const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const room = Math.floor(Math.random() * 1) + 1;

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
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        {/* <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        /> */}
        <button onClick={joinRoom}>Join A Room</button>

      </div>
    ) : (
      <ChatRoom socket={socket} username={username} room={room} />
    )}
  </div>
  )

}