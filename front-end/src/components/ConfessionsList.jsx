import { React, useState, useEffect } from "react";
import ConfessionListItem from "./ConfessionsListItem";
import axios from "axios";
import "./ConfessionsList.scss"



export default function ConfessionList(props) {


  const dateParser = (date) => {
    const parsedDate = date.split("").slice(0, 10).join("")
    return parsedDate
  }

  const parsedConfessions = props.confessionsToParse.map((confession) => (
    <ConfessionListItem
      key={confession.id}
      id={confession.id}
      userId={confession.user_id}
      categoryId={confession.category_id}
      content={confession.content}
      createdAt={dateParser(confession.created_at)}
      likes={confession.likes}
      comments={confession.comments}
    />
  ));



  return (
    <section className="confessions">
      <ul className="confessions__list" >{parsedConfessions}</ul>
    </section>
  )
}