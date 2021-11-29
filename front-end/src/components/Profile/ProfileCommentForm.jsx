import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Comments/CommentForm.scss'
import useCommentForm from '../../hooks/useCommentForm'
import axios from 'axios';

export default function ProfileCommentForm(props) {

  const {
    user,
    comment,
    setComment,
    rows,
    setRows,
    error,
    validateComment,
    updateCommentState
  } = useCommentForm(props);

  


  const submitProfileComment = (userId, confessionId, content, confessionsState) => {
    const created_at = new Date();
    const newComment = {
      userId,
      confessionId,
      content,
      created_at
    };

    const valid = validateComment(content);

    if (valid) {
      return axios.post("/api/confessions/new_comment", { newComment })
      .then(res => {
        props.setMyOwnConfessions(updateCommentState(confessionId, res.data, confessionsState));
        setComment("")
      })
      .catch(err => {
        console.log(err.message);
      })
    };
  };


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
            submitProfileComment(user.id, props.confessionId, comment, props.myOwnConfessions)
          }}>Submit
        </Button>
        <span className="comment-form--error">{error}</span>
      </Form.Group>
    </Form>
  )
}