import React, { useState } from 'react';

function BookBox(props) {
  return (
    <div
      id={ props.id }
      className={ props.className }
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}
    ><span style={{ fontSize: 20 }}>{ props.header }</span>
      { props.children }
    </div>
  );
}

export default BookBox;
