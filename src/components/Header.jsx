import React, { useState } from "react";
import HamburgerNavIcon from "./HamburgerNavIcon";
import Categories from "./Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header({ setSelectedCategory, selectedCategory }) {
  const [expanded, setExpanded] = useState(false);

  function toggleSidebar() {
    setExpanded(!expanded);
  }

  return (
    <div className="header-container">
      <div className="header">
        <HamburgerNavIcon
          icon={
            <FontAwesomeIcon
              className="text-2xl"
              icon={faBars}
              onClick={toggleSidebar}
            />
          }
        />
        <h2>MY STORE</h2>
        <div className="header-button-container">
          <button>
            <FontAwesomeIcon className="text-xl" icon={faUser} />
          </button>
          <div className="header-button-divider"></div>
          <button>
            <FontAwesomeIcon className="text-xl" icon={faShoppingCart} />
          </button>
        </div>
      </div>
      <Categories
        state={expanded}
        function={toggleSidebar}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Header;
