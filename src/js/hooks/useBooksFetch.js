import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from './useActions.js';
import * as actions from '../store/actions/books';


function useBooksFetch(page) {
  const { fetchBooks } = useActions(actions);
  const { data } = useSelector(state => ({
    data: state,
  }));

  useEffect(() => {
    setTimeout(() => {
      if (page) {
        fetchBooks(page, '');
      }
    }, 3000);
  }, [page]);

  return [data];
}

export default useBooksFetch;
