import React, { useState } from "react";

function Categories() {
  const [expanded, setExpanded] = useState(true);

  function toggleCategoryListWidth() {
    setExpanded(!expanded);
  }

  return (
    <div
      className={`category-container ${expanded ? "expanded" : "collapsed"}`}
    >
      <button
        className="category-sidebar-button"
        onClick={toggleCategoryListWidth}
      >
        &#10006;
      </button>
      <ul className="category-list">
        <button>Category1</button>
        <button>Category1</button>
        <button>Category1</button>
        <button>Category1</button>
      </ul>
    </div>
  );
}

export default Categories;
