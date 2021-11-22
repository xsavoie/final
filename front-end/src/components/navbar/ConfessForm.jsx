import React, {useState, useContext} from "react"
import axios from "axios";
import "./ConfessForm.scss"
import { UserContext } from "../contexts/UserContext";
import Login from "../login";

export default function ConfessForm(props) {

  // const {user, setUser} = useContext(UserContext);

  const [content, setContent] = useState("");
  const [category, setCategory] = useState("")
 
  const newContent = (eve) => {
    setContent(eve.target.value)
  }


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
 

  function submit(event) {
    event.preventDefault();
    Promise.all([axios.post("api/confessions/new", {
      content: document.getElementById("add_content").value,
      category: document.getElementById("add_category").value,
    })])
    .then(res => {
      console.log("res: ", res)
    })
    .catch(err => {
      console.log(err);
    })
  }
 
  // const login = async () => {
  //   return {
  //     id: 4,
  //     email: "test@bob.com",
  //     password: "password"
  //   }
  // }


  return (
   
    //   <h1>
    // <pre>{JSON.stringify(user, null, 2)}</pre>{user ? (<button onClick={() => {setUser(null)}}>logout</button>) : (<button onClick={async () => {
    //   const user = await login();
    //   setUser(user)
    //   }}>click me</button>)}
    
    // </h1>
    
    <form className="confess_form_container" onSubmit={event => event.preventDefault()}>
      <h1 className="header_confess_form" >Confession form</h1>
      <div>Confession<input id="add_content" type="text" name="confession" value={content} onChange={newContent}/>
      </div>
      <div>Category
        <select id="add_category" onChange={(e) => setCategory(e.target.value)}>
          <option>Secret</option>
          <option>Story</option>
          <option>Question</option>
        </select>
      </div>
      <div className="button_confess_form">
        <button type="button" className="btn" onClick={submit}>Submit</button> 
      </div>
    </form>
  )

  
}

// <input type="checkbox" id="secret"  name="myCheckbox" onChange={onlyOne.bind(handleChange)} defaultChecked={false}/>
// <label for="secret"> Secret</label>
// <input type="checkbox" id="story" name="myCheckbox" onChange={onlyOne.bind(handleChange)} defaultChecked={false}></input>
// <label for="story"> Story</label>
// <input type="checkbox" id="question"  name="myCheckbox" onChange={onlyOne.bind(handleChange)} defaultChecked={false}></input>
// <label for="question"> Question</label>