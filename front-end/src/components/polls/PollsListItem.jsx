import { React } from "react";
import OptionsList from "../options/OptionsList";
import "./PollsListItem.scss"


export default function PollsListItem(props) {


  const { content, createdAt, options, polls, setPolls, id } = props;


  const setTotalVotes = (state, pollId) => {
    let total = 0;
    const goodPoll = state.find((poll) => poll.id === pollId);

    for (const option of goodPoll.options) {
      total += parseInt(option.count);
    }

    return total;
  };


  return (

    <div className="pollsitem__items">
      <div className="pollsitem__top">
        <div> </div>
        <div className="pollsitem__cretated_at" >{createdAt}</div>
      </div>
     <div className="pollsitem__content" >{content}</div>
      <div className="pollsitem__options">{<OptionsList
        options={options} setPolls={setPolls} pollId={id} polls={props.polls}
      />}</div>
      <div className="pollsitem__votes">
      <div className="pollsitem__total_votes_myDIV" >Total votes</div>
      <div className="pollsitem__total_votes_hide" >{setTotalVotes(polls, id)}</div>
      </div>
    </div>
  );
}

