import CommentForm from "./CommentForm"
import CommentsListItem from "./CommentsListItem"
import "./CommentsList.scss"

export default function CommentsList(props) {

  const parsedComments = props.comments.map((comment) => (
    <CommentsListItem
      key={comment.id}
      content={comment.content}
    />
  ));

  return (
    <section className="comments__list">
      <CommentForm confessionId={props.confessionId} />
      <ul>{parsedComments}</ul>
    </section>
  )
};