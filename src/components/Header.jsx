import React from 'react';
import HamburgerNavIcon from './HamburgerNavIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='header'>
      <HamburgerNavIcon />
      <h2>MY STORE</h2>
      <div className='header-button-container'>
        <button>
          <FontAwesomeIcon className='text-xl' icon={faUser} />
        </button>
        <div className='header-button-divider'></div>
        <button>
          <FontAwesomeIcon className='text-xl' icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
}

export default Header;
