import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { RouteManagement } from "./pages/RouteManagement";
import "./App.css";
import { Regulations } from "./pages/Regulations";
import { Account } from "./pages/Account";
import { RoutesPage } from "./pages/RoutesPage";
import SideNav from "./components/SideNav";
import {
  ThemeProvider,
  theme,
  CSSReset,
  SimpleGrid,
  Box
} from "@chakra-ui/core";

class App extends Component {
  state = {
    routes: [
      {
        id: 1,
        name: "Tatry Wysokie",
        points: 15
      },
      {
        id: 2,
        name: "Tatry Zachodnie",
        points: 10
      },
      {
        id: 3,
        name: "Tatry Słowackie",
        points: 5
      }
    ]
  };

  changeColor = e => {
    console.log("Hello");
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <React.Fragment>
          <Router>
            <Header />
            <SimpleGrid
              gridTemplateColumns={"300px auto"}
              columns={2}
              height={"calc(100vh - 80px)"}
            >
              <Box w="100%" p={4} borderRight="1px">
                <SideNav />
              </Box>
              <Box w="100%" p={4}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/regulamin" component={Regulations} />
                  <Route path="/konto" component={Account} />
                  <Route
                    path="/zarzadzanieOdcinkami"
                    component={RouteManagement}
                  />
                  <Route path="/odcinki" component={RoutesPage} />
                </Switch>
              </Box>
            </SimpleGrid>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
export default App;
