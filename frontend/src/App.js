import React, {Component} from 'react';
import Routes from './components/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import { SideMenu } from './components/SideMenu';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NoMatch } from './pages/NoMatch';
import './App.css';
import { ThemeProvider } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Badge } from "@chakra-ui/core";
import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";
import { Regulations } from './pages/Regulations';
import { Account } from './pages/Account';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div> 
//   );
// }

class App extends Component {
  state = {
    routes: [
      {
        id:1,
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
  }
  
  changeColor = (e) => {
    console.log("Hello")
  }

  render(){
    return(
      // <div className="eGOT">
      //   <Routes routes={this.state.routes} changeColor={this.changeColor}/>
      // </div>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <SideMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/regulamin" component={Regulations} />
            <Route path="/konto" component={Account} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App;
