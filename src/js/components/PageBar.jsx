import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PageBar(props) {
  const { updateIndex, index, indexMax } = props;
  const paginationFirst = () => {
    updateIndex({ index: 1 });
  };

  const paginationLast = () => {
    updateIndex({ index: indexMax });
  };

  const paginationNext = () => {
    if (index < indexMax) { updateIndex({ index: index + 1 }); }
  };

  const paginationPrev = () => {
    if (index > 1) { updateIndex({ index: index - 1 }); }
  };

  return (
    <Pagination className='justify-content-center'>
      <Pagination.First onClick={ paginationFirst } />
      <Pagination.Prev onClick={ paginationPrev } />
      <Pagination.Item active>{ index}</Pagination.Item>
      <Pagination.Next onClick={ paginationNext } />
      <Pagination.Last onClick={ paginationLast } />
    </Pagination>
  );
}

PageBar.propTypes = {
  updateIndex: PropTypes.func,
  index: PropTypes.number,
  indexMax: PropTypes.number,
};

PageBar.defaultProps = {
  updateIndex: () => {},
  index: 0,
  indexMax: 0,
};


export default PageBar;
