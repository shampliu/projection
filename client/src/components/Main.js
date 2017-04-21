import React, {Component} from 'react';
import '../scss/Main.scss';

class Main extends Component {

  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        <GradientOverlay position="top" />
        { React.cloneElement(this.props.children, this.props) }
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

export default Main;
