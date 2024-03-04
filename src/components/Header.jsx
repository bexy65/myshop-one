import React from 'react';

function Header() {
  return (
    <div>
      <h2>My Store</h2>
      <nav>
        <ul>
          <li>Category1</li>
          <li>Category2</li>
          <li>Category3</li>
          <li>Category4</li>
        </ul>
      </nav>
      <div>
        <button>User</button>
        <button>Cart</button>
      </div>
    </div>
  );
}

export default Header;
