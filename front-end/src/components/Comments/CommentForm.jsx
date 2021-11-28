import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './CommentForm.scss'
import useCommentForm from '../../hooks/useCommentForm'

export default function CommentForm(props) {

  const {
    user,
    comment,
    setComment,
    rows,
    setRows,
    error,
    submitComment
  } = useCommentForm(props);


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
            submitComment(user.id, props.confessionId, comment, props.confessionsToUpdate)
          }}>Submit
        </Button>
        <span className="comment-form--error">{error}</span>
      </Form.Group>
    </Form>
  )
}