import React from "react";
import "./ConfessionsListItem.scss"
import Badge from 'react-bootstrap/Badge'

// import classNames from "classnames";

export default function ConfessionListItem(props) {
  
  const categoryParser = (categoryId) =>{
    if (categoryId === 1) {
      return ""
    }
    if (categoryId === 2) {
      return ""
    }
    if (categoryId === 3) {
      return ""
    }
  }

  return (
    <article className="confession__article">
      <div className="confession__content">
       <p>Content {props.content}</p>
      </div>
      <div className="confession__detail"> 
        <span className="confession__likes">
          <Badge bg="primary">{props.categoryId}</Badge>{' '}
          {/* <span>Category ID {props.categoryId}</span> */}
          <span>Likes {props.likes}</span>
        </span>
        <div>
          <p>Created at {props.createdAt}</p>
        </div>
      </div>
    </article> 
  );
}


{/* <p>Comments</p> */}
{/* <p>ID {props.id}</p> */}
{/* <p>User ID {props.userId}</p> */}