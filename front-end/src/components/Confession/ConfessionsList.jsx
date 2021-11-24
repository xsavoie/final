import { React, useState } from "react";
import ConfessionListItem from "./ConfessionsListItem";
import "./ConfessionsList.scss";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)


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
      categoryId={confession.category_id}
      content={confession.content}
      createdAt={dayjs(confession.created_at).fromNow()}
      likes={confession.likes}
      comments={confession.comments}
      selected={confession.id === selected}
      setSelected={setSelected}
      // resetSelected={() => setSelected(null)}
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