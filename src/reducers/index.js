import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '../actions';

const initialState = {
  loading: false,
  error: false,
  books: [],
};

const appReducer = createReducer(initialState, {
  [GET_BOOKS]: (state) => {
    state.loading = true;
    state.error = false;
  },

  [GET_BOOKS_SUCCESS]: (state, { payload }) => {
    state.loading = false;
    state.books = payload;
  },

  [GET_BOOKS_FAILURE]: (state) => {
    state.loading = false;
    state.error = true;
  },

});

// Root reducer
const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;