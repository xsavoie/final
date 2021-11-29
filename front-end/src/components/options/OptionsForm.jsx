import React, { useState } from "react"
import axios from "axios";
import "./OptionsForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function OptionsForm(props) {

  const [options, setOptions] = useState(["", ""])
  const [optionLists, setOptionLists] = useState([0, 1])


  const {pollId} = props


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

  const updatePollState = (state, newPoll) => {
    const stateCopy = [ ...state];
    stateCopy.unshift(newPoll)
    const max = stateCopy.length - 1;
  
    return stateCopy.slice(0, max);
  };

  const createOptions = () => {
    
    const newOption = {
      poll_id: pollId,
      content: options
    };

    const option = dataParser(newOption)

  
    return axios.post("http://localhost:3000/api/polls/new_options",  option )
      .then(res => {
    
        axios.get(`http://localhost:3000/api/polls/${pollId}`)
        .then(res => {
        
          const newPoll = res.data[0];
          props.setPolls(updatePollState(props.polls, newPoll))
        })
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
    console.log(optionLists)
    setOptions([...options, ""])
    console.log(options)
  }


  const removeOption = (options, optionLists) => {
    const optionsCopy = [...options]
    const optionListsCopy = [...optionLists]
  
    let max = optionListsCopy.length -1
    setOptionLists(optionListsCopy.slice(0, max))
    setOptions(optionsCopy.slice(0, max))
  }


  return (
    <Form className="options__form" onSubmit={(e)=> e.preventDefault()}>
      <div>
        {optionLists.map((option, index) => {
          return (
          <Form.Control name={`Option${option}`} type="text" placeholder={`Option ${option + 1}`} value={options[index]} onChange={(event) => updateOptionByIndex(event.target.value, index)}/>
          )
        })}
      </div>
      <div className="options__buttons">
      <div className="options__add_remove">
        <div className="options__add">
          <Button 
          variant="primary"
          size="sm"
          onClick={() => {addOption()}}
        >
          +
        </Button>
      </div>
      <div className="options__remove">
        <Button
          variant="primary"
          size="sm"
          onClick={() => {removeOption(options, optionLists)}}
        >
          -
        </Button>
      </div>
      </div>
      <div className="options__submit">
       <Button 
          variant="primary"
          size="sm"
          onClick={() => { 
            createOptions()
            setOptions(["", ""])
            setOptionLists([0, 1])
            props.setPollContent("")
          }}
        >
          submit
        </Button>
        </div>
        </div>
        
    </Form>
  )

}
