import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import EndOfGame from './containers/EndOfGame';
import Dashboard from './containers/DashboardPage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="eog" component={EndOfGame}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
