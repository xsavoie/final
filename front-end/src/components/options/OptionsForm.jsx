//will have only text boxes for the options 
//

import React, { useState, useContext } from "react"
import axios from "axios";
// import "./OptionsForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { UserContext } from "../contexts/UserContext";

export default function OptionsForm(props) {

  const [content, setContent] = useState("");

  const poll_id = 4
  const createOptions = (poll_id, content) => {
    
   
    const newOption = {
      poll_id,
      content
    };

    console.log("new option", newOption)
    return axios.post("http://localhost:3000/api/polls/new_options", { newOption })
      .then(res => {
        console.log(res.data);
  
      })
      .catch(err => {
        console.log(err.message);
      })
  };

  return (
    <Form>
      <Form.Label>Option 1</Form.Label>
      <Form.Control type="text" placeholder="Option 1" value1={content} onChange={(event) => setContent(event.target.value)}/>
      <br />
      <Form.Label>Option 2</Form.Label>
      <Form.Control type="text" placeholder="Option 2" value2={content} onChange={(event) => setContent(event.target.value)}/>
      <br />
      <Button
          variant="primary"
          size="sm"
          onClick={() => {createOptions(poll_id, content)
            setContent("")}}
        > 
        {/* it will automatically add two text box for options by default after add it will disappear and we will have + button */}
          Add options
        </Button>
    </Form>
  )

}

