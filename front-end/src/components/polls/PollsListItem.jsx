import { React } from "react";
import OptionsList from "../options/OptionsList";
import "./PollsListItem.scss"
import Badge from 'react-bootstrap/Badge'


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
      <header className="pollsitem__top">
      <Badge className="badge--question">Question</Badge>
        <div> </div>
        <div className="pollsitem__created_at" >{createdAt}</div>
      </header>
     <div className="pollsitem__content" >{content}</div>
      <div className="pollsitem__options">{<OptionsList
        options={options} setPolls={setPolls} pollId={id} polls={props.polls}
      />}</div>
      <footer className="pollsitem__votes">
      <div className="pollsitem__total_votes_myDIV" >Total votes</div>
      <div className="pollsitem__total_votes_hide" >{setTotalVotes(polls, id)}</div>
      </footer>
    </div>
  );
}

