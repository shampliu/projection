import React, {Component} from 'react';
import '../scss/Root.scss';
import Grid from './Grid';

export default class Root extends Component {


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
