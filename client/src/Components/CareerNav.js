import React from 'react'
import { Container, Nav, Navbar , Dropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom';

const logo = new URL('../Images/logo.png', import.meta.url);

const CareerNav = () => {
  const navigate = useNavigate();
  const handlelogo =()=>{
    navigate('/');
  }
  return (
    <>
        <Navbar expand="lg" className="navbar-custom nav-back career-nav" >
        <Container>
        <img src={logo} alt="logo" className="logo" onClick={handlelogo}></img>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto career-btn" >
              <LinkContainer to="/jobs">
                <Nav.Link >Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/training">
                <Nav.Link >Training</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CareerNav
