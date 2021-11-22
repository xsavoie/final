import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './CommentsList.scss'
import axios from 'axios'

export default function CommentForm(props) {

  const [comment, setComment] = useState("");
  const testUser = 1;


  let confessionsCopy = [ ...props.confessionState]

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
    
    return newState
}

  const submitComment = (userId, confessionId, content) => {
    const newComment = {
      userId,
      confessionId,
      content
    };

    return axios.post("/api/confessions/new_comment", { newComment })
      .then(res => {
        props.setConfessions(updateCommentState(confessionId, res.data, confessionsCopy))
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
          rows={2}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          className="comment-form__submit"
          variant="primary"
          size="sm"
          onClick={() => {
            submitComment(testUser, props.confessionId, comment)
            setComment("")
          }}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  )
}