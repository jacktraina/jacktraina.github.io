import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// example pages
import Home from "views/Home.js";
import GivingTree from "views/GivingTree.js";
import ReactPortfolio from "views/ReactPortfolio.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Home {...props} />} />
      <Route path="/giving-tree" render={props => <GivingTree {...props} />} />
      <Route path="/react-portfolio" render={props => <ReactPortfolio {...props} />} />
      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
