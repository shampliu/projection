import { routerReducer } from 'react-router-redux';
import { combineReducers  } from 'redux';

const searchKeyword = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_KEYWORD':
      return Object.assign({}, state, {
        searchKeyword: action.keyword
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchKeyword
})

export default rootReducer;
