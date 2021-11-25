import { React, useState } from "react";
import Button from 'react-bootstrap/Button'
import ConfessionListItem from "./ConfessionsListItem";
import "./ConfessionsList.scss";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)


export default function ConfessionList(props) {

  const [selected, setSelected] = useState(null)




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
      confessionState={props.confessionsToParse}
      setConfessions={props.setConfessions}
    />
  ));



  return (
    <section className="confessions">
      <ul className="confessions__list" >{parsedConfessions}</ul>
      {/* <Button variant="primary" size="sm" className="test">load more</Button> */}
    </section>
  )
}