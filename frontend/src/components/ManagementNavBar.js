import React from 'react';
import styled from 'styled-components';
import { Nav, NavDropdown } from 'react-bootstrap';

export const ManagementNavBar = () => (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link>Dodaj odcinek</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Modyfikuj odcinek</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Usuń odcinek</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Wyświetl odcinki</Nav.Link>
            </Nav.Item>
        </Nav>
)