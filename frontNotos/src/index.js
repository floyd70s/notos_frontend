
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Register from "views/index-sections/Register.js"
import ListCampaigns from "views/index-sections/ListCampaigns.js"
// import registerServiceWorker from 'registerServiceWorker.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/nucleo-icons" render={props => <NucleoIcons {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/listCampaigns" render={props => <ListCampaigns {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"),
  // registerServiceWorker()

);

