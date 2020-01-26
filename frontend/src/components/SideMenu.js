import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"
import styled from 'styled-components';
const StyledMenu = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 16%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #343a40; /* Black */
  overflow-x: hidden; 
  .nav{
    margin-top: 10%;
  }    /* Disable horizontal scroll */
  .nav-item:hover{
    background-color: #179D16;
    color: #343a40;
  }
  .nav-link {
    font-size: 1.2em;
    color: #179D16;
    &:hover { color: white; }
  }
`;
export const SideMenu = () => (
  <StyledMenu>
      <Nav  variant="tabs" className="flex-column bg-dark">
          <Nav.Item ><Nav.Link href="/konto">Moje konto</Nav.Link></Nav.Item>
          <Nav.Item ><Nav.Link href="/mojetrasy">Moje trasy</Nav.Link></Nav.Item>
          <NavDropdown.Divider />
          <Nav.Item ><Nav.Link href="/zaplanujTrase">Zaplanuj trasę</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/zatwierdzTrase">Potwierdź trasę</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/odcinki2">Informacje o odcinkach</Nav.Link></Nav.Item>
          <Nav.Item>
            <Nav>
              <Link to="/odcinki">
Informacje o odcinkach
              </Link>
              </Nav></Nav.Item>
          <NavDropdown.Divider />
          <Nav.Item ><Nav.Link href="/zarzadzanieOdcinkami">Zarządzanie odcinkami</Nav.Link></Nav.Item>
      </Nav>
    </StyledMenu>
)