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
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Products" component={Products}/>
          <Route exact path="/Products/:id" >
            <Items />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouteConfig;
