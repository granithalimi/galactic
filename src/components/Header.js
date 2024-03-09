import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/Logo.png'
import '../assets/style/style.css'

function Header() {
  return (
    <Navbar id="header" expand="lg" data-bs-theme="dark">
      <Container>
          <Nav className='ms-auto me-4'>
            <Nav.Link href="#vision-and-mission">Mission</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#">Content3</Nav.Link>
          </Nav>
        
            <Navbar.Brand href="/" >
                <img
                    src={Logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
          <Nav className='me-auto ms-4'>
            <Nav.Link href="#">Content1</Nav.Link>
            <Nav.Link href="#">Content2</Nav.Link>
            <Nav.Link href="#end">Footer</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Header