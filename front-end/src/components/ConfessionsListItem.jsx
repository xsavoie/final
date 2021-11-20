import React from "react";

// import classNames from "classnames";

export default function ConfessionListItem(props) {

  return (
     <div>
      <p>ID {props.id}</p>
      <p>User ID {props.userId}</p>
      <p>Category ID {props.categoryId}</p>
      <p>Content {props.content}</p>
      <p>Created at {props.createdAt}</p>
      <p>Likes {props.likes}</p>
      {/* <p>Comments</p> */}
    </div> 
  );
}

