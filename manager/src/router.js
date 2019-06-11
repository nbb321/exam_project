import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './views/home/Index';


import LoginPage from './views/login/Index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
