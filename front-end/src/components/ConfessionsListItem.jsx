import { React, Fragment } from "react";
import "./ConfessionsListItem.scss"
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CommentsList from "./Comments/CommentsList";

// import classNames from "classnames";

export default function ConfessionListItem(props) {
  
  const selected = false

  const categoryParser = (categoryId) =>{
    if (categoryId === 1) {
      return "Secret"
    }
    if (categoryId === 2) {
      return "Story"
    }
    if (categoryId === 3) {
      return "Question"
    }
  }

  // const totalComments = props.comments.length

  return (
    <>
    <article className="confession__article">
      <header className="confession__detail-top"> 
        <Badge bg="danger">{categoryParser(props.categoryId)}</Badge>
        <p>Created at {props.createdAt}</p>
      </header>
      
      <div className="confession__content">
       <p>Content {props.content}</p>
      </div>
      <footer className="confession__detail-bottom"> 
        <span className="confession__likes">
          <span>Likes {props.likes}</span>
        </span>
        <div>
        { !selected && <Button variant="primary" size="sm">View Comments</Button> }
        { selected && <Button variant="primary" size="sm">Hide Comments</Button> }
        {/* { !selected && <Button variant="primary" size="sm">View Comments {`(${totalComments})`} </Button> } */}
        {/* <Button variant="primary">Comment</Button> */}
        </div>
      </footer>
     { selected && <CommentsList/> }
    </article> 
     </>
  );
}


{/* <p>Comments</p> */}
{/* <p>ID {props.id}</p> */}
{/* <p>User ID {props.userId}</p> */}