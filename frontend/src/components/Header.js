import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Divider, Link } from "@chakra-ui/core";

export class Header extends Component {
  render() {
    return (
      <Box
        bg="teal.300"
        w="100%"
        p={4}
        h="80px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size="lg" as="h2">
          <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
            Elektroniczna Górska Odznaka Turystyczna
          </Link>
        </Heading>
        <div>
          <div>
            Aktualna liczba punktów GOT:{" "}
            <Box as="span" fontWeight="bold">
              27
            </Box>
          </div>
          <Box>
            <Link
              as={RouterLink}
              to="/terms"
              style={{ textDecoration: "none" }}
            >
              Regulamin
            </Link>{" "}
            <Link
              as={RouterLink}
              to="/account"
              style={{ textDecoration: "none" }}
            >
              Konto
            </Link>
          </Box>
        </div>
      </Box>
    );
  }
}
