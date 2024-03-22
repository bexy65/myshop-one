import React from "react";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";

function Content({ selectedCategory, ...props }) {
  return (
    <props.tag className={props.className}>
      <div className="cell-filter">
        <h1>
          {selectedCategory ? <h1>{selectedCategory.toUpperCase()}</h1> : null}
        </h1>
        <ProductFilters />
      </div>
      <ProductGrid selectedCategory={selectedCategory} />
    </props.tag>
  );
}

export default Content;
