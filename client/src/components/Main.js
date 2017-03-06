import React, {Component} from 'react';
import Api from './Api';
import '../scss/Main.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let MAX_PROJECTS = 40;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      keyword: ''
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {

  }

  handleSearchInput(e) {
    const keyword = e.target.value;

    this.setState({ keyword }, () => { // no need for binding, arrow functions always use this value from enclosing scope
      Api.search(this.state.keyword, (projects) => {
        this.setState({
          projects: projects.slice(0, MAX_PROJECTS)
        });
      });

    });
  }



  render() {
    return (
      <div className="container">
        <input
          type='text'
          placeholder='Search Projects'
          value={this.state.keyword}
          onChange={this.handleSearchInput}
          type="search"/>
        <div className="projects">
          <ReactCSSTransitionGroup
            transitionName="project"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            { this.state.projects.map((project, i) => (

                <div className="project" key={i}>{project.name}</div>
              ))
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
