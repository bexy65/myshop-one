import React from "react";

function ContentTitle({ selectedCategory }) {
  return (
    <h1>
      {selectedCategory ? (
        <h1>{selectedCategory.toUpperCase()}</h1>
      ) : (
        "Category".toUpperCase()
      )}
    </h1>
  );
}

export default ContentTitle;
