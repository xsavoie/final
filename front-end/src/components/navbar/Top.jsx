import React, { useContext } from "react";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

export default function Top(props) {

  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
    sessionStorage.clear();
  };

  const handleRouteChange = (category) => {
    props.setConfessionFeed(category);
    props.setPageToDisplay(1);
    props.setShowRegister(false);
    props.setShowLogin(false);
    props.setShowForm(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => handleRouteChange("recent")}
        >
          <Link to="/" >classified</Link>
        </Navbar.Brand>
        <div className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="/" onClick={() => handleRouteChange(1)}
                ><Link to="/" >Secret</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleRouteChange(2)}
                ><Link to="/" >Story</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleRouteChange(3)}
                ><Link to="/" >Question</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleRouteChange("recent")}
                ><Link to="/" >Most recent</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleRouteChange("popular")}
                ><Link to="/" >Most popular</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {user.id && !props.showForm && <Nav.Link onClick={() => props.setShowForm(true)}><Link to="/" >Confess</Link></Nav.Link>}
              {user.id && props.showForm && <Nav.Link onClick={() => props.setShowForm(false)}>Confess</Nav.Link>}
              {user.id && <Nav.Link href="/chat"><Link to="/chat">Chat</Link></Nav.Link>}
              {user.id && <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Go to profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={() => handleLogout(props.showForm)}>Logout</NavDropdown.Item>
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

