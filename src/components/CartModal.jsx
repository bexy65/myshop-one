import React from "react";

function CartModal({ isOpen, onClose }) {
  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Shopping Cart</h2>
        <ul>
          <li>1asdasdasdasd</li>
          <li>2asdasdasdasdasdasdasdasdasd</li>
          <li>3asdasdasdasdas</li>
          <li>4dasdasdasdasdasdasd</li>
          <li>5asdasdasdasdas</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
}

export default CartModal;
