import { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import './CommentsList.scss'

export default function CommentForm(props) {

  const { user } = useContext(UserContext);

  const [comment, setComment] = useState("");
  const [rows, setRows] = useState(1);


  let confessionsCopy = [ ...props.confessionState];

  const updateCommentState = (confessionId, newComment, confessionState) => {
    const parsedComment = {
      id: newComment.id,
      user_id: newComment.user_id,
      content: newComment.content
    };

    // finds confession that needs to be changed
    const newConfession = confessionState.find((confession) => confession.id === confessionId);
    // pushed parsed comment to confession
    newConfession.comments.push(parsedComment);
    // map through state and modifies right confession
    const newState = confessionState.map(confession => confession.id === confessionId ? newConfession : confession);
    
    return newState;
}

  const submitComment = (userId, confessionId, content) => {
    const created_at = new Date();
    const newComment = {
      userId,
      confessionId,
      content,
      created_at
    };

    return axios.post("/api/confessions/new_comment", { newComment })
      .then(res => {
        props.setConfessions(updateCommentState(confessionId, res.data, confessionsCopy));
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return (
    <Form>
      <Form.Group className="comment-form" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="comment-form__label">Add a comment</Form.Label>
        <Form.Control
          className="comment-form__input"
          as="textarea"
          rows={rows}
          value={comment}
          onClick={() => setRows(2)}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          className="comment-form__submit"
          variant="primary"
          size="sm"
          onClick={() => {
            submitComment(user.id, props.confessionId, comment)
            setComment("")
          }}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  )
}