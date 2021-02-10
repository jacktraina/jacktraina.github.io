import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";

// example pages
import GivingTree from './components/Projects/ProjectPages/GivingTree';
import Touro from './components/Projects/ProjectPages/Touro';
import StopMotion from './components/Projects/ProjectPages/StopMotion';
import ReactPortfolio from './components/Projects/ProjectPages/ReactPortfolio';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={props => <Layout {...props} />} />
      <Route path="/projects/giving-tree" render={props => <GivingTree {...props} />} />
      <Route path="/projects/react-portfolio" render={props => <ReactPortfolio {...props} />} />
      <Route path="/projects/touro" render={props => <Touro {...props} />} />
      <Route path="/projects/stop-motion" render={props => <StopMotion {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
