import React, { useState, useEffect } from "react";
import ProductCart from "./ProductCart";

function ProductGrid({ selectedCategory, sortDirection, addToCart }) {
  const [products, setProducts] = useState([]);
  const categoryUrl = `https://dummyjson.com/products/category/${selectedCategory}`;

  useEffect(() => {
    const sortHandler = (products, sortDirection) => {
      const sortedProducts = products.sort((a, b) => {
        if (sortDirection === "asc") {
          return a.price - b.price;
        } else if (sortDirection === "desc") {
          return b.price - a.price;
        }
      });
      setProducts(sortedProducts);
    };

    const fetchProducts = async (url) => {
      try {
        const res = await fetch(url);
        const productData = await res.json();

        if (typeof sortDirection === "string") {
          sortHandler(productData.products, sortDirection);
        } else {
          setProducts(productData.products);
        }
      } catch (error) {
        console.log("Error fetching data from server!");
      }
    };

    fetchProducts(categoryUrl);
  }, [selectedCategory, sortDirection]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCart
            key={index}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
            onClick={() => handleAddToCart(product)}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductGrid;
