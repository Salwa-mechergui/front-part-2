/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducers/store/Store";


// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "./components/login/Login"
import "assets/css/material-dashboard-react.css?v=1.8.0";
import RideCreation from "components/RideCreation/RideCreation";
import RideRecap from "components/RideRecap/RideRecap"
import Address from "components/Autocomplete/Address"

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
<Router history={hist}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path="/ride" component={Address} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
  </Provider> ,
  document.getElementById("root")
);
