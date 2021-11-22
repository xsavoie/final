import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './CommentsList.scss'
import axios from 'axios'

export default function CommentForm(props) {

  const [comment, setComment] = useState("");
  const testUser = 1;

  const submitComment = (userId, confessionId, content) => {
    const newComment = {
      userId,
      confessionId,
      content
    };

    return axios.post("/api/confessions/new_comment", { newComment })
      .then(res => {
        // change state
        console.log(res);
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
          onChange={(event) => {
            setComment(event.target.value)
            console.log(comment)
          }}
        />
        <Button
          className="comment-form__submit"
          variant="primary"
          size="sm"
          onClick={() => submitComment(testUser, props.confessionId, comment)}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  )
}