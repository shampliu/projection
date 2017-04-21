import React, {Component} from 'react';
import { connect } from 'react-redux';
import Main from './Main';

let mapStateToProps = (state) => {
  return {
    projects: state.projects,
    keyword: state.keyword
  }
}

let App = connect(mapStateToProps)(Main);

export default App;
