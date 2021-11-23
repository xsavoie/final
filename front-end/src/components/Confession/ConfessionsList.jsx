import { React, useState, useEffect } from "react";
import ConfessionListItem from "./ConfessionsListItem";
import axios from "axios";
import "./ConfessionsList.scss"



export default function ConfessionList(props) {

  const [selected, setSelected] = useState(null)


  // const dateParser = (date) => {
  //   const parsedDate = date.split("").slice(0, 10).join("")
  //   return parsedDate
  // }

  const parsedConfessions = props.confessionsToParse.map((confession) => (
    <ConfessionListItem
      key={confession.id}
      id={confession.id}
      // userId={confession.user_id}
      categoryId={confession.category_id}
      content={confession.content}
      createdAt={confession.created_at}
      likes={confession.likes}
      comments={confession.comments}
      selected={confession.id === selected}
      setSelected={() => setSelected(confession.id)}
      resetSelected={() => setSelected(null)}
      confessionState={props.confessionsToParse}
      setConfessions={props.setConfessions}
    />
  ));



  return (
    <section className="confessions">
      <ul className="confessions__list" >{parsedConfessions}</ul>
    </section>
  )
}