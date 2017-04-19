import React, {Component} from 'react';
import '../scss/App.scss';
import Grid from './Grid';
import { connect } from 'react-redux';

class App extends Component {


  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <GradientOverlay position="top" />
        <Grid />
        <GradientOverlay position="bottom" />
      </div>
    )
  }
}

class GradientOverlay extends Component {
  render() {
    return (
      <div className={`gradient-overlay ${ this.props.position }`}></div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    projects: state.projects,
    keyword: state.keyword
  }
}

let ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
