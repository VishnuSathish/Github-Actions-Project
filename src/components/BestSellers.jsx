import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";
import { useEffect } from "react";


const BestSellers = () => {
  const {products, navigate} = useAppContext()
  

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">Best Sellers</h2>
          <button
           onClick={() => {navigate(`./products`); scrollTo(0,0)}}
            className="text-sm text-green-600 hover:underline hidden sm:inline"
          >
            View all
          </button>
        </div>

        <div className="
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
  justify-items-center
  lg:justify-between
  lg:[&>*]:w-full
">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
