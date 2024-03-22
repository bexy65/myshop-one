import React from "react";
import ProductSort from "./ProductSort";

function ContentHeader({ selectedCategory, ...props }) {
  return (
    <div className={props.className}>
      <h1>
        {selectedCategory ? <h1>{selectedCategory.toUpperCase()}</h1> : null}
      </h1>
      <ProductSort />
    </div>
  );
}

export default ContentHeader;
