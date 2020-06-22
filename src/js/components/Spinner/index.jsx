import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='container' style={{ marginTop: 50 }}>
      <div className='row'>
        <div className='text-center col'>
          <ClipLoader
            sizeUnit='px'
            size={ 40 }
            color='#007bff'
            loading
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
