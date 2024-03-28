import React, { useState, useEffect } from 'react';
import HamburgerNavIcon from './HamburgerNavIcon';
import Categories from './Categories';
import CartModal from './CartModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header({
  setSelectedCategory,
  selectedCategory,
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [expanded, setExpanded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  function toggleSidebar() {
    setExpanded(!expanded);
  }

  return (
    <div className='header-container'>
      <div className='header'>
        <HamburgerNavIcon
          icon={
            <FontAwesomeIcon
              className='text-2xl'
              icon={faBars}
              onClick={toggleSidebar}
            />
          }
        />
        <h2>
          <a href='/' className='no-underline'>
            MY STORE
          </a>
        </h2>
        <div className='header-button-container'>
          <div className='header-button-divider'></div>
          <button onClick={openCart}>
            <FontAwesomeIcon className='text-xl' icon={faShoppingCart} />
          </button>
        </div>
        <CartModal
          isOpen={isCartOpen || false}
          onClose={closeCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
      <Categories
        state={expanded}
        function={toggleSidebar}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Header;
