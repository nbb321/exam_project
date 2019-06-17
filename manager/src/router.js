import React from 'react';
import { Router, Route, Switch } from 'dva/router';
<<<<<<< HEAD
// import IndexPage from './views/login/IndexPage';
import HomePage from './views/home/IndexPage';

// import HomePage from './views/home/IndexPage';
import IndexPage from './views/login/IndexPage';
=======
import LoginPage from '@/views/login/index';
import IndexPage from '@/views/Main/index';

>>>>>>> mc
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
<<<<<<< HEAD
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={IndexPage} />
        {/* <Route path="/home" exact component={HomePage} /> */}
=======
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={IndexPage} />
>>>>>>> mc
      </Switch>
    </Router>
  );
}

export default RouterConfig;
