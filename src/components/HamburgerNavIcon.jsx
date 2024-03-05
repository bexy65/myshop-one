import React from 'react';

function HamburgerNavIcon() {
  function openSideMenuHandler(event) {
    event.target.classList.toggle('change-hamburger-button');
  }
  return (
    <div className='hamburger-button' onClick={(e) => openSideMenuHandler(e)}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  );
}

export default HamburgerNavIcon;
