import React, { useState, useContext } from "react"
import axios from "axios";
import "./ConfessionForm.scss"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from "../contexts/UserContext";
// import Login from "../login";
// import { UserContext } from "../contexts/UserContext";

export default function ConfessionForm(props) {

  const { user } = useContext(UserContext);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("")

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

  const updateConfessionState = (newConfession, confessionState) => {
    newConfession.likes = 0;
    newConfession.comments = [];
    let stateCopy = [...confessionState];

    stateCopy.unshift(newConfession);
    const max = stateCopy.length - 1;
    return stateCopy.slice(0, max);
  };

  const createConfession = (userId, categoryId, content) => {
    const created_at = new Date();
    const newConfession = {
      userId,
      categoryId,
      content,
      created_at
    };

    return axios.post("/api/confessions/new", { newConfession })
      .then(res => {
        console.log(res.data);
        props.setConfessions(updateConfessionState(res.data, props.confessions));
      })
      .catch(err => {
        console.log(err.message);
      })
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
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm">
            {category ? categoryParser(category) : "Category"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCategory(1)}>Secret</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory(2)}>Story</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory(3)}>Question</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            createConfession(user.id, category, content)
            setContent("")
            // hides form after submission
            props.setShowForm(false)
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  )

}

// function submit(event) {
//   event.preventDefault();
//   Promise.all([axios.post("api/confessions/new", {
//     content: document.getElementById("add_content").value,
//     category: document.getElementById("add_category").value,
//   })])
//   .then(res => {
//     console.log("res: ", res)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

// const newContent = (eve) => {
//   setContent(eve.target.value)
// }


// const handleChange = function(e) {
//   // to find out if it's checked or not; returns true or false
// const checked = e.target.checked;
// // to get the checked value
// const checkedValue = e.target.value;
// // to get the checked name
// const checkedName = e.target.name;


//   setCategory(checkedName)

// }
//   const onlyOne = function(event) {
//     console.log("==", event.target.value)
//     const checkboxes = document.getElementsByName("myCheckbox")
//     console.log("cheek", checkboxes);
//     checkboxes.forEach((item) => {
//        if (item !== event.target.name) item.checked = false
//     })

//  }

// const login = async () => {
  //   return {
    //     id: 4,
    //     email: "test@bob.com",
    //     password: "password"
    //   }
    // }


    // return (

  //   //   <h1>
  //   // <pre>{JSON.stringify(user, null, 2)}</pre>{user ? (<button onClick={() => {setUser(null)}}>logout</button>) : (<button onClick={async () => {
  //   //   const user = await login();
  //   //   setUser(user)
  //   //   }}>click me</button>)}

  //   // </h1>

  //   // <form className="confess_form_container" onSubmit={event => event.preventDefault()}>
  //   //   <h1 className="header_confess_form" >Confession form</h1>
  //   //   <div>Confession<input id="add_content" type="text" name="confession" value={content} onChange={newContent}/>
  //   //   </div>
  //   //   <div>Category
  //   //     <select id="add_category" onChange={(e) => setCategory(e.target.value)}>
  //   //       <option>Secret</option>
  //   //       <option>Story</option>
  //   //       <option>Question</option>
  //   //     </select>
  //   //   </div>
  //   //   <div className="button_confess_form">
  //   //     <button type="button" className="btn" onClick={submit}>Submit</button> 
  //   //   </div>
  //   // </form>
  // )



// <input type="checkbox" id="secret"  name="myCheckbox" onChange={onlyOne.bind(handleChange)} defaultChecked={false}/>
// <label for="secret"> Secret</label>
// <input type="checkbox" id="story" name="myCheckbox" onChange={onlyOne.bind(handleChange)} defaultChecked={false}></input>
// <label for="story"> Story</label>
// <input type="checkbox" id="question"  name="myCheckbox" onChange={onlyOne.bind(handleChange)} defaultChecked={false}></input>
// <label for="question"> Question</label>