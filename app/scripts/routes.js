import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home/home.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';
import About from './pages/about/about.jsx';
import Login from './pages/account/login.jsx';
import Teleporter from './pages/teleporter/teleporter.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='/hinfo' component={ Info } />
      <Route path='/home' component={ Home } />
      <Route path='/about' component={ About} />
      <Route path='/login' component={ Login } />
      <Route path='/teleporter' component={ Teleporter } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;