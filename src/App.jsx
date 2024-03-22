import React, { useState } from "react";
import "./app.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory} />
      <Hero />
      <Content
        selectedCategory={selectedCategory}
        tag="div"
        className="content"
      />
    </>
  );
}

export default App;
