import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// example pages
import Home from "views/Intro.js";
import GivingTree from "views/GivingTree.js";
import Touro from "views/Touro.js";
import StopMotion from "views/StopMotion.js";
import ReactPortfolio from "views/ReactPortfolio.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={props => <Home {...props} />} />
      <Route path="/projects/giving-tree" render={props => <GivingTree {...props} />} />
      <Route path="/projects/react-portfolio" render={props => <ReactPortfolio {...props} />} />
      <Route path="/projects/touro" render={props => <Touro {...props} />} />
      <Route path="/projects/stop-motion" render={props => <StopMotion {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
