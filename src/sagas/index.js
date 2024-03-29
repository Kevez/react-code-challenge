import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects'
import {actions, types} from '../actions';

const API_SEARCH_ENDPOINT = 'https://demo.plentific.com/find-a-pro/api/v2/public/pro/search-pros/';
const PAGINATION_LIMIT = 20;

function* getCategories() {
  const response = yield axios.get('./data/categories.json');
  yield put(actions.getCategoriesSuccess(response))
}

function* performSearch(action) {
  try {
    const response = yield axios.post(API_SEARCH_ENDPOINT, action.query, {
      headers: {
        'Content-Type': 'application/json',
        'x-pagination-offset': action.offset,
        'x-pagination-limit': PAGINATION_LIMIT,
      }
    });
  
    yield put(actions.performSearchSuccess(response, action.query));
  } catch(error) {
    yield put(actions.performSearchError(error.response.data.message));
  }
}

export function* watchGetCategories() {
  yield takeLatest(types.GET_CATEGORIES, getCategories)
}

export function* watchPerformSearch() {
  yield takeLatest(types.PERFORM_SEARCH, performSearch)
}
