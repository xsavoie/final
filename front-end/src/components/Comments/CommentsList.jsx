import CommentForm from "./CommentForm"
import CommentsListItem from "./CommentsListItem"
import "./CommentsList.scss"

export default function CommentsList(props) {

  const commentArray = [
    {
      "content": "You are awesome",
      "user_id": 2
    },
    {
      "content": "test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "user_id": 1
    },
    {
      "content": "test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "user_id": 2
    },
    {
      "content": "test comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "user_id": 3
    }
  ];


  const parsedComments = props.comments.map((comment) => (
    <CommentsListItem
      content={comment.content}
    />
  ));

  return (
    <section className="comments__list">
      <CommentForm/>
      <ul>{parsedComments}</ul>
    </section>
  )
};