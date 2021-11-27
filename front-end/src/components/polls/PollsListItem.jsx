import { React } from "react";
import OptionsList from "../options/OptionsList";
import "./PollsListItem.scss"




export default function PollsListItem(props) {


  const { content, createdAt, options, polls, setPolls, totalVotes, id } = props;


  const setTotalVotes = (state, pollId) => {
    let total = 0;
    const goodPoll = state.find((poll) => poll.id === pollId);

    for (const option of goodPoll.options) {
      total += parseInt(option.count);
    }

    return total;
  };

  return (

    <div className="pollsitem_item">
      <h3>Poll item</h3>
      <div>{createdAt}</div>
      <div>{content}</div>
      {/* when we click on one option we will change the state of that option and user is not able to vote again */}
      <div>{<OptionsList
        options={options} setPolls={setPolls} pollId={id} polls={props.polls}
      />}</div>
      <div>{setTotalVotes(polls, id)}</div>
    </div>
  );
}

