/* eslint-disable import/no-unused-modules */
import { FETCH_BOOKS_BY_PAGE } from 'js/store/constants/books';
import { PENDING, SUCCESS, FAIL } from 'js/store/constants/axios';

export const initialState = {
  loading: null,
};

const loadBooksDataActionMap = {
  // Public GET's
  [FETCH_BOOKS_BY_PAGE + PENDING]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [FETCH_BOOKS_BY_PAGE + FAIL]: (state, action) => {
    const { error: { response } } = action;
    return {
      ...state,
      errors: ((response || {}).data || {}).errors,
      loading: false,
    };
  },
  [FETCH_BOOKS_BY_PAGE + SUCCESS]: (state, action) => {
    const { data } = action;
    return {
      ...state,
      data,
      loading: false,
    };
  },
};

const actionsMap = {
  ...loadBooksDataActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
