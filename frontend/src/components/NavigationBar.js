import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #179D16;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #179D16;
    &:hover { color: white; }
  }
`;
export const NavigationBar = () => (
    // <Styles>
    //     <Navbar expand="lg">
    //         <Navbar.Brand href="/">Elektroniczna Górska Odznaka Turystyczna</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="ml-auto">
    //                 <Nav.Item>Aktualna liczba punktów GOT: </Nav.Item>
    //                 <Nav.Item ><Nav.Link  href="/">Regulamin</Nav.Link></Nav.Item>
    //                 <Nav.Item><Nav.Link href="/about">Moje Konto</Nav.Link></Nav.Item>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    // </Styles>
  <Styles>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Elektroniczna Górska Odznaka Turystyczna</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Aktualna liczba punktów GOT: 27
        </Navbar.Text>
        <Nav.Link href="/regulamin">
          <i class="fas fa-star"></i>
        </Nav.Link>
        <Nav.Link href="/konto">
          <i class="fas fa-user"></i>
        </Nav.Link>
        
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)