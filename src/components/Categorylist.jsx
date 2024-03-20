import React, { useState, useEffect } from "react";

function Categorylist({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  const handleCategoryClick = (category) => {
    console.log(`Category set to ${category}`);
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchCategories = async function () {
      const url = "https://dummyjson.com/products/categories";
      try {
        const response = await fetch(url);
        const categoryData = await response.json();
        setCategories(categoryData.slice(0, 4));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ul className="category-list">
      {categories.map((category, index) => (
        <button key={index} onClick={() => handleCategoryClick(category)}>
          {category.toUpperCase()}
        </button>
      ))}
    </ul>
  );
}

export default Categorylist;
