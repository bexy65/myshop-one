import React from "react";

function HamburgerNavIcon(props) {
  function openSideMenuHandler() {
    document.querySelector(".category-container").classList.toggle("expanded");
  }
  return (
    <div className="hamburger-button" onClick={openSideMenuHandler}>
      {props.icon}
    </div>
  );
}

export default HamburgerNavIcon;
