import { React } from "react";
import "./PollsListItem.scss"




export default function PollsListItem(props) {

  const {options} = props
  console.log("options", options)
  return (
    
    <div>
      
      <div clssName="polls_content">{props.content}</div>
      
    </div>
  );
}

