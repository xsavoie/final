import React, { useContext } from "react";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import './Top.scss'

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
    props.setShowPollForm(false);
  };

  return (
    <Navbar expand="lg" className="navbar-top">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => handleRouteChange("recent")}
        >
          <Link className="nav-font" to="/" >classified</Link>
        </Navbar.Brand>
        <div className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="me-auto">
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item  href="/" onClick={() => handleRouteChange(1)}
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
                <NavDropdown.Item
                ><Link to="/polls" >Polls</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {user.id && !props.showForm &&
                <Nav.Link 
                  onClick={() => {
                    props.setShowForm(true);
                    props.setShowPollForm(false);
                  }}>
                  <Link to="/" className="nav-font" >Confess</Link>
                </Nav.Link>}

              {user.id && props.showForm &&
                <Nav.Link className="nav-font"
                  onClick={() => {
                    props.setShowForm(false);
                    props.setShowPollForm(false);
                  }}>Confess
                </Nav.Link>}

              {user.id && !props.showPollForm &&
                <Nav.Link
                  onClick={() => {
                    props.setShowPollForm(true);
                    props.setShowForm(false);
                  }}>
                  <Link to="/polls" className="nav-font">Create a Poll</Link>
                </Nav.Link>}

              {user.id && props.showPollForm && <Nav.Link className="nav-font"
                onClick={() => {
                  props.setShowPollForm(false);
                  props.setShowForm(false);
                }}>Create a Poll
              </Nav.Link>}

              {user.id && <Nav.Link onClick={() => {
                    console.log("pizza")
                    props.setShowPollForm(false);
                    props.setShowForm(false);
                  }}><Link to="/chat" className="nav-font" >Chat</Link></Nav.Link>}

              {user.id && <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Go to profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={() => handleLogout(props.showForm)}>Logout</NavDropdown.Item>
              </NavDropdown>}

              {!user.id &&
                <Nav.Link className="nav-font"
                  onClick={() => {
                    props.setShowRegister(false);
                    props.setShowLogin(true);
                  }}>Login
                </Nav.Link>}
              {!user.id &&
                <Nav.Link className="nav-font"
                  onClick={() => {
                    props.setShowLogin(false);
                    props.setShowRegister(true);
                  }}>Register
                </Nav.Link>}
            </Nav>
          </Navbar.Collapse>

        </div>
      </Container>
    </Navbar>
  )

}

