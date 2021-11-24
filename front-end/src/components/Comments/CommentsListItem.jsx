// import { useContext } from 'react'
// import { UserContext } from '../contexts/UserContext'
import './CommentsList.scss'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

export default function CommentsListItem(props) {
  // const { user } = useContext(UserContext)

  return (
    <article>
      <p className="test" >{dayjs(props.createdAt).fromNow()}</p>
      <div className="comments__content">
       <p>{props.content}</p>
      </div>
    </article>
  )
};