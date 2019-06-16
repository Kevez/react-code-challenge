import {combineReducers} from 'redux';

function results(state = {resultsToShow: [], totalResults: 0}, action) {
  if (action.type === 'PERFORM_SEARCH_SUCCESS') {
    return {
      resultsToShow: action.response.data.response.pros,
      totalResults: action.response.headers['x-pagination-count'],
      previousQuery: action.previousQuery
    };
  }
  
  return state;
}

function categories(state = [], action) {
  if (action.type === 'GET_CATEGORIES_SUCCESS') {
    return {
      categories: action.payload.categories
    };
  }
  
  return state;
}

const reducers = combineReducers({
  results: results,
  categories: categories,
});

export default reducers;