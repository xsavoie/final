import React, { useState, useContext } from "react"
import axios from "axios";
import "./PollsForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { UserContext } from "../contexts/UserContext";

import OptionsForm from "../options/OptionsForm";


export default function PollsForm(props) {

  const { user } = useContext(UserContext);

  const [content, setContent] = useState("");

  const [form, setForm] = useState(false)
  const [pollId, setPollId] = useState(null)
  const [pollContent, setPollContent] = useState("")

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
    
        setPollId(res.data.id)
        setPollContent(res.data.content)
      })
    
      .catch(err => {
        console.log("error from frontend", err);
      })
  };

 
  return (
    <div className="polls__form">
      <Form onSubmit={(e)=> e.preventDefault()} className="polls__input">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="polls__title">Create a poll</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>
        <div className="polls__add_options">
          {!form && <Button
          variant="primary"
          size="sm"
          onClick={() => { createPoll(user.id, content); showOptions()}}
        >
          Add options
        </Button>}
        {form && <OptionsForm pollId={pollId} pollContent={pollContent} polls={props.polls} setPolls={props.setPolls} setPollContent={setContent}/>}
        </div>

      </Form>
    </div>
  )

}
