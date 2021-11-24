import React, { useContext } from "react"
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";



export default function Top(props) {

  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    setUser({});
    sessionStorage.clear();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => {
            props.setShowLogin(false);
            props.setShowRegister(false);
          }}
        >
          <Link to="/" >classified</Link>
        </Navbar.Brand>
        {/* <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav> */}

        <div className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => props.setConfessionFeed(1)}>Secret</NavDropdown.Item>
                <NavDropdown.Item onClick={() => props.setConfessionFeed(2)}>Story</NavDropdown.Item>
                <NavDropdown.Item onClick={() => props.setConfessionFeed(3)}>Question</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => props.setConfessionFeed("recent")}>Most recent</NavDropdown.Item>
                <NavDropdown.Item onClick={() => props.setConfessionFeed("popular")}>Most popular</NavDropdown.Item>
              </NavDropdown>
              {user.id && <Nav.Link onClick={() => props.setShowForm(!props.showForm)}>Confess</Nav.Link>}
              {user.id && <Nav.Link href="/chat"><Link to="/chat">Chat</Link></Nav.Link>}
              {user.id && <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Go to profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={() => handleLogout()}>Logout</NavDropdown.Item>
              </NavDropdown>}
              {!user.id &&
                <Nav.Link
                  onClick={() => {
                    props.setShowRegister(false)
                    props.setShowLogin(true)
                  }}>Login
                </Nav.Link>}
              {!user.id &&
                <Nav.Link
                  onClick={() => {
                    props.setShowLogin(false)
                    props.setShowRegister(true)
                  }}>Register
                </Nav.Link>}
            </Nav>
          </Navbar.Collapse>

        </div>
      </Container>
    </Navbar>
  )

}

