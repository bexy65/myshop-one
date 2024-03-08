import React from "react";

function Hero() {
  return (
    <div className="hero w-full text-center bg-blue-300">
      <div className="hero-cover text-lg p-2 md:p-4 lg:p-6">
        <h1 className="my-5 md:my-8 lg:my-10 text-white">
          HIGH QUALITY PRODUCTS
        </h1>
        <button className="my-10 rounded-xl bg-red-400 hover:bg-red-300 p-3 text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
