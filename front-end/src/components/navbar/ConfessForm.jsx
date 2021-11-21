import React from "react"
import {Form} from 'react-bootstrap'

export default function ConfessForm(props) {

  return (
    <Form>
      <Form.Select aria-label="Default select example">
        <option>Choose Category</option>
        <option value="1">Secret</option>
        <option value="2">Story</option>
        <option value="3">Question</option>
      </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  )

}