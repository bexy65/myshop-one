import React, { useState, useEffect } from "react";
import ProductCart from "./ProductCart";

function ProductGrid({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const categoryUrl = `https://dummyjson.com/products/category/${selectedCategory}`;

  useEffect(() => {
    const fetchProducts = async (url) => {
      try {
        const res = await fetch(url);
        const productData = await res.json();

        setProducts(productData.products);
      } catch (error) {
        console.log("Error fetching data from server!");
      }
    };

    fetchProducts(categoryUrl);
  }, [selectedCategory]);

  console.log();

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCart
            key={index}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductGrid;
