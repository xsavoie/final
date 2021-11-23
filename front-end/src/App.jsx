import { React, useEffect, useState, useMemo } from 'react';
import socketClient from "socket.io-client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/contexts/UserContext';

import './App.css';
import axios from 'axios';
import ConfessionList from './components/ConfessionsList';
import Top from './components/navbar/Top';
import LoginForm from './components/navbar/LoginForm';
import RegisterForm from './components/navbar/RegisterForm';
import ConfessionForm from './components/ConfessionForm'
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

  useEffect(() => {
    const socket = socketClient("http://localhost:3001", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
  
    socket.on('connection', () => {
      console.log(`I'm connected with the back-end`);
    });
    
  }, [])



  // return(
  //   <div>Hello Chat</div>
  // );





  // const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/confessions")
  //   ]).then((res) => {
  //     console.log(res[0].data)
  //     setConfessions(res[0].data)
  //   })
  // }, []);

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
        {/* <header className="App-header"> */}
        <Top user={user} setUser={setUser} showForm={showForm} setShowForm={setShowForm} />
        {/* <h1>Confessions</h1><br /> */}
        {/* <UserContext.Provider value={providerValue}> */}
        <Routes>

          <Route path="/login" element={<LoginForm setUser={setUser} />}></Route>
          <Route path="/register" element={<RegisterForm setUser={setUser} />}></Route>
          
          <Route path="/home" element={<ConfessionList confessionsToParse={confessions} setConfessions={setConfessions} />}></Route>

        </Routes>
        {showForm && <ConfessionForm confessions={confessions} setConfessions={setConfessions} />}
        <ConfessionList confessionsToParse={confessions} setConfessions={setConfessions} />
        {/* </UserContext.Provider> */}
      </div>
    </BrowserRouter>

  );
}

export default App;




// <Route path='/some-path' render={() =>
//   <Fragment>
//     <FirstChild />
//     <SecondChild />
//   </Fragment>
// } />

