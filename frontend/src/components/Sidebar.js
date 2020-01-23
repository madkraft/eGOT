import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 200px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #292b2c; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    text: 'g',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/about',
                    name: 'About',
                    text: 'ga',
                    key: 2
                },
                {
                    path: '/NoMatch',
                    name: 'NoMatch',
                    text: 'gad',
                    key: 3,
                },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav className="bg-dark">
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem path={item.path} text= {item.text} name={item.name} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 75px;
  width: 200px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class NavItem extends React.Component {

    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <NavIcon>{this.props.text}</NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
`;
export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
    );
    }
}