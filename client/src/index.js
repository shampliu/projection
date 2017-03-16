import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Root from './components/Root';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Root}>
    </Route>
  </Router>
  , document.getElementById('root'));
