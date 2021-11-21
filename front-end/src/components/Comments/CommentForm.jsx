import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './CommentsList.scss'

export default function CommentForm(prop) {
  return (
    <Form>
      <Form.Group className="comment-form" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="comment-form__label">Add a comment</Form.Label>
        <Form.Control className="comment-form__input" as="textarea" rows={2} />
        <Button className="comment-form__submit" variant="primary" size="sm">Submit</Button>
      </Form.Group>
    </Form>
  )
}