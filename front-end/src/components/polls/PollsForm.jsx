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

  const [form, setForm] = useState(false)
  const [pollId, setPollId] = useState(null)

  const showOptions = () => {
    setForm(true)
   
  };

  const createPoll = (userId, content) => {
    const created_at = new Date();
    const newPoll = {
      userId,
      content,
      created_at
    };
   
    return axios.post("http://localhost:3000/api/polls/new", newPoll)
      .then(res => {
        console.log("respons from frontend", res.data.id);
        setPollId(res.data.id)
      })
    
      .catch(err => {
        console.log("error fro frontend", err);
      })
  };

 
  return (
    <div className="polls_form">
      <Form onSubmit={(e)=> e.preventDefault()} className="polls__input">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Create a poll</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>
          {!form && <Button
          variant="primary"
          size="sm"
          onClick={() => { createPoll(user.id, content); showOptions()}}
        >
          Add options
        </Button>}
        {form && <OptionsForm pollId={pollId}/>}
    

      </Form>
    </div>
  )

}