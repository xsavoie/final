import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import './CommentsList.scss'

export default function CommentsListItem(props) {
  const { user } = useContext(UserContext)

  return (
    <article>
      <div className="comments__content">
       <p>{props.content}</p>
      </div>
    </article>
  )
};