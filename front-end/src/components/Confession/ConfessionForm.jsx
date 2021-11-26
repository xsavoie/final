import React, { useState, useContext } from "react"
import axios from "axios";
import "./ConfessionForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from "../contexts/UserContext";
import classNames from "classnames";

export default function ConfessionForm(props) {

  const { user } = useContext(UserContext);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const categoryParser = (categoryId) => {
    if (categoryId === 1) {
      return "Secret";
    };
    if (categoryId === 2) {
      return "Story";
    };
    if (categoryId === 3) {
      return "Question";
    };
  };

  let confessionClass = classNames("category", {
    "category--secret": category === 1,
    "category--story": category === 2,
    "category--question": category === 3
  });
 

  const updateConfessionState = (newConfession, confessionState) => {
    newConfession.likes = 0;
    newConfession.comments = [];
    let stateCopy = [...confessionState];

    stateCopy.unshift(newConfession);
    const max = stateCopy.length - 1;
    return stateCopy.slice(0, max);
  };

  const validateConfession = (content, categoryId) => {
    if (content.length < 10) {
      setError("Too Short");
      return false;
    };
    if (!categoryId){
      setError("Select a category");
      return false;
    };
    return true;
  };

  const createConfession = (userId, categoryId, content) => {
    const created_at = new Date();
    const newConfession = {
      userId,
      categoryId,
      content,
      created_at
    };

    const valid = validateConfession(content, categoryId);

    if (valid) {
      return axios.post("/api/confessions/new", { newConfession })
      .then(res => {
        // console.log(res.data);
        props.setConfessions(updateConfessionState(res.data, props.confessions));
        props.setPageToDisplay(1)
        props.setShowForm(false)
        setContent("");
      })
      .catch(err => {
        console.log(err.message);
      })
    }
  };



  return (
    <div className="confession-form">
      <Form className="confession-form__input">
        {/* if we want to add titles to confession */}
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write here</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>
        <div className="form--buttons">
        <Dropdown>
          <Dropdown.Toggle variant="primary" className={confessionClass} id="dropdown-basic" size="sm">
            {category ? categoryParser(category) : "Category"}
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item onClick={() => setCategory(1)}>Secret</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory(2)}>Story</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory(3)}>Question</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
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
  )
}