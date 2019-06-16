export const types = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  PERFORM_SEARCH: 'PERFORM_SEARCH',
  PERFORM_SEARCH_SUCCESS: 'PERFORM_SEARCH_SUCCESS',
  PERFORM_SEARCH_ERROR: 'PERFORM_SEARCH_ERROR'
};

export const actions = ({
  getCategories: () => {
    return {
      type: types.GET_CATEGORIES
    }
  },
  
  getCategoriesSuccess: (response) => {
    return {
      type: types.GET_CATEGORIES_SUCCESS,
      response: response
    }
  },
  
  performSearch: (query, offset) => {
    return {
      type: types.PERFORM_SEARCH,
      query: query,
      offset: offset
    }
  },
  
  performSearchSuccess: (response, previousQuery) => {
    return {
      type: types.PERFORM_SEARCH_SUCCESS,
      response: response,
      previousQuery: previousQuery
    }
  },
  
  performSearchError: (errorMessage) => {
    return {
      type: types.PERFORM_SEARCH_ERROR,
      errorMessage: errorMessage
    }
  },
});
