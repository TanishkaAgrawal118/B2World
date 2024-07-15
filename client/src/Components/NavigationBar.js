import React from "react";
import { Container, Nav, Navbar , Dropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const logo = new URL('../Images/logo.png', import.meta.url);

const NavigationBar = () => {
  return (
    <>

      <Navbar expand="lg" className="navbar-custom nav-back" >
        <Container>
        <img src={logo} alt="logo" className="logo"></img>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navLink">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/service">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer> */}
             <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="nav-link no-hover no-background">
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/website" className="dropdown-item" >Website Development</Dropdown.Item>
                <Dropdown.Item href="/android" className="dropdown-item" >Android App Development</Dropdown.Item>
                <Dropdown.Item href="/digital" className="dropdown-item" >Digital Marketing</Dropdown.Item>
                <Dropdown.Item href="/aiml" className="dropdown-item" >AIML</Dropdown.Item>
                <Dropdown.Item href="/seo" className="dropdown-item" >SEO Optimization</Dropdown.Item>
                <Dropdown.Item href="/design" className="dropdown-item" >Design and Branding</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              <LinkContainer to="/jobs">
                <Nav.Link>Careers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pricing">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
