import React from "react";

function CartModal({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
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
    <div className="modal-overlay">
      <div className="modal">
        <div className="product-cart-header">
          <h2>Shopping Cart</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="product-cart-container">
          {cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <div key={index} className="product-cart-item">
                <img src={product.thumbnail} alt="" />
                <h4>{product.title}</h4>
                <div className="product-cart-quantity flex flex-row mx-6">
                  <p className="w-1/2">{product.quantity}</p>
                  <div className="w-1/2">
                    <button onClick={() => increaseQuantityHandler(product)}>
                      +
                    </button>
                    <button onClick={() => decreaseQuantityHandler(product)}>
                      -
                    </button>
                  </div>
                </div>
                <p>${product.price}</p>
                <button
                  className="product-cart-delete-button"
                  onClick={() => removeFromCartHandler(product)}
                >
                  X
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
