import React from "react"
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ConfessForm from "./ConfessForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Top(props) {

  const handleLogout = () => {
    props.setUser(null);
    sessionStorage.clear();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to="/home">classified</Link></Navbar.Brand>
        {/* <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav> */}

        <div className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Secret</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Story</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Question</NavDropdown.Item>
              </NavDropdown>
              {props.user && <Nav.Link onClick={() => props.setShowForm(!props.showForm)}>Confess</Nav.Link>}
              {props.user && <NavDropdown title="Username" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Go to profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>}
              {!props.user && <Nav.Link href="#link"><Link to="/login">Login</Link></Nav.Link>}
              {!props.user && <Nav.Link href="#link"><Link to="/register">Register</Link></Nav.Link>}
              {props.user && <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>

        </div>
      </Container>
    </Navbar>
  )

}

