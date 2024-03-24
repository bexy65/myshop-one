import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import ContentHeader from "./ContentHeader";

function Content({ selectedCategory, ...props }) {
  const [sortDirection, setSortDirection] = useState(null);

  return (
    <props.tag className={props.className}>
      <ContentHeader
        selectedCategory={selectedCategory}
        className="cell-filter"
        setSortDirection={setSortDirection}
      />
      <ProductGrid
        selectedCategory={selectedCategory}
        sortDirection={sortDirection}
      />
    </props.tag>
  );
}

export default Content;
