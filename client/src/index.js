import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import Root from './components/Root';
import Api from './Api';

Api.search('', (projects) => {
  const initialState = {
    projects,
    searchKeyword: ''
  }

  let enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  let store = createStore(rootReducer, initialState, enhancers);

  render(
    <Root store={store} />,
    document.getElementById('root')
  )
});
