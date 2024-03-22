import React from "react";
import ProductFilters from "./ProductFilters";

function ContentHeader({ selectedCategory, ...props }) {
  return (
    <div className={props.className}>
      <h1>
        {selectedCategory ? <h1>{selectedCategory.toUpperCase()}</h1> : null}
      </h1>
      <ProductFilters />
    </div>
  );
}

export default ContentHeader;
