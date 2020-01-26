import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Stack, Link, Box } from "@chakra-ui/core";

const menuItem = [
  { text: "Moje konto", path: "/konto" },
  { text: "Moje trasy", path: "/ty" },
  { text: "Zaplanuj trasę", path: "/qw" },
  { text: "Potwierdź trasę", path: "/er" },
  { text: "Informacje o odcinkach", path: "/odcinki" },
  { text: "Zarządzanie odcinakmi", path: "/zarzadzanieOdcinkami" }
];

export default class SideNav extends Component {
  render() {
    return (
      <Stack spacing={5}>
        {menuItem.map(item => {
          return (
            <Box>
              <NavLink
                to={item.path}
                style={{ textDecoration: "none" }}
                activeStyle={{ color: "red" }}
              >
                <Button variant="outline" width="100%">
                  {item.text}
                </Button>
              </NavLink>
            </Box>
          );
        })}
      </Stack>
    );
  }
}
