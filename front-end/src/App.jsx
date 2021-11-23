import { React, useEffect, useState, useMemo } from 'react';
import socketClient from "socket.io-client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/contexts/UserContext';

import './App.css';
import axios from 'axios';
import ConfessionList from './components/Confession/ConfessionsList'
import Top from './components/navbar/Top';
import LoginForm from './components/navbar/LoginForm';
import RegisterForm from './components/navbar/RegisterForm';
import ConfessionForm from './components/Confession/ConfessionForm'
import Chat from './components/Chat/Chat';
// import ConfessionListItem from './components/ConfessionsListItem';
// import Login from './components/login';
// import Register from './components/register';
// import CommentsList from './components/Comments/CommentsList';
// import ConfessForm from './components/navbar/ConfessForm';

// const io = require("socket.io-client");
const SERVER = "http://localhost:3000";


function App() {

  const [confessions, setConfessions] = useState([]);
  const [user, setUser] = useState(null)
  const [showForm, setShowForm] = useState(false)


  // const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  // check if current user is logged in
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const currentUser = JSON.parse(loggedInUser)
      setUser(currentUser)
    }
  }, [])

  useEffect(() => {
    Promise.all([
      axios.get("/api/confessions/most_recent")
    ]).then((res) => {
      const mostRecentId = res[0].data;
      // const mostRecentId = 10;
      return axios.get(`/api/confessions/front_page/${mostRecentId}`);
    })
      .then((res) => {
        // console.log(res.data)
        setConfessions(res.data)
      })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Top user={user} setUser={setUser} showForm={showForm} setShowForm={setShowForm} />
        {/* <Chat/> */}
        {/* <UserContext.Provider value={providerValue}> */}
        {showForm && <ConfessionForm confessions={confessions} setConfessions={setConfessions} />}
        <Routes>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/" element={<ConfessionList confessionsToParse={confessions} setConfessions={setConfessions} />} ></Route>
          {/* <Route path="" element={} ></Route> */}

          <Route path="/login" element={<LoginForm setUser={setUser} />}></Route>
          <Route path="/register" element={<RegisterForm setUser={setUser} />}></Route>
        </Routes>
        {/* </UserContext.Provider> */}
      </div>
    </BrowserRouter>

  );
}

export default App;