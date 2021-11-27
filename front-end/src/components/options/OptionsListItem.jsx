import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './OptionsListItem.scss'
// import OptionsForm from "./OptionsForm"
import { UserContext } from "../contexts/UserContext";


export default function OptionsListItem(props) {
  // const [voteData, setVoteData] = useState();
  // const [totalVotes, setTotalVotes] = useState(0);
  // const [voted, setVoted] = useState(false);

  const { user } = useContext(UserContext);
  const [voted, setVoted] = useState(false);

  // console.log("pollid", props.pollId)

  // // check if user liked current post
  // useEffect(() => {
  //   if (user.id) {
  //     const pollInfo = {
  //       userId: user.id,
  //       pollId: props.pollId
  //     };
  //     console.log("infoooooo",pollInfo)
  //     return axios.get("/api/confessions/likes/verify", { params: { pollInfo } })
  //       .then(res => {
  //         // console.log("RES", res.data)
  //         if (res.data) {
  //           setVoted(true);
  //         }
  //       }).catch(err => {
  //         console.log(err.message);
  //       })
  //   };
  // }, [user.id, props.pollId])


  // send request on click to /new_options_results
  // props.id + user_id

  // need to know if user voted for any of the option
  // axios /verify which return true/false if user voted
  // userId and pollID 
  // if there

  const increaseVoteForOption = (pollState, pollId, optionId) => {
    const pollCopy = [...pollState];

    let pollToUpdate = pollCopy.find((poll) => poll.id === pollId)
    let optionToUpdate = pollToUpdate.options.find((option) => option.id === optionId)
    optionToUpdate.count++

    const newState = pollCopy.map((poll) =>
      poll.id === pollId ? pollToUpdate : poll
    );

    return newState
  }

  const giveVote = (option_id, user_id) => {

    const newVote = {
      option_id,
      user_id
    };

    return axios.post("http://localhost:3000/api/polls/new_options_results", newVote)
      .then(res => {
        console.log("response from frontend", res.data)
        props.setPolls(increaseVoteForOption(props.polls, props.pollId, props.id))
      })

      .catch(err => {
        console.log("error from frontend", err);
      })
  };

  return (
    <article>
      <div className="options__content">
        <p>{props.content}</p>
      </div>
      <div className="options__votes">
        {props.voted && <p>{props.votes}</p>}
      </div>
      {/* <button onClick={() => giveVote(props.id, user.id)} >vote</button> */}
      {!props.voted && <button onClick={() => {
        giveVote(props.id, user.id);
        props.setVoted(true)
      }
      } >vote</button>}

    </article>
  )
};