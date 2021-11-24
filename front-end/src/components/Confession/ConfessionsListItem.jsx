import { React, useState, useEffect, useContext } from "react";
import "./ConfessionsListItem.scss"
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CommentsList from "../Comments/CommentsList";
import axios from "axios";
import { UserContext } from '../contexts/UserContext';
import classNames from "classnames";

// import classNames from "classnames";

export default function ConfessionListItem(props) {

  // const REPLACEMEPLEASE = 1;
  const [liked, setLiked] = useState(false);

  const { user } = useContext(UserContext)


  // check if user liked current post
  useEffect(() => {
    const confessionInfo = {
      userId: user.id,
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
  }, [user.id, props.id])


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

  let badgeClass = classNames("badge", {
    "badge--secret": props.categoryId === 1,
    "badge--story": props.categoryId === 2,
    "badge--question": props.categoryId === 3
  })

  console.log(badgeClass)

  const totalComments = props.comments.length;

  return (
    <article className="confession__article">
      <header className="confession__detail-top">
        <Badge className={badgeClass}>{categoryParser(props.categoryId)}</Badge>
        <p> {props.createdAt}</p>
      </header>

      <div className="confession__content">
        <p>{props.content}</p>
      </div>
      <footer className="confession__detail-bottom">
        <span className="confession__likes">
          {/* add verification to check user */}
          {liked && <span onClick={() => {
            deleteLike(user.id, props.id);
            setLiked(false);
          }}>Unlike {props.likes}</span>}
          {!liked && <span onClick={() => {
            submitLike(user.id, props.id);
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