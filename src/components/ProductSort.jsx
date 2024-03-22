import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp19,
  faArrowDown91,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";

function ProductSort() {
  return (
    <div className="products-filter-container">
      <FontAwesomeIcon icon={faArrowDownWideShort} />
      <FontAwesomeIcon icon={faArrowUp19} />
      <FontAwesomeIcon icon={faArrowDown91} />
    </div>
  );
}

export default ProductSort;
