import { React, useState } from "react";
import PollsListItem from "./PollsListItem";
import "./PollsList.scss";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)


export default function PollsList(props) {




  const parsedPolls = props.polls.map((poll) => (
    <PollsListItem
      key={poll.id}
      id={poll.id}
      content={poll.content}
      createdAt={dayjs(poll.created_at).fromNow()}
      options={poll.options}
    />
  ));



  return (
    <section className="polls">
      <ul className="polls__list" >{parsedPolls}</ul>
    </section>
  )
}