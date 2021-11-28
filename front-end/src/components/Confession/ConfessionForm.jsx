import "./ConfessionForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from "react-bootstrap/Dropdown";
import useConfessionForm from "../../hooks/useConfessionForm";

export default function ConfessionForm(props) {

  const {
    user,
    title,
    setTitle,
    content,
    setContent,
    category,
    setCategory,
    error,
    categoryParser,
    confessionClass,
    createConfession
  } = useConfessionForm(props);


  return (
    <div className="form-container">
      <div className="confession-form">
        <Form className="confession-form__input ">
          {/* if we want to add titles to confession */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control className="form-input-box"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)} />
          </Form.Group>
            {/* <Form.Label>Write here</Form.Label> */}
          <Form.Group className="mb-3 form-input-box" controlId="exampleForm.ControlTextarea1">
            <Form.Control className="form-input-box"
              placeholder="Write here..."
              as="textarea"
              rows={3}
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </Form.Group>
          <div className="form--buttons">
            <Dropdown>
              <Dropdown.Toggle  variant="primary" className={confessionClass} id="dropdown-basic" size="sm">
                {category ? categoryParser(category) : "Category"}
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item onClick={() => setCategory(1)}>Secret</Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory(2)}>Story</Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory(3)}>Question</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              className="confession-btn"
              variant="primary"
              size="sm"
              onClick={() => {
                createConfession(user.id, category, content);
              }}
            >
              Submit
            </Button>
          </div>
          <span className="form--error">{error}</span>
        </Form>
      </div>
    </div>
  )
}