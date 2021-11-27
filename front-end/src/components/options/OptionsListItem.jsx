import './OptionsListItem.scss'
import OptionsForm from "./OptionsForm"


export default function OptionsListItem(props) {
  // const [voteData, setVoteData] = useState();
  // const [totalVotes, setTotalVotes] = useState(0);
  // const [voted, setVoted] = useState(false);

  return (
    <article>
      <div className="options__content">
       <p>{props.content}</p>
      </div>
      <div className="options__votes">
      <p>{props.votes}</p>
      </div>
     
    </article>
  )
};