import CommentForm from "./CommentForm"
import CommentsListItem from "./CommentsListItem"
import "./CommentsList.scss"

export default function CommentsList(props) {

  const reversedComments = [ ...props.comments].reverse()

  const parsedComments = reversedComments.map((comment) => (
    <CommentsListItem
      key={comment.id}
      content={comment.content}
    />
  ));

  return (
    <section className="comments__list">
      <CommentForm setConfessions={props.setConfessions} confessionState={props.confessionState} confessionId={props.confessionId} />
      <ul>{parsedComments}</ul>
    </section>
  )
};