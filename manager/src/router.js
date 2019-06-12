import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './views/Main/index';
// import IndexPage from './views/login/IndexPage';
import LoginPage from './views/login/index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login"  component={LoginPage} />
        <Route path="/"  component={HomePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
