import React, {Component} from 'react';
import { debounce } from '../Util';
import Api from '../Api';
import '../scss/ProjectGrid.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as ActionCreators from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

let MAX_PROJECTS = 40;

class ProjectGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewableProjects: props.projects
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.updateViewableProjects = debounce(this.updateViewableProjects.bind(this), 350);
  }

  componentDidMount() {

  }

  updateViewableProjects() {
    const { projects, searchKeyword } = this.props;
    this.setState({
      viewableProjects: projects.filter((p) => {
        return p.name.indexOf(searchKeyword) !== -1;
      })
    })
  }

  handleSearchInput(e) {
    const keyword = e.target.value;


    this.props.setSearchKeyword(keyword);
    this.updateViewableProjects();
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
              value={ this.props.searchKeyword }
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
            { this.state.viewableProjects.map((project, i) => (

                <div className="project" key={i}>
                  <Link to={`/view/${ project._id }`}>
                    <div className="project-image"></div>
                  </Link>
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


let mapStateToProps = (state) => {
  return {
    projects: state.projects,
    searchKeyword: state.searchKeyword
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

let ConnectedProjectGrid = connect(mapStateToProps, mapDispatchToProps)(ProjectGrid)

export default ConnectedProjectGrid;
