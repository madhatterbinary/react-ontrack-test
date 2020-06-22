
import React, { useState } from 'react';
import useBooksFetch from 'js/hooks/useBooksFetch';
import SearchBox from 'js/components/SearchBox';
import Spinner from 'js/components/Spinner';
import BookBox from 'js/components/BookBox';
import BookBoxItem from 'js/components/BookBoxItem';
import PageBar from 'js/components/PageBar';
import { useActions } from 'js//hooks/useActions.js';
import * as actions from 'js/store/actions/books';
import PropTypes from 'prop-types';
import './App.scss';

function App(props) {
  const [data] = useBooksFetch(1);
  const { books } = data;
  const { fetchBooks } = useActions(actions);
  const [index, setIndex] = useState(1);
  if (data.books.loading === null || data.books.loading === true) return <Spinner />;
  const { history } = props;
  const routeURL = () => {
    const string = `/${ index }`;
    history.push(string);
  };

  const updateIndex = (event) => {
    setIndex(event.index);
    fetchBooks(event.index, '');
    routeURL();
  };


  return (
    <div className='container'>
      <h2 style={{ textAlign: 'left', marginLeft: 0, marginTop: 20, marginBottom: 20, borderBottom: '1px solid' }}>Book Store</h2>
      <main className='flexbox'>
        <div className='search-panel' style={{ display: 'flex', flexDirection: 'column' }}>
          <SearchBox history={ history } index={ index } />
          <div
            className='container mb-5'
            ref={ (el) => {
              if (el) {
                el.style.setProperty('margin', '0px', 'important');
                el.style.setProperty('padding', '0px', 'important');
              }
            } }
          >
            <div style={{ marginTop: 13 }}>
              <div
                className='w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between'
                ref={ (el) => {
                  if (el) {
                    el.style.setProperty('margin', '0px', 'important');
                    el.style.setProperty('padding', '0px', 'important');
                  }
                } }
              >
                <div
                  className='d-flex flex-row py-4 align-items-center'
                  ref={ (el) => {
                    if (el) {
                      el.style.setProperty('padding', '0px', 'important');
                    }
                  } }
                >
                  <PageBar
                    updateIndex={ (evt) => updateIndex(evt) }
                    index={ index }
                    indexMax={ books.data.length }
                  />
                </div>
              </div>
            </div>
          </div>
          <BookBox id='box-1' className='box'>
            {books.data.map(book => {
              return (
                <BookBoxItem
                  key={ book.id }
                  title={ book.book_title }
                  author={ book.book_author }
                  city={ book.book_publication_city }
                  country={ book.book_publication_country }
                  year={ book.book_publication_year }
                  id={ book.id }
                  className='item'
                  index={ index }
                />
              );
            })}
          </BookBox>
        </div>
      </main>
    </div>
  );
}

App.propTypes = {
  history: PropTypes.object,
};

App.defaultProps = {
  history: {},
};

export default App;
