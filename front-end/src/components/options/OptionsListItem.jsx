import React, { useState, useContext} from 'react';
import axios from 'axios';
import './OptionsListItem.scss'
import { UserContext } from "../contexts/UserContext";


export default function OptionsListItem(props) {

  const { user } = useContext(UserContext);
  const [voted, setVoted] = useState(false);

  

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
      <div className="options__container">
      {props.voted && <div className="options__content">
      <p>{props.content}</p>
      </div>}
      {/* {props.voted &&<div>Result</div>} */}
      {props.voted && <div className="options__votes">
         <p className="options__votes"> {props.votes}</p>
      </div>}
      </div>
      <div >
      {!props.voted && <button className="options__test" onClick={() => {
          giveVote(props.id, user.id);
          props.setVoted(true)
      }
      } >{props.content}
      </button>}
      </div>

    </article>
  )
};