import React, { Component } from 'react';

class Project extends Component {
  render() {
    const i = this.props.projects.findIndex(p => p._id == this.props.params.projectId);
    console.log(this.props.projects[i]);
    return (
      <div>
        Single
      </div>
    )
  }
}

export default Project;
