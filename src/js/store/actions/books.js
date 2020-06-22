import { FETCH_BOOKS_BY_PAGE } from '../constants/books';
import { PENDING, SUCCESS, FAIL } from '../constants/axios';
import axios from '../api/axios';

export const fetchBooksSuccess = (data) => {
  return {
    type: FETCH_BOOKS_BY_PAGE + SUCCESS,
    data,
  };
};

export const fetchBooksFail = (error) => {
  return {
    type: FETCH_BOOKS_BY_PAGE + FAIL,
    error,
  };
};

export const fetchBooksStart = () => {
  return {
    type: FETCH_BOOKS_BY_PAGE + PENDING,
  };
};
//nn
export const fetchBooks = (page, filter) => {
  return dispatch => {
    dispatch(fetchBooksStart());
    axios.post('', {
      page,
      itemsPerPage: 20,
      filters: [{ type: 'all', values: [`${ filter }`] }],
    }).then(res => {
      dispatch(fetchBooksSuccess(res.data.books));
    })
      .catch(err => {
        dispatch(fetchBooksFail(err));
      });
  };
};
