import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from "./views/IndexPage"
import LoginPage from "@/views/login/Index"
import HomePage from '@/views/home/Index';
import ViewItemPage from "@views/Questions/dialog"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/"  component={IndexPage} /> */}
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
        <Route path="/questions/dialog" component={ViewItemPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;