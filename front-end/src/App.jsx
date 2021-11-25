import { React, useEffect, useState, useContext } from 'react';
// import socketClient from "socket.io-client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/contexts/UserContext';

import './App.css';
import axios from 'axios';
import ConfessionList from './components/Confession/ConfessionsList';
import Top from './components/navbar/Top';
import LoginForm from './components/navbar/LoginForm';
import RegisterForm from './components/navbar/RegisterForm';
import ConfessionForm from './components/Confession/ConfessionForm';
import Button from 'react-bootstrap/Button'
import Chat from './components/Chat/Chat';
import Profile from './components/Profile/Profile';
import PollsList from './components/polls/PollsList';

// const io = require("socket.io-client");
const SERVER = "http://localhost:3000";


function App() {

  const { setUser } = useContext(UserContext);
  const [confessions, setConfessions] = useState([]);
  // refactor to use mode instead of multiple state to display component
  const [showForm, setShowForm] = useState(false);
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  const [confessionFeed, setConfessionFeed] = useState("recent");
  const [clicker, setClicker] = useState(0)

  const [idHistory, setIdHistory] = useState([])

  const filterHistory = (history, current) => {
    let filteredArray = []

    for (const id of current) {
      if (!history.includes(id)) {
        filteredArray.push(id)
      }
    }
    return filteredArray
  }

  const handleHistory = (prev, current) => {
    const prevCopy = [...prev]
    for (const id of current) {
      prevCopy.push(id)
    }
    return prevCopy;
  }

  // const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  // check if current user is logged in
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const currentUser = JSON.parse(loggedInUser)
      setUser(currentUser)
    }
  }, [setUser]);

  // NEED --> check if there is at least 10 id's left before doing axios
  // load confession feed
  useEffect(() => {
    if (confessionFeed === "recent") {
      Promise.all([
        axios.get("/api/confessions/most_recent")
      ]).then((res) => {
        const idArray = res[0].data;
        const filteredId = filterHistory(idHistory, idArray)
        const idToDisplay = filteredId.splice(0, 10)
        setIdHistory(prev => handleHistory(prev, idToDisplay))

        return axios.get(`/api/confessions/front_page`, { params: { idArray: idToDisplay } });
      }).then((res) => {
        // console.log(res.data);
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
        const filteredId = filterHistory(idHistory, idArray)
        const idToDisplay = filteredId.splice(0, 10)
        setIdHistory(prev => handleHistory(prev, idToDisplay))
        // console.log(idArray);
        return axios.get(`/api/confessions/front_page`, { params: { idArray } });
      }).then((res) => {
        // console.log(res.data);
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
        const filteredId = filterHistory(idHistory, idArray)
        const idToDisplay = filteredId.splice(0, 10)
        setIdHistory(prev => handleHistory(prev, idToDisplay))
        // console.log(idArray)
        return axios.get(`/api/confessions/front_page`, { params: { idArray } });
      }).then((res) => {
        // console.log(res.data);
        setConfessions(res.data);
      }).catch(err => {
        console.log(err.message);
      });
    };
  }, [confessionFeed, clicker]);

  useEffect(() => {

  }, [])

  const [polls, setPolls] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get("/api/polls/polls")
    ]).then((res) => {
      console.log("*******", res[0].data)
      setPolls(res[0].data)
    })
  }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <Top
          showForm={showForm}
          setShowForm={setShowForm}
          setConfessionFeed={setConfessionFeed}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          setIdHistory={setIdHistory}
        />
        {showForm && <ConfessionForm confessions={confessions} setConfessions={setConfessions} setShowForm={setShowForm} />}

        <Routes>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/" element={!showLogin && !showRegister && <ConfessionList confessionsToParse={confessions} setConfessions={setConfessions} />} ></Route>
          <Route path="polls" element={<PollsList polls={polls}/>} ></Route>
          {/* <Route path="/profile" element={<ConfessionList/>} ></Route> */}
        </Routes>
        <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} showRegister={showRegister} setShowRegister={setShowRegister} />
        <RegisterForm showRegister={showRegister} setShowRegister={setShowRegister} showLogin={showLogin} setShowLogin={setShowLogin} />
        <Button
          variant="primary"
          size="sm"
          className="test"
          onClick={() => {
            setClicker(clicker + 1)
            console.log(clicker)
          }}>load more
        </Button>
      </div>
    </BrowserRouter>

  );
}

export default App;