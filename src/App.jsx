import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header setSelectedCategory={setSelectedCategory} />
      <Hero />
      <ProductGrid selectedCategory={selectedCategory} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam
        exercitationem ducimus, iusto cumque, aut laudantium voluptates unde
        perspiciatis quod, perferendis sunt. Excepturi, neque. Consequatur
        adipisci inventore dolorum quaerat recusandae. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Illo magnam exercitationem ducimus,
        iusto cumque, aut laudantium voluptates unde perspiciatis quod,
        perferendis sunt. Excepturi, neque. Consequatur adipisci inventore
        dolorum quaerat recusandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illo magnam exercitationem ducimus, iusto cumque, aut
        laudantium voluptates unde perspiciatis quod, perferendis sunt.
        Excepturi, neque. Consequatur adipisci inventore dolorum quaerat
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo magnam exercitationem ducimus, iusto cumque, aut laudantium
        voluptates unde perspiciatis quod, perferendis sunt. Excepturi, neque.
        Consequatur adipisci inventore dolorum quaerat recusandae. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Illo magnam exercitationem
        ducimus, iusto cumque, aut laudantium voluptates unde perspiciatis quod,
        perferendis sunt. Excepturi, neque. Consequatur adipisci inventore
        dolorum quaerat recusandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illo magnam exercitationem ducimus, iusto cumque, aut
        laudantium voluptates unde perspiciatis quod, perferendis sunt.
        Excepturi, neque. Consequatur adipisci inventore dolorum quaerat
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo magnam exercitationem ducimus, iusto cumque, aut laudantium
        voluptates unde perspiciatis quod, perferendis sunt. Excepturi, neque.
        Consequatur adipisci inventore dolorum quaerat recusandae. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Illo magnam exercitationem
        ducimus, iusto cumque, aut laudantium voluptates unde perspiciatis quod,
        perferendis sunt. Excepturi, neque. Consequatur adipisci inventore
        dolorum quaerat recusandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illo magnam exercitationem ducimus, iusto cumque, aut
        laudantium voluptates unde perspiciatis quod, perferendis sunt.
        Excepturi, neque. Consequatur adipisci inventore dolorum quaerat
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo magnam exercitationem ducimus, iusto cumque, aut laudantium
        voluptates unde perspiciatis quod, perferendis sunt. Excepturi, neque.
        Consequatur adipisci inventore dolorum quaerat recusandae. dolorum
        quaerat recusandae. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Illo magnam exercitationem ducimus, iusto cumque, aut laudantium
        voluptates unde perspiciatis quod, perferendis sunt. Excepturi, neque.
        Consequatur adipisci inventore dolorum quaerat recusandae. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Illo magnam exercitationem
        ducimus, iusto cumque, aut laudantium voluptates unde perspiciatis quod,
        perferendis sunt. Excepturi, neque. Consequatur adipisci inventore
        dolorum quaerat recusandae. dolorum quaerat recusandae. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Illo magnam exercitationem
        ducimus, iusto cumque, aut laudantium voluptates unde perspiciatis quod,
        perferendis sunt. Excepturi, neque. Consequatur adipisci inventore
        dolorum quaerat recusandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illo magnam exercitationem ducimus, iusto cumque, aut
        laudantium voluptates unde perspiciatis quod, perferendis sunt.
        Excepturi, neque. Consequatur adipisci inventore dolorum quaerat
        recusandae. dolorum quaerat recusandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Illo magnam exercitationem ducimus, iusto
        cumque, aut laudantium voluptates unde perspiciatis quod, perferendis
        sunt. Excepturi, neque. Consequatur adipisci inventore dolorum quaerat
        recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo magnam exercitationem ducimus, iusto cumque, aut laudantium
        voluptates unde perspiciatis quod, perferendis sunt. Excepturi, neque.
        Consequatur adipisci inventore dolorum quaerat recusandae.
      </div>
    </>
  );
}

export default App;
