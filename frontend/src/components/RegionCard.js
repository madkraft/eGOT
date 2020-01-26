import React, { Component } from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/core";

export class RegionCard extends Component {
  render() {
    const { title, routes, ...rest } = this.props;
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <List>
          {routes.map(route => {
            return (
              <ListItem>
                {route.startPoint} -> {route.finishPoint}
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  }
}
