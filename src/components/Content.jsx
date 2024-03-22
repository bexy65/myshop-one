import React from "react";
import ProductGrid from "./ProductGrid";
import ContentHeader from "./ContentHeader";

function Content({ selectedCategory, ...props }) {
  return (
    <props.tag className={props.className}>
      <ContentHeader
        selectedCategory={selectedCategory}
        className="cell-filter"
      />
      <ProductGrid selectedCategory={selectedCategory} />
    </props.tag>
  );
}

export default Content;
