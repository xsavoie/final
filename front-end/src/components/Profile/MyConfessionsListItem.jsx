import { React } from "react";

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CommentsList from "../Comments/CommentsList";
// import useConfessionItem from "../hooks/useConfessionItem";
import './MyConfessionsListItem.scss'


export default function MyConfessionsListItem(props) {


    console.log("props:", props)
  // const {
  //   user,
  //   liked,
  //   setLiked,
  //   categoryParser,
  //   submitLike,
  //   deleteLike,
  //   badgeClass,
  // } = useConfessionItem(props);


  return (
    <article className="confession__article"> Hello 
      {/* <header className="confession__detail-top">
        <Badge className={badgeClass}>{categoryParser(props.categoryId)}</Badge>
        <p> {props.createdAt}</p>
      </header>

      <div className="confession__content">
        <p>{props.content}</p>
      </div>
      <footer className="confession__detail-bottom">
        <span className="confession__likes">
          {liked && <span onClick={() => {
            deleteLike(user.id, props.id, props.confessionsToUpdate);
            setLiked(false);
          }}>Liked! {props.likes}</span>}
          {!liked && <span onClick={() => {
            submitLike(user.id, props.id, props.confessionsToUpdate);
            setLiked(true);
          }}>Like {props.likes}</span>}
        </span>
        <div>

          {props.selected && <Button variant="primary" size="sm" onClick={() => props.setSelected(null)} >Hide Comments</Button>}
          {!props.selected && <Button variant="primary" size="sm" onClick={() => props.setSelected(props.id)}>View Comments {`(${props.comments.length})`} </Button>}
        </div>
      </footer>
      {props.selected &&
        <CommentsList
          setConfessions={props.setConfessions}
          confessionState={props.confessionState}
          confessionId={props.id}
          comments={props.comments}
          confessionsToUpdate={props.confessionsToUpdate}
        />} */}
    </article>
  );
}

