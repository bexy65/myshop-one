import React from "react";
import Content from "./Content";

function MainContainer({ selectedCategory, ...props }) {
  return (
    <div className="main-container">
      <Content
        selectedCategory={selectedCategory}
        tag="div"
        className="content"
        addToCart={props.addToCart}
      />
    </div>
  );
}

export default MainContainer;
