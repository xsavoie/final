import { React, Fragment, useState } from "react";
import "./ConfessionsListItem.scss"
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CommentsList from "./Comments/CommentsList";

// import classNames from "classnames";

export default function ConfessionListItem(props) {
  
  // const selected = false
  // const [ selectedConfession, setSelectedConfession] = useState(false)


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
  // const stateTest = props.setSelected;

  const totalComments = props.comments.length

  return (
    <>
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
          <span>Likes {props.likes}</span>
        </span>
        <div>
   
        { props.selected && <Button variant="primary" size="sm" onClick={props.resetSelected} >Hide Comments</Button> }
        { !props.selected && <Button variant="primary" size="sm" onClick={props.setSelected}>View Comments {`(${totalComments})`} </Button> }
        {/* <Button variant="primary">Comment</Button> */}
        </div>
      </footer>
     { props.selected && <CommentsList comments={props.comments}/> }
    </article> 
     </>
  );
}

// onClick={setSelected(!selected)

{/* <p>Comments</p> */}
{/* <p>ID {props.id}</p> */}
{/* <p>User ID {props.userId}</p> */}