import React, { useState, useEffect } from "react";

function Categorylist() {
  const [categories, setCategories] = useState([]);

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
        <button key={index}>{category.toUpperCase()}</button>
      ))}
    </ul>
  );
}

export default Categorylist;
