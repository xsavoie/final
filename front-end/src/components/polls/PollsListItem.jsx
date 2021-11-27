import { React } from "react";
import OptionsList from "../options/OptionsList";
import "./PollsListItem.scss"




export default function PollsListItem(props) {


  const {content, createdAt, options, setPolls} = props;

    //get request for total an make query 
   
     return (
     
      <div className="pollsitem_item">
        <h3>Poll item</h3>
        <div>{createdAt}</div>
        <div>{content}</div>
        {/* when we click on one option we will change the state of that option and user is not able to vote again */}
        <div>{<OptionsList
              options={options} setPolls={setPolls}
              />}</div>
        <div>Total votes</div>
       </div>
     );
}

