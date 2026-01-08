import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if(searchQuery.length>0){
      setFilteredProducts(products.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase())))
    }
    else {
      setFilteredProducts(products)
    }
  }, [products, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="relative inline-block text-2xl sm:text-3xl font-semibold text-green-800 mb-8 after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-16 after:h-[3px] after:bg-green-500 after:rounded-full">
        All Products
      </h1>

      {filteredProducts.length > 0 ? (<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.filter((p)=>p.inStock).map((p,index) => (
            <ProductCard key={index} product={p} />
          ))}
        </div>   
      ) : (
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">No products found.</p>
      )}
    </div>
  );
};

export default AllProducts;
