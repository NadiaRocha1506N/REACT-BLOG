import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Maps from "./Maps";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/maps" component={Maps}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
