export const types = {
  PERFORM_SEARCH: 'PERFORM_SEARCH',
  PERFORM_SEARCH_SUCCESS: 'PERFORM_SEARCH_SUCCESS'
};

export const actions = ({
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
  }
});

/*import axios from 'axios';

const API_ENDPOINT_GET_CATEGORIES = 'https://d1i9eedhsgvpdh.cloudfront.net/production-plentific-static/api-cache/find-a-pro/api/v1/categories/all.json';
const API_ENDPOINT_SEARCH = 'https://demo.plentific.com/find-a-pro/api/v2/public/pro/search-pros/';
const PAGINATION_LIMIT = 20;

export const getCategories = () => {
  return (dispatch) => {
    return axios.get('./data/categories.json')
    .then(response => {
      dispatch(getCategoriesSuccess(response))
    })
    .catch(error => {
      throw(error);
    });
  };
}

export const getCategoriesSuccess = (response) => {
  debugger
  return {
    type: 'GET_CATEGORIES_SUCCESS',
    payload: {
      categories: [1, 2, 3, 4, 5]
    }
  }
};
*/