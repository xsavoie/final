import React from "react"
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

import ConfessForm from "./ConfessForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Top() {

  //if(user)
  return(

    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">classified</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav>

      <div className="">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Secret</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Story</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Question</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">confess</Nav.Link>
          <NavDropdown title="Username" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Go to profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Container>
    </Navbar>
  )

//if(!user)
// return(

//   <Navbar bg="light" expand="lg">
//   <Container>
//      <Navbar.Brand href="#home">classified</Navbar.Brand>

//     <div className="">
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <NavDropdown title="Category" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Secret</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Story</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Question</NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link href="#link">Login</Nav.Link>
//         <Nav.Link href="#link">Register</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//     </div>
//   </Container>
//   </Navbar>
//   )
}