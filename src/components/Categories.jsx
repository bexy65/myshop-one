import React, { useState } from "react";

function Categories(props) {
  return (
    <div
      className={`category-container ${props.state ? "expanded" : "collapsed"}`}
    >
      <button className="category-sidebar-button" onClick={props.function}>
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
