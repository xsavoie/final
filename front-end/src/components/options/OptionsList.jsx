import OptionsListItem from "./OptionsListItem"
import "./OptionsList.scss"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function OptionsList(props) {

  const { user } = useContext(UserContext)
  const [voted, setVoted] = useState(false)
  const [colour, setColour] = useState("red")

  useEffect(() => {
    if (user.id) {
      const pollInfo = {
        poll_id: props.pollId,
        user_id: user.id
      }
     
      return axios.get("/api/polls/verify", { params: { pollInfo } })
        .then(res => {
          if (res.data) {
            // console.log("voted", res.data)
            setVoted(true)
            setColour("pink")
          } else {
            // console.log("not voted", res.data);
          }
        })
        .catch(err => {
          console.log(err.message);
        })
    } 
  }, [voted]);

 

  const parsedOptions = props.options.map((option) => (
   
    <OptionsListItem
      key={option.id}
      id={option.id}
      content={option.content}
      votes={option.count}
      setPolls={props.setPolls}
      polls={props.polls}
      pollId={props.pollId}
      voted={voted}
      setVoted={setVoted}
      colour={colour}
      setColour={setColour}
    />
  ));

  return (
    <section className="options__list">
      <ul>{parsedOptions}</ul>
    </section>
  )
};