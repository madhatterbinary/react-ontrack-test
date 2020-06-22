import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import booksLibrary from './books';

export default (history) => combineReducers({
  router: connectRouter(history),
  books: booksLibrary,
});

