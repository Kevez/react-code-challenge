import {combineReducers} from 'redux';

const RESULTS_INITIAL_STATE = {
  resultsToShow: [],
  totalResults: 0,
  errorMessage: null
};

function results(state = RESULTS_INITIAL_STATE, action) {
  if (action.type === 'PERFORM_SEARCH_SUCCESS') {
    return {
      resultsToShow: action.response.data.response.pros,
      totalResults: action.response.headers['x-pagination-count'],
      previousQuery: action.previousQuery
    };
  }
  
  if (action.type === 'PERFORM_SEARCH_ERROR') {
    return {
      ...RESULTS_INITIAL_STATE,
      errorMessage: action.errorMessage
    };
  }
  
  return state;
}

function categories(state = [], action) {
  if (action.type === 'GET_CATEGORIES_SUCCESS') {
    const nonHiddenCategories = action.response.data.filter(category => {
      return category.hidden === false
    });
    
    return nonHiddenCategories;
  }
  
  return state;
}

const reducers = combineReducers({
  results: results,
  categories: categories,
});

export default reducers;