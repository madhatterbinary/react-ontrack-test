import React from 'react';
import PropTypes from 'prop-types';

function BookBoxItem(props) {
  const {
    title,
    author,
    city,
    country,
    year,
    id,
    className,
  } = props;

  return (
    <div
      style={{ display: 'flex', width: 550, height: 350, margin: 'auto', border: '1px solid #ced4da', marginBottom: 5, backgroundColor: '#f8f9fa' }}
      id={ id }
      className={ className }
    >
      <img alt='profile pic' className='profile-img' style={{ width: 'auto', padding: 10 }} src='http://dummyimage.com/200x300/007bff/007bff' />
      <div className='text-content' style={{ width: 310 }}>
        <div className='book-details' style={{ display: 'inline-block', padding: 5 }}>
          <h4>{ title }</h4>
          <li><strong>Author: </strong>{ author }</li>
          <li><strong>Publication city: </strong>{ city }</li>
          <li><strong>Publication country: </strong>{ country }</li>
          <li><strong>Publication year: </strong>{ year }</li>
        </div>
      </div>
    </div>
  );
}

BookBoxItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.array,
  city: PropTypes.string,
  country: PropTypes.string,
  year: PropTypes.number,
  id: PropTypes.number,
  className: PropTypes.string,
};

BookBoxItem.defaultProps = {
  title: '',
  author: null,
  city: '',
  country: '',
  year: 0,
  id: 0,
  className: '',
};

export default BookBoxItem;
