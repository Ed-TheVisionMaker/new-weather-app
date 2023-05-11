import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from 'styled-components';
 
import Home from "./pages/Home";
import City from "./pages/City";
import SearchSelect from "./components/SearchSelect"

 export default class App extends React.Component {
  render() {
    console.log("app rendered")
    return (
      <Router>
      <Container>
        <SearchSelect component={SearchSelect}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:cityId" component={City}/>
        </Switch>
      </Container>
    </Router>
    )
  }
}


