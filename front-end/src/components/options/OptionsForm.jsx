//will have only text boxes for the options 
//

import React, { useState, useContext } from "react"
import axios from "axios";
// import "./OptionsForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function OptionsForm(props) {

  // const [content, setContent] = useState("");
  const [options, setOptions] = useState(["", ""])
  const [optionLists, setOptionLists] = useState([0, 1])

  const {pollId} = props

  // const [form, setForm] = useState(false)

  // const showOptions = () => {
  //   setForm(true)
   
  // };

  const dataParser = (testData) => {
    let array = []
  
    const { poll_id, content } = testData
    for (const element of content) {
      array.push({
        poll_id: poll_id,
        content: element
      })
    }
    return array
  
  }

  const createOptions = () => {
    
    const newOption = {
      poll_id: pollId,
      content: options
    };

    const option = dataParser(newOption)

    console.log("new option", newOption)
    return axios.post("http://localhost:3000/api/polls/new_options",  option )
      .then(res => {
        console.log(res.data);
  
      })
      .catch(err => {
        console.log(err.message);
      })
  };


  const updateOptionByIndex = (option, index) => {
    const previousOption = options
    previousOption[index] = option
    setOptions([...previousOption])

  }

  const addOption = () => {
    setOptionLists([...optionLists, optionLists.length])
    setOptions([...options, ""])
  }



  return (
    <Form onSubmit={(e)=> e.preventDefault()}>
      <div>
        {optionLists.map((option, index) => {
          return (
          <Form.Control name={`Option${option}`} type="text" placeholder={`Option ${option + 1}`} value={options[index]} onChange={(event) => updateOptionByIndex(event.target.value, index)}/>
          )
        })}
      </div>
          <Button
          variant="primary"
          size="sm"
          onClick={() => {addOption()}}
        >
          {/* it will add one by one option to the poll */}
          +
        </Button>
        {/* {form && <Form.Control type="text" placeholder="Option 2" value2={content} onChange={(event) => setContent( event.target.value)}/>} */}

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
          onClick={() => { createOptions()}}
        >
          submit
        </Button>
        
    </Form>
  )

}


  {/* <Form.Label>Option 1</Form.Label>
      <Form.Control name="Option1" type="text" placeholder="Option 1" value={content} onChange={(event) => setContent(event.target.value)}/>
      <br />
      <Form.Label>Option 2</Form.Label>
      <Form.Control name="Option2" type="text" placeholder="Option 2" value={content} onChange={(event) => setContent(event.target.value)}/>
      <br /> */}
