import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import Login from 'shared/components/Login';
import Dashboard  from 'shared/container/Dashboard';


const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  // Additional checks on token can be done here
  return token ? true : false;
}
const Routes = () => (
  
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" render={() => (
        isAuthenticated() ? <Dashboard /> : <Redirect to="/login" />
      )} />
      <Route path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
