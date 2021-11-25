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
import ConfessionListItem from './components/Confession/ConfessionsListItem';

// const io = require("socket.io-client");
const SERVER = "http://localhost:3000";


function App() {

  const { setUser } = useContext(UserContext);
  const [confessions, setConfessions] = useState([]);
  // refactor to use mode instead of multiple state to display component
  const [showForm, setShowForm] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [confessionFeed, setConfessionFeed] = useState("recent");


  // const [clicker, setClicker] = useState(0);
  const [buttonTest, setButtonTest] = useState({
    type: "next",
    clicker: 0
  })

  const [idHistory, setIdHistory] = useState([]);

  // let buttonType = "";
  // console.log(buttonType)

  // const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  const filterHistory = (history, current) => {
    let filteredArray = [];

    for (const id of current) {
      if (!history.includes(id)) {
        filteredArray.push(id);
      };
    };
    return filteredArray;
  };

  const handleHistory = (prev, current) => {
    const prevCopy = [...prev];
    for (const id of current) {
      prevCopy.push(id);
    }
    return prevCopy;
  };

  // goes back to past confessions
  const handleConfessionBack = (history) => {
    const historyToReturn = [...history];
    const historyLength = historyToReturn.length;
    let idToDisplay = historyToReturn.splice((historyLength - 10), historyLength);
    setIdHistory(historyToReturn);
    // console.log("to display", idToDisplay)
    return idToDisplay;
  };

  // Loads more confessions
  const handleConfessionNext = (history, current) => {
    const filteredId = filterHistory(history, current);
    const idToDisplay = filteredId.splice(0, 10);
    setIdHistory(prev => handleHistory(history, idToDisplay));
    // console.log("to display", idToDisplay)
    return idToDisplay;
  };


  // const handleButtonNext = () => {
  //   setButtonTest((prevState) => ({
  //     type: "next",
  //     clicker: prevState.clicker +1
  //   }))
  // }

  async function handleButtonNext() {
    setButtonTest((prevState) => ({
      type: "next",
      clicker: prevState.clicker + 1
    }))
  }
  async function handleButtonBack() {
    setButtonTest((prevState) => ({
      type: "back",
      clicker: prevState.clicker + 1
    }))
  }

  // const handleButtonBack = () => {
  //   setButtonTest((prevState) => ({
  //     type: "back",
  //     clicker: prevState.clicker +1
  //   }))
  // }


  const queryHandler = (idArray, buttonType) => {
    if (buttonType === "next") {
      console.log("after if statement", buttonType)
      console.log("!!!!next!!!!")
      return handleConfessionNext(idHistory, idArray);
    }
    if (buttonType === "back") {
      console.log("after if statement", buttonType)
      console.log("!!!!back!!!!")
      return handleConfessionBack(idHistory);
    }
  }

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
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const currentUser = JSON.parse(loggedInUser);
      setUser(currentUser);
    };
  }, [setUser]);


  // load confession feed with next
  useEffect(() => {
    if (confessionFeed === "recent") {
      Promise.all([
        axios.get("/api/confessions/most_recent")
      ]).then((res) => {
        const idArray = res[0].data;
        const idToDisplay = queryHandler(idArray, buttonTest.type)
        // const idToDisplay = handleConfessionNext(idHistory, idArray);

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
        const idToDisplay = handleConfessionNext(idHistory, idArray);

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
        const idToDisplay = handleConfessionNext(idHistory, idArray);

        return validateQuery(idToDisplay);
      }).then((res) => {
        setConfessions(res.data);
      }).catch(err => {
        console.log(err.message);
      });
    };
  }, [confessionFeed, buttonTest.clicker]);

  useEffect(() => {

  }, [])

  const [polls, setPolls] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get("/api/polls/polls")
    ]).then((res) => {
      // console.log("*******", res[0].data)
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
        <span className="feed-btn">
          {(idHistory.length > 10) && <Button
            variant="primary"
            size="sm"
            className="back"
            onClick={() => {
              handleButtonBack()
              // setClicker(clicker + 1)
              // console.log(clicker)
            }}>back
          </Button>}
          <Button
            variant="primary"
            size="sm"
            className="next"
            onClick={() => {
              handleButtonNext()
              // setClicker(clicker + 1)
              // console.log(clicker)
            }}>load more
          </Button>
        </span>
        {showForm && <ConfessionForm confessions={confessions} setConfessions={setConfessions} setShowForm={setShowForm} />}

        <Routes>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/" element={!showLogin && !showRegister && <ConfessionList confessionsToParse={confessions} setConfessions={setConfessions} />} ></Route>
          <Route path="polls" element={<PollsList polls={polls} />} ></Route>
          {/* <Route path="/profile" element={<ConfessionList/>} ></Route> */}
        </Routes>
        <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} showRegister={showRegister} setShowRegister={setShowRegister} />
        <RegisterForm showRegister={showRegister} setShowRegister={setShowRegister} showLogin={showLogin} setShowLogin={setShowLogin} />
      </div>
    </BrowserRouter>

  );
}

export default App;


 // let idToDisplay = [];
        // if (buttonTest.type === "next") {
        //   console.log("!!!!next!!!!")
        //   idToDisplay = handleConfessionNext(idHistory, idArray);
        // }
        // if (buttonTest.type === "back") {
        //   console.log("!!!!back!!!!")
        //   idToDisplay = handleConfessionBack(idHistory);
        // }

        // const handleButtonNext = () => {
  //   console.log("BEFORE", buttonTest)
  //   setButtonTest("next", setClicker(clicker + 1));
  //   console.log(clicker)
  //   console.log("FROM INSIDE BUTTON NEXT", buttonTest)
  //   return;
  // }

  // const handleButtonBack = () => {
  //   console.log("BEFORE", buttonTest)
  //   setButtonTest("back");
  //   console.log("FROM INSIDE BUTTON BACK", buttonTest)
  //   return;
  // }