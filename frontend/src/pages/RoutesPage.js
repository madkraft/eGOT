import React, { Component } from "react";
import { RegionCard } from "../components/RegionCard";
import { SimpleGrid, Box, Spinner, Heading, Stack } from "@chakra-ui/core";
import { fetchMountainRanges, fetchRegions, fetchRoutes } from "../utils/api";

export class RoutesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountainRanges: [],
      regions: [],
      routes: []
    };
  }
  componentDidMount() {
    fetchMountainRanges().then(data => this.setState({ mountainRanges: data }));
    fetchRegions().then(data => this.setState({ regions: data }));
    fetchRoutes().then(data => this.setState({ routes: data }));
  }

  getRoutes(regionId) {
    return this.state.routes.filter(route => regionId === route.regionId);
  }

  render() {
    if (this.state.mountainRanges.length === 0) {
      return <Spinner color="red.500" />;
    }
    return (
      <SimpleGrid columns={3} spacing={50}>
        {this.state.mountainRanges.map(range => {
          return (
            <Box
              bg="gray.100"
              padding={10}
              rounded="lg"
              shadow="lg"
              h="800px"
              overflow="auto"
            >
              <Heading as="h3" textAlign="center" marginBottom={5}>
                {range.name}
              </Heading>
              <Stack spacing={15}>
                {this.state.regions.map(region => {
                  if (range.id === region.mountainId) {
                    return (
                      <RegionCard
                        title={region.name}
                        routes={this.getRoutes(region.id)}
                      />
                    );
                  }
                  return null;
                })}
              </Stack>
            </Box>
          );
        })}
      </SimpleGrid>
    );
  }
}
