import React from "react";

function ProductCart({ title, price, thumbnail, onClick }) {
  //add to cart implementation

  return (
    <div className="product-card">
      <img src={thumbnail} alt="Product Image" className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="product-details">
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn" onClick={onClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCart;
