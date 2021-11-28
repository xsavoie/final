import ProfileCommentForm from "./ProfileCommentForm"
import ProfileCommentsListItem from "./ProfileCommentsListItem"
import "../Comments/CommentsList.scss"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ProfileCommentsList(props) {

  const { user } = useContext(UserContext)

  const reversedComments = [...props.comments].reverse()

  const parsedComments = reversedComments.map((comment) => (
    <ProfileCommentsListItem
      key={comment.id}
      createdAt={comment.created_at}
      content={comment.content}
    />
  ));

  return (
    <section className="comments__list">
      {user.id &&
        <ProfileCommentForm
          confessionsToUpdate={props.confessionsToUpdate}
          setConfessions={props.setConfessions}
          confessionState={props.confessionState}
          confessionId={props.confessionId}
          myOwnConfessions={props.myOwnConfessions}
          setMyOwnConfessions={props.setMyOwnConfessions}
        />}
      {/* have a box that says login to comment */}
      <ul>{parsedComments}</ul>
    </section>
  )
};