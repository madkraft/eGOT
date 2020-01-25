import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
const StyledRegulationsNav = styled.div`
  margin-top: 2%;
  margin-left: 20%;
  margin-right: 10%;
`;


export const Regulations = () => (
    <StyledRegulationsNav>
        <Nav fill variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link>Przepisy ogólne</Nav.Link>
            </Nav.Item>
           <NavDropdown title="Odznaki" id="nav-dropdown">
                <NavDropdown.Item>GOT PTTK "W GORY"</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>GOT PTTK POPULARNA I MAŁA</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>GOT PTTK DUŻA</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>GOT PTTK „ZA WYTRWAŁOŚĆ”</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <Nav.Link>Dokumentacja i weryfikacja</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Przepisy końcowe</Nav.Link>
            </Nav.Item>
        </Nav>
    </StyledRegulationsNav>
)

