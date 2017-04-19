import { routerReducer } from 'react-router-redux';
import { combineReducers  } from 'redux';

const searchKeyword = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_KEYWORD':
      console.log('state is', state);
      return action.keyword;
    default:
      return state;
  }
}

const projects = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchKeyword,
  projects
})

export default rootReducer;
