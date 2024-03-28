import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp19, faArrowDown91 } from '@fortawesome/free-solid-svg-icons';

function ProductSort({ setSortDirection }) {
  const sortHandler = (value) => {
    setSortDirection(value);
  };

  return (
    <div className='products-filter-container'>
      <FontAwesomeIcon
        className='cursor-pointer'
        onClick={() => sortHandler('asc')}
        icon={faArrowUp19}
      />
      <FontAwesomeIcon
        className='cursor-pointer'
        onClick={() => sortHandler('desc')}
        icon={faArrowDown91}
      />
    </div>
  );
}

export default ProductSort;
