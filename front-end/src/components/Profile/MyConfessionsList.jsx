import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import MyConfessionsListItem from './MyConfessionsListItem';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);




export default function MyConfessionsList(props) {


  const { user, setUser } = useContext(UserContext);
  const [myOwnConfessions, setMyOwnConfessions] = useState([]);
  const [selected, setSelected] = useState(false)

  useEffect(() => { 
    myConfessions(user);
  }, [user]);
  // props.confessions
  
  let myConfessionsArray = [];
  
  // console.log(user)

  function myConfessions(user) {
    const id = user.id 
    // console.log("id from front end myconfessions.js :", id)
    const request = id 
    // console.log("request: ", request)
    axios.get('http://localhost:3000/users/my_confessions', {params: {request}} )
      .then(res => {
        myConfessionsArray = res.data;
        // console.log("myConfessionsArray: ", myConfessionsArray);
        return axios.get('/api/confessions/front_page', { params: { idArray: myConfessionsArray } })
      })
      .then(res => {
        console.log("********", res.data)
        setMyOwnConfessions(res.data)
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const parsedConfessions = myOwnConfessions.map((confession) => (
    <MyConfessionsListItem
      key={confession.id}
      id={confession.id}
      categoryId={confession.category_id}
      content={confession.content}
      createdAt={dayjs(confession.created_at).fromNow()}
      likes={confession.likes}
      comments={confession.comments}
      selected={confession.id === selected}
      setSelected={setSelected}
      myOwnConfessions={myOwnConfessions}
      setMyOwnConfessions={setMyOwnConfessions}
      // confessionState={props.confessions}
      // setConfessions={props.setConfessions}
      // confessionsToUpdate={props.confessionsToUpdate}
    />
  ));



  // //Convert to myconfessionObj
  // function displayMyConfessions(setMyOwnConfessions){
  //   // let result = {};
  //   // for (let item of myOwnConfessions){
  //   //   result['id'] = 
  //   // } 

  // }


  return(

    <div className="myConfessions"> 
      <ul>{parsedConfessions}</ul>
    </div>

  );

}

