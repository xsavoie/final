import { React } from "react";
import "./ConfessionsListItem.scss"
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CommentsList from "./Comments/CommentsList";
import axios from "axios";

// import classNames from "classnames";

export default function ConfessionListItem(props) {

  const testUser = 1;

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

  const submitLike = (userId, confessionId) => {
    const newLike = {
      userId,
      confessionId
    };

    return axios.post("/api/confessions/likes", { newLike })
      .then(res => {
        // change state
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const totalComments = props.comments.length;

  return (
    <article className="confession__article">
      <header className="confession__detail-top">
        <Badge bg="danger">{categoryParser(props.categoryId)}</Badge>
        <p>Created at {props.createdAt}</p>
      </header>

      <div className="confession__content">
        <p>{props.content}</p>
      </div>
      <footer className="confession__detail-bottom">
        <span className="confession__likes">
          <span onClick={() => submitLike(testUser, props.id)}>Likes {props.likes}</span>
        </span>
        <div>

          {props.selected && <Button variant="primary" size="sm" onClick={props.resetSelected} >Hide Comments</Button>}
          {!props.selected && <Button variant="primary" size="sm" onClick={props.setSelected}>View Comments {`(${totalComments})`} </Button>}
          {/* <Button variant="primary">Comment</Button> */}
        </div>
      </footer>
      {props.selected && <CommentsList confessionId={props.id} comments={props.comments} />}
    </article>
  );
}

// onClick={setSelected(!selected)

{/* <p>Comments</p> */ }
{/* <p>ID {props.id}</p> */ }
{/* <p>User ID {props.userId}</p> */ }