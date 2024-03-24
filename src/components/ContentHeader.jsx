import React from "react";
import ProductSort from "./ProductSort";
import ContentTitle from "./ContentTitle";

function ContentHeader({ selectedCategory, ...props }) {
  return (
    <div className={props.className}>
      <ContentTitle selectedCategory={selectedCategory} />
      <ProductSort
        setSortDirection={props.setSortDirection}
        setRatingDirection={props.setRatingDirection}
      />
    </div>
  );
}

export default ContentHeader;
