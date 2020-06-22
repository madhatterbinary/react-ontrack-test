import React, { useRef } from 'react';
import { useActions } from 'js//hooks/useActions.js';
import * as actions from 'js/store/actions/books';
import PropTypes from 'prop-types';

function SearchBox(props) {
  const { fetchBooks } = useActions(actions);
  const inputRef = useRef();
  const { history, index } = props;

  function getFilteredBooks(e) {
    if (e.key === 'Enter') {
      let string = `/${ index }`;
      fetchBooks(1, e.target.value);
      if (e.target.value !== '') {
        string += `/${ e.target.value }`;
      }
      history.push(string);
    }
    if (e.type === 'click') {
      fetchBooks(1, inputRef.current.value);
      let string = `/${ index }`;
      if (inputRef.current.value !== '') {
        string += `/${ inputRef.current.value }`;
      }
      history.push(string);
    }
  }
  return (
    <div className='form-group' style={{ display: 'flex', marginBottom: 0 }}>
      <input ref={ inputRef } type='text' className='form-control' id='formGroupExampleInput2' placeholder='Search Book' onKeyPress={ getFilteredBooks } />
      <button type='button' className='btn btn' onClick={ (e) => getFilteredBooks(e) }><span className='material-icons' /><span className='material-icons'>
        search
      </span></button>
    </div>
  );
}

SearchBox.propTypes = {
  history: PropTypes.object,
  index: PropTypes.number,
};

SearchBox.defaultProps = {
  history: {},
  index: 1,
};

export default SearchBox;
