import React, {Component} from 'react';
import { debounce } from '../Util';
import Api from '../Api';
import '../scss/Grid.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { setSearchKeyword } from '../actions/index';
import { connect } from 'react-redux';

let MAX_PROJECTS = 40;

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.updateGrid = debounce(this.updateGrid.bind(this), 350);

  }

  componentDidMount() {

  }

  updateGrid() {
    Api.search(this.props.searchKeyword, (projects) => {
      this.setState({
        projects: projects.slice(0, MAX_PROJECTS)
      });
    });

  }

  handleSearchInput(e) {
    const keyword = e.target.value;


    this.props.setSearchKeyword(keyword);

    this.updateGrid(keyword);
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
            { this.props.projects.map((project, i) => (

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

let filterProjects = (projects, keyword) => {
  return projects.filter((p) => {
    return p.name.indexOf(keyword) !== -1;
  })
}

let mapStateToProps = (state) => {
  return {
    projects: filterProjects(state.projects, state.searchKeyword),
    searchKeyword: state.searchKeyword
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setSearchKeyword: (k) => {
      dispatch(setSearchKeyword(k));
    }
  }
}

let ConnectedGrid = connect(mapStateToProps, mapDispatchToProps)(Grid)

export default ConnectedGrid;
