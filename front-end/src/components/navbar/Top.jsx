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
          <label><a href="/" className="nav-font-confessions" > Confessions🗣 </a></label>
        </Navbar.Brand>
        <div className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Sort By" id="basic-nav-dropdown">

                <NavDropdown.Item href="/" onClick={() => handleRouteChange(1)}
                ><Link className="category-dropdown" to="/" >Secrets</Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="/" onClick={() => handleRouteChange(2)}
                ><Link className="category-dropdown" to="/" >Stories</Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="/polls"
                ><Link className="category-dropdown" to="/polls" >Questions</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="/" onClick={() => handleRouteChange("recent")}
                ><Link className="category-dropdown" to="/" >Most recent</Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="/" onClick={() => handleRouteChange("popular")}
                ><Link className="category-dropdown" to="/" >Most popular</Link>
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
                  <Link to="/polls" className="nav-font">Ask a question</Link>
                </Nav.Link>}

              {user.id && props.showPollForm && <Nav.Link className="nav-font"
                onClick={() => {
                  props.setShowPollForm(false);
                  props.setShowForm(false);
                }}>Create a Poll
              </Nav.Link>}

              {user.id && <NavDropdown title="Chat" id="basic-nav-dropdown">
                <NavDropdown.Item href="/privatechat">Private Chat</NavDropdown.Item>
                <NavDropdown.Item href="/publicchat">Public Chat</NavDropdown.Item>
              </NavDropdown>}

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

//   return (
//     <Navbar expand="lg" className="navbar-top">
//       <Container>
//         <Navbar.Brand
//           href="#home"
//           onClick={() => handleRouteChange("recent")}
//         >
//           <label><a href="/" className="nav-font-confessions" > Confessions🗣 </a></label>
//         </Navbar.Brand>
//         <div className="">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav  className="me-auto">
//               <NavDropdown title="Category" id="basic-nav-dropdown">
//                 <NavDropdown.Item  href="/" onClick={() => handleRouteChange(1)}
//                 ><Link className="category-dropdown" to="/" >Secret</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => handleRouteChange(2)}
//                 ><Link className="category-dropdown" to="/" >Story</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => handleRouteChange(3)}
//                 ><Link className="category-dropdown" to="/" >Question</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item onClick={() => handleRouteChange("recent")}
//                 ><Link className="category-dropdown" to="/" >Most recent</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => handleRouteChange("popular")}
//                 ><Link className="category-dropdown" to="/" >Most popular</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                 ><Link className="category-dropdown" to="/polls" >Polls</Link>
//                 </NavDropdown.Item>
//               </NavDropdown>
//               {user.id && !props.showForm &&
//                 <Nav.Link 
//                   onClick={() => {
//                     props.setShowForm(true);
//                     props.setShowPollForm(false);
//                   }}>
//                   <Link to="/" className="nav-font" >Confess</Link>
//                 </Nav.Link>}

//               {user.id && props.showForm &&
//                 <Nav.Link className="nav-font"
//                   onClick={() => {
//                     props.setShowForm(false);
//                     props.setShowPollForm(false);
//                   }}>Confess
//                 </Nav.Link>}

//               {user.id && !props.showPollForm &&
//                 <Nav.Link
//                   onClick={() => {
//                     props.setShowPollForm(true);
//                     props.setShowForm(false);
//                   }}>
//                   <Link to="/polls" className="nav-font">Create a Poll</Link>
//                 </Nav.Link>}

//               {user.id && props.showPollForm && <Nav.Link className="nav-font"
//                 onClick={() => {
//                   props.setShowPollForm(false);
//                   props.setShowForm(false);
//                 }}>Create a Poll
//               </Nav.Link>}

//               {user.id && <NavDropdown title="Chat" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="/privatechat">Private Chat</NavDropdown.Item>
//                 <NavDropdown.Item href="/publicchat">Public Chat</NavDropdown.Item>
//               </NavDropdown>}

//               {user.id && <NavDropdown title={user.email} id="basic-nav-dropdown">
//                 <NavDropdown.Item href="/profile">Go to profile</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="/" onClick={() => handleLogout(props.showForm)}>Logout</NavDropdown.Item>
//               </NavDropdown>}

//               {!user.id &&
//                 <Nav.Link className="nav-font"
//                   onClick={() => {
//                     props.setShowRegister(false);
//                     props.setShowLogin(true);
//                   }}>Login
//                 </Nav.Link>}
//               {!user.id &&
//                 <Nav.Link className="nav-font"
//                   onClick={() => {
//                     props.setShowLogin(false);
//                     props.setShowRegister(true);
//                   }}>Register
//                 </Nav.Link>}
//             </Nav>
//           </Navbar.Collapse>

//         </div>
//       </Container>
//     </Navbar>
//   )

// }

