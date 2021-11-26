//will add a content (similar with the confession)
//has 4 different buttons 
//this form will cahnge the state of the poll comntent

import React, { useState, useContext } from "react"
import axios from "axios";
// import "./PollsForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { UserContext } from "../contexts/UserContext";

import OptionsForm from "../options/OptionsForm";

export default function PollsForm(props) {

  const { user } = useContext(UserContext);

  const [content, setContent] = useState("");

  const createPoll = (userId, content) => {
    const created_at = new Date();
    const newPoll = {
      userId,
      content,
      created_at
    };

    return axios.post("http://localhost:3000/api/polls/new", { newPoll })
      .then(res => {
        console.log(res.data);
  
      })
      .catch(err => {
        console.log(err.message);
      })
  };


  // to have state with number of options by default(2)
  //function for the number of options returns increase number by one, the state is chang, return an array of options and apen. to my form 


  // onClick={() => {
    
  //   setClicker(clicker + 1)
    
  // }}

  // setPageToDisplay((prevState) => (prevState - 1))

  return (
    <div className="polls_form">
      <Form className="polls__input">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Create a poll</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>
        <OptionsForm/>
    
    
        <Button
          variant="primary"
          size="sm"
          onClick={() => {}}
        >
          {/* it will add one by one option to the poll */}
          +
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {}}
        >
          {/* it will remove one by one option to the poll if user change his mind */}
          -
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {  createPoll(user.id, content)
            setContent("")}}
        >
          Submit
        </Button>
      </Form>
    </div>
  )

}