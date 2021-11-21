import './CommentsList.scss'

export default function CommentsListItem(props) {
  return (
    <article>
      <div className="comments__content">
       <p>{props.content}</p>
      </div>
    </article>
  )
};