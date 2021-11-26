import { React, useState } from "react";
import Button from 'react-bootstrap/Button'
import ConfessionListItem from "./ConfessionsListItem";
import "./ConfessionsList.scss";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);


export default function ConfessionList(props) {

  const [selected, setSelected] = useState(null);

  const parsedConfessions = props.confessions.map((confession) => (
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
      confessionState={props.confessions}
      setConfessions={props.setConfessions}
      confessionsToUpdate={props.confessionsToUpdate}
    />
  ));

  return (
    <section className="confessions">
      <ul className="confessions__list" >{parsedConfessions}</ul>
    </section>
  )
}