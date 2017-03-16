import React, {Component} from 'react';
import Api from './Api';
import '../scss/Grid.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let MAX_PROJECTS = 40;

export default class Search extends Component {
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
        <div className="search-wrapper">
          <form autoComplete="off">
            {/* <label for="search">Just start typing...</label> */}
            <input
              id="search"
              type='text'
              placeholder='Search Projects'
              value={this.state.keyword}
              onChange={this.handleSearchInput}
              autoComplete="off"
              type="search"/>
          </form>
        </div>
        <div className="projects">
          <ReactCSSTransitionGroup
            transitionName="project"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}>
            { this.state.projects.map((project, i) => (

                <div className="project" key={i}>
                  <div className="project-image"></div>
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">Lorem ipsum</p>
                  </div>
                </div>
              ))
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
