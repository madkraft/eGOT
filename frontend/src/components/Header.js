import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Divider, Link } from "@chakra-ui/core";

export class Header extends Component {
  render() {
    return (
      <Box bg="tomato" w="100%" p={4} h="80px" display="flex">
        <Heading as="h3">
          <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
            Elektroniczna Górska Odznaka Turystyczna
          </Link>
        </Heading>
        <div>Aktualna liczba punktów GOT: 27</div>
        <span>
          <Link as={RouterLink} to="/terms" style={{ textDecoration: "none" }}>
            Regulamin
          </Link>
        </span>
        <Divider orientation="vertical" />
        <span>
          <Link
            as={RouterLink}
            to="/account"
            style={{ textDecoration: "none" }}
          >
            Konto
          </Link>
        </span>
      </Box>
    );
  }
}
