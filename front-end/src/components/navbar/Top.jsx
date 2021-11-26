import React, { useContext } from "react"
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
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
            props.setPageToDisplay(1)
            props.setConfessionFeed("recent")
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
                <NavDropdown.Item href="/" onClick={() => {
                  props.setConfessionFeed(1);
                  props.setPageToDisplay(1)
                  <Navigate />
                  // return <Redirect to="/" />
                }}
                >Secret
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  props.setConfessionFeed(2);
                  props.setPageToDisplay(1)
                }}
                >Story
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  props.setConfessionFeed(3);
                  props.setPageToDisplay(1)
                }}
                >Question
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => {
                  props.setConfessionFeed("recent");
                  props.setPageToDisplay(1)
                }}
                >Most recent
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                  props.setConfessionFeed("popular");
                  props.setPageToDisplay(1)
                }}
                >Most popular
                </NavDropdown.Item>
              </NavDropdown>
              {/* confess form for when on / page --> brings down form */}
              {user.id && <Nav.Link onClick={() => props.setShowForm(!props.showForm)}>Confess</Nav.Link>}
              {/* confess form for when on other page than / --> brings to / and opens form */}
              {/* {user.id && <Nav.Link onClick={() => props.setShowForm(!props.showForm)}>Confess</Nav.Link>} */}
              {user.id && <Nav.Link href="/chat"><Link to="/chat">Chat</Link></Nav.Link>}
              {user.id && <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Go to profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={() => handleLogout()}>Logout</NavDropdown.Item>
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

