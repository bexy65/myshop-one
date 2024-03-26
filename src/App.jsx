import React, { useState } from "react";
import "./app.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContainer from "./components/MainContainer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseItemQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseItemQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Header
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseItemQuantity}
        decreaseQuantity={decreaseItemQuantity}
      />
      <Hero />
      <MainContainer
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />
    </>
  );
}

export default App;
