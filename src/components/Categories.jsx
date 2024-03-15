import React from "react";
import Categorylist from "./Categorylist";

function Categories(props) {
  return (
    <div
      className={`category-container ${props.state ? "expanded" : "collapsed"}`}
    >
      <button className="category-sidebar-button" onClick={props.function}>
        &#10006;
      </button>

      <Categorylist />
    </div>
  );
}

export default Categories;
