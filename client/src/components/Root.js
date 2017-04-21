import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './App';
import ProjectGrid from './ProjectGrid';
import Project from './Project';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ProjectGrid} />
        <Route path='/view/:projectId' component={Project}></Route>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
