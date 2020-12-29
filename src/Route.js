import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
import Items from "./component/Items";
import Navbar from "./component/Navbar";

function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <br/><br/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Items">
            <Items />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouteConfig;
