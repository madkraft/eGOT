import React, { Component } from "react";
import { Formik } from "formik";
import { AddForm } from "../components/AddForm";
import { fetchMountainRanges, fetchRegions, fetchRoutes } from "../utils/api";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Input,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Box
} from "@chakra-ui/core";

export class RouteManagement extends Component {
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
  render() {
    return (
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Dodaj odcinek</Tab>
          <Tab>Modyfikuj odcinek</Tab>
          <Tab>Usuń odcinek</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AddForm
              mountainRanges={this.state.mountainRanges}
              regions={this.state.regions}
            />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
}
