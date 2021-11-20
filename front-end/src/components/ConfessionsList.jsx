import { React, useState, useEffect } from "react";
import ConfessionListItem from "./ConfessionsListItem";
import axios from "axios";



export default function ConfessionList(props) {


  const parsedConfessions = props.confessionsToParse.map((confession) => (
    <ConfessionListItem
      key={confession.id}
      id={confession.id}
      userId={confession.user_id}
      categoryId={confession.category_id}
      content={confession.content}
      createdAt={confession.createdAt}
      likes={confession.likes}
    />
  ));



  return (
    <section>
      {parsedConfessions}
    </section>
  )
}