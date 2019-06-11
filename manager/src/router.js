import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import HomePage from './views/home/IndexPage';
import IndexPage from './views/login/IndexPage';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* <Route path="/home" exact component={HomePage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
