import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from "./views/IndexPage"
import LoginPage from "./views/login/Index"
// import HomePage from './views/home/Index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        {/* <Route path="/home" exact component={HomePage} /> */}
        
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
