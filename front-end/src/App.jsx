import { React, useEffect, useState, useContext } from 'react';
// import socketClient from "socket.io-client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/contexts/UserContext';


import './App.css';
import axios from 'axios';
// import ConfessionList from './components/Confession/ConfessionsList';
import Top from './components/navbar/Top';
import LoginForm from './components/navbar/LoginForm';
import RegisterForm from './components/navbar/RegisterForm';
import ConfessionForm from './components/Confession/ConfessionForm';
// import Button from 'react-bootstrap/Button'
import Chat from './components/Chat/Chat';
import Profile from './components/Profile/Profile';
import PollsList from './components/polls/PollsList';
// import ConfessionListItem from './components/Confession/ConfessionsListItem';
import ConfessionDisplay from './components/Confession/ConfessionDisplay';
import PollsForm from './components/polls/PollsForm'

// const io = require("socket.io-client");
const SERVER = "http://localhost:3000";


function App() {

  const { user, setUser } = useContext(UserContext);
  const [confessions, setConfessions] = useState([]);
  // refactor to use mode instead of multiple state to display component
  const [showForm, setShowForm] = useState(false);
  const [showPollForm, setShowPollForm] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [confessionFeed, setConfessionFeed] = useState("recent");
  const [pageToDisplay, setPageToDisplay] = useState(1);
  const [totalVotes, setTotalVotes] = useState([]);


  // const providerValue = useMemo(() => ({user, setUser}), [user, setUser])



  const validateQuery = (idToDisplay) => {
    if (idToDisplay.length < 10) {
      console.log("idToDisplay length", idToDisplay.length);
      console.log("***not enough confessions to render");
      return;
    }
    return axios.get(`/api/confessions/front_page`, { params: { idArray: idToDisplay } });
  }


  // check if current user is logged in
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user")
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      // console.log("********", user.id)
      axios.get(`/users/validate/${user.id}`)
        .then(user => {
          const loggedUser = user.data[0];
          // console.log(user.data[0])
          setUser(loggedUser)
        })
      // const currentUser = JSON.parse(loggedInUser);
      // setUser(currentUser);
    };
  }, [setUser]);


  // load confession feed with next
  useEffect(() => {
    if (confessionFeed === "recent") {
      Promise.all([
        axios.get("/api/confessions/most_recent")
      ]).then((res) => {
        const idArray = res[0].data;
        const idToDisplay = idArray;

        return validateQuery(idToDisplay);
      }).then((res) => {
        setConfessions(res.data);
      }).catch(err => {
        console.log(err.message);
      });
    };

    if (confessionFeed === "popular") {
      Promise.all([
        axios.get("/api/confessions/most_recent/popular")
      ]).then((res) => {
        const idArray = res[0].data;
        const idToDisplay = idArray

        return validateQuery(idToDisplay);
      }).then((res) => {
        setConfessions(res.data);
      }).catch(err => {
        console.log(err.message);
      });
    };

    if (typeof confessionFeed === "number") {
      Promise.all([
        axios.get("/api/confessions/most_recent/category", { params: { confessionFeed } })
      ]).then((res) => {
        const idArray = res[0].data;
        const idToDisplay = idArray;

        return validateQuery(idToDisplay);
      }).then((res) => {
        setConfessions(res.data);
      }).catch(err => {
        console.log(err.message);
      });
    };
  }, [confessionFeed]);


  const [polls, setPolls] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/api/polls/most_recent")
    ]).then((res) => {
      // console.log("*******RES", res[0].data)
      const idToDisplay = res[0].data
      return axios.get("/api/polls/polls", { params: { idToDisplay } })
    }).then(res => {
      // console.log("HERE", res.data)
      setPolls(res.data)
    })
  }, []);


  console.log(user)

  useEffect(() => {
    Promise.all([
      axios.get("/api/polls/results")
    ]).then((res) => {
      // console.log("*******votes", res[0].data)
      setTotalVotes(res[0].data)
    })
  }, []);

  // console.log(polls)


  return (
    <BrowserRouter>
      <div className="App">

        <Top
          showForm={showForm}
          setShowForm={setShowForm}
          setConfessionFeed={setConfessionFeed}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          setPageToDisplay={setPageToDisplay}
          showPollForm={showPollForm}
          setShowPollForm={setShowPollForm}
        />
        {showForm && <ConfessionForm confessions={confessions} setConfessions={setConfessions} setShowForm={setShowForm} setPageToDisplay={setPageToDisplay} />}
        {showPollForm && <PollsForm polls={polls} setPolls={setPolls} />}
        <Routes>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/Profile" element={<Profile confessions={confessions}/>}></Route>
          <Route path="/" element={!showLogin && !showRegister && <ConfessionDisplay confessions={confessions} setConfessions={setConfessions} pageToDisplay={pageToDisplay} setPageToDisplay={setPageToDisplay} />} ></Route>
          <Route path="/polls" element={<PollsList polls={polls} setPolls={setPolls} totalVotes={totalVotes} setTotalVotes={setTotalVotes}/>} ></Route>

        </Routes>
        <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} showRegister={showRegister} setShowRegister={setShowRegister} />
        <RegisterForm showRegister={showRegister} setShowRegister={setShowRegister} showLogin={showLogin} setShowLogin={setShowLogin} />
      </div>
    </BrowserRouter>

  );
}

export default App;