import React, { useEffect } from 'react';

function CartModal({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  useEffect(() => {
    cartItems.forEach((item) => {
      item.totalPrice = item.quantity * item.price;
    });

    const handleOutsideClick = (event) => {
      // Check if the click is outside the modal
      if (isOpen && !event.target.closest('.modal')) {
        // Close the modal
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [cartItems, isOpen, onClose]);

  const increaseQuantityHandler = (product) => {
    increaseQuantity(product.id);
  };

  const decreaseQuantityHandler = (product) => {
    decreaseQuantity(product.id);
  };

  const removeFromCartHandler = (product) => {
    removeFromCart(product.id);
  };
  return isOpen ? (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='product-cart-header'>
          <h2>Shopping Cart</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className='product-cart-container'>
          {cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <div key={index} className='product-cart-item'>
                <img src={product.thumbnail} alt='' />
                <h4>{product.title}</h4>
                <div className='product-cart-quantity flex flex-row mx-1'>
                  <p className='w-1/2 mx-1 text-center'>{product.quantity}</p>
                  <div className='cart-quantity-button-container w-1/2 mx-1 h-full'>
                    <button
                      className='w-5'
                      onClick={() => increaseQuantityHandler(product)}
                    >
                      +
                    </button>
                    <button
                      className='w-5'
                      onClick={() => decreaseQuantityHandler(product)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <p className='mx-4'>${product.totalPrice}</p>
                <button
                  className='product-cart-delete-button'
                  onClick={() => removeFromCartHandler(product)}
                >
                  &#10005;
                </button>
              </div>
            ))
          ) : (
            <p>No items added yet to the card!</p>
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default CartModal;
