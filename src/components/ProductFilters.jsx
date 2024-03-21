import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp19,
  faArrowDown91,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";

function ProductFilters() {
  return (
    <div className="products-filter-container">
      <div>
        <FontAwesomeIcon icon={faArrowDownWideShort} />
      </div>
      <div>
        <FontAwesomeIcon icon={faArrowUp19} />
        <FontAwesomeIcon icon={faArrowDown91} />
      </div>
    </div>
  );
}

export default ProductFilters;
