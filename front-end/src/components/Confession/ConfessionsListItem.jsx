import { React, useState, useEffect } from "react";
import "./ConfessionsListItem.scss"
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CommentsList from "../Comments/CommentsList";
import axios from "axios";

// import classNames from "classnames";

export default function ConfessionListItem(props) {

  const testUser = 1;
  const [liked, setLiked] = useState(false);


  // check if user liked current post
  useEffect(() => {
    const confessionInfo = {
      userId: testUser,
      confessionId: props.id
    }
    // console.log(confessionInfo)
    return axios.get("/api/confessions/likes/verify", { params: { confessionInfo } })
      .then(res => {
        // console.log("RES", res.data)
        if (res.data) {
          setLiked(true)
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [props.id])


  const categoryParser = (categoryId) => {
    if (categoryId === 1) {
      return "Secret";
    };
    if (categoryId === 2) {
      return "Story";
    };
    if (categoryId === 3) {
      return "Question";
    };
  };

  let confessionsCopy = [...props.confessionState];

  const increaseLikeState = (confessionId, confessionState) => {
    // finds confession that needs to be changed
    const newConfession = confessionState.find((confession) => confession.id === confessionId);
    // update like count
    newConfession.likes++;
    // map through state and modifies right confession
    const newState = confessionState.map(confession =>
      confession.id === confessionId ? newConfession : confession
    );
    return newState;
  }

  const decreaseLikeState = (confessionId, confessionState) => {
    // finds confession that needs to be changed
    const newConfession = confessionState.find((confession) => confession.id === confessionId);
    // update like count
    newConfession.likes--;
    // map through state and modifies right confession
    const newState = confessionState.map(confession =>
      confession.id === confessionId ? newConfession : confession
    );
    return newState;
  }

  // insert like in db and modifies state
  const submitLike = (userId, confessionId) => {
    const newLike = {
      userId,
      confessionId
    };

    return axios.post("/api/confessions/likes", { newLike })
      .then(res => {
        // change state
        console.log(res.data);
        props.setConfessions(increaseLikeState(confessionId, confessionsCopy))
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // delete like in db and modifies state
  const deleteLike = (userId, confessionId) => {
    const likeInfo = {
      userId,
      confessionId
    };
    // should not use body to delete? --> refactor later?
    return axios.delete("/api/confessions/likes", { data: { likeInfo } })
      .then(res => {
        console.log(res.data)
        props.setConfessions(decreaseLikeState(confessionId, confessionsCopy))
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const totalComments = props.comments.length;

  return (
    <article className="confession__article">
      <header className="confession__detail-top">
        <Badge bg="danger">{categoryParser(props.categoryId)}</Badge>
        <p> {props.createdAt}</p>
      </header>

      <div className="confession__content">
        <p>{props.content}</p>
      </div>
      <footer className="confession__detail-bottom">
        <span className="confession__likes">
          {/* add verification to check user */}
          {liked && <span onClick={() => {
            deleteLike(testUser, props.id);
            setLiked(false);
          }}>Unlike {props.likes}</span>}
          {!liked && <span onClick={() => {
            submitLike(testUser, props.id);
            setLiked(true);
          }}>Like {props.likes}</span>}
        </span>
        <div>

          {props.selected && <Button variant="primary" size="sm" onClick={props.resetSelected} >Hide Comments</Button>}
          {!props.selected && <Button variant="primary" size="sm" onClick={props.setSelected}>View Comments {`(${totalComments})`} </Button>}
          {/* <Button variant="primary">Comment</Button> */}
        </div>
      </footer>
      {props.selected && <CommentsList setConfessions={props.setConfessions} confessionState={props.confessionState} confessionId={props.id} comments={props.comments} />}
    </article>
  );
}

// onClick={setSelected(!selected)

{/* <p>Comments</p> */ }
{/* <p>ID {props.id}</p> */ }
{/* <p>User ID {props.userId}</p> */ }