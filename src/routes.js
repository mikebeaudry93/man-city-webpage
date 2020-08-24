import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Hoc/Layout";

import Home from "./Components/home/index";
import SignIn from "./Components/signin";

import Dashboard from "./Components/admin/Dashboard";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
