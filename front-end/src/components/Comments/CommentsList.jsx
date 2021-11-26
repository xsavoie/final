import CommentForm from "./CommentForm"
import CommentsListItem from "./CommentsListItem"
import "./CommentsList.scss"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function CommentsList(props) {

  const { user } = useContext(UserContext)

  const reversedComments = [ ...props.comments].reverse()

  const parsedComments = reversedComments.map((comment) => (
    <CommentsListItem
      key={comment.id}
      createdAt={comment.created_at}
      content={comment.content}
    />
  ));

  return (
    <section className="comments__list">
      {user.id && <CommentForm confessionsToUpdate={props.confessionsToUpdate} setConfessions={props.setConfessions} confessionState={props.confessionState} confessionId={props.confessionId} />}
      {/* have a box that says login to comment */}
      <ul>{parsedComments}</ul>
    </section>
  )
};