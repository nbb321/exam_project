import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import HomePage from './views/home/IndexPage';
import IndexPage from './views/login/IndexPage';
import LoginPage from './views/Logins/index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login"  component={LoginPage} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
