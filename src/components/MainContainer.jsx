import React from "react";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";

function MainContainer({ selectedCategory, ...props }) {
  return (
    <props.tag className={props.className}>
      <ProductFilters />
      <ProductGrid selectedCategory={selectedCategory} />
    </props.tag>
  );
}

export default MainContainer;
