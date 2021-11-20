import { React, useState, useEffect } from "react";
import ConfessionListItem from "./ConfessionsListItem";
import axios from "axios";



export default function ConfessionList(props) {

  // const [confessions, setConfessions] = useState([])

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/confessions")
  //   ]).then((res) => {
  //     setConfessions(prev => ([...prev, res[0].data]))
  //   })
  // }, []);

  // console.log(confession)

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