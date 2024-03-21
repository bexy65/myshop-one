import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import MainContainer from "./components/MainContainer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory} />
      <Hero />
      <MainContainer
        ProductGrid={ProductGrid}
        selectedCategory={selectedCategory}
        tag="div"
        className="main-container"
      />
    </>
  );
}

export default App;
