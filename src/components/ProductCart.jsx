import React from "react";

function ProductCart({ title, price, thumbnail }) {
  //add to cart implementation
  const addToCartHandler = () => {
    console.log("added to cart");
  };
  return (
    <div className="product-card">
      <img src={thumbnail} alt="Product Image" className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="product-details">
        <p className="product-price">${price}</p>
        <button className="add-to-cart-btn" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCart;
