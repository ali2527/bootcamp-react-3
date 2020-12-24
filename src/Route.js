import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home"
import About from "./component/About"
import Products from "./component/Products"
import Items from "./component/Items"

function RouteConfig() {
    return (
        <div>
                <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Items">Items</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
      </div>
    </Router>
        </div>
    )
}

export default RouteConfig
