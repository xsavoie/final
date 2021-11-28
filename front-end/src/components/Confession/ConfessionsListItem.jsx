import { React } from "react";
import "./ConfessionsListItem.scss";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CommentsList from "../Comments/CommentsList";
import useConfessionItem from "../../hooks/useConfessionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function ConfessionListItem(props) {

  const {
    user,
    liked,
    setLiked,
    categoryParser,
    submitLike,
    deleteLike,
    badgeClass,
  } = useConfessionItem(props);
  
  // const title = "test test test"
  const totalComments = props.comments.length;

  return (
    <article className="confession__article">
      <header className="confession__detail-top">
        <span className="title-right">
        <Badge className={badgeClass}>{categoryParser(props.categoryId)}</Badge>
        </span>
        <p className="confession__created_at"> {props.createdAt}</p>
      </header>
      {/* <div className="confession__content">
      </div> */}
      <div className="confession__content">
        <p className="confession__title">{props.title}</p>
        <hr></hr>
        <p>{props.content}</p>
      </div>
      <footer className="confession__detail-bottom">
        <span className="confession__likes">
          {liked && <span onClick={() => {
            deleteLike(user.id, props.id, props.confessionsToUpdate);
            setLiked(false);
          }}><FontAwesomeIcon className="like-icon-liked" size="lg" icon={faStar} /> {props.likes}</span>}
          {!liked && <span onClick={() => {
            submitLike(user.id, props.id, props.confessionsToUpdate);
            setLiked(true);
          }}><FontAwesomeIcon className="like-icon" size="lg" icon={faStar} /> {props.likes}</span>}
        </span>
        <div  >
          {props.selected && <Button className="comment-btn" variant="primary" size="sm" onClick={() => props.setSelected(null)} >Hide Comments</Button>}
          {user.id && !props.selected && <Button className="comment-btn" variant="primary" size="sm" onClick={() => props.setSelected(props.id)}>View Comments {`(${totalComments})`} </Button>}
          {(totalComments > 1) && !user.id && !props.selected && <Button className="comment-btn" variant="primary" size="sm" onClick={() => props.setSelected(props.id)}>View Comments {`(${props.comments.length})`} </Button>}
          {!totalComments && !user.id && !props.selected && <Button className="comment-btn" variant="primary" disabled size="sm" onClick={() => props.setSelected(props.id)}>No Comments </Button>}
        </div>
      </footer>
      {props.selected &&
        <CommentsList
          setConfessions={props.setConfessions}
          confessionState={props.confessionState}
          confessionId={props.id}
          comments={props.comments}
          confessionsToUpdate={props.confessionsToUpdate}
        />}
    </article>
  );
}

