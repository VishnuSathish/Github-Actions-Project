import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const {navigate} = useAppContext();

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Categories</h2>

        {/* ONE container — grid on mobile, scrollable row on desktop */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 gap-4
            md:auto-cols-max md:grid-flow-col md:overflow-x-auto md:whitespace-nowrap md:pb-2
            scrollbar-hidden
          "
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {navigate(`./products/${cat.path.toLowerCase()}`); scrollTo(0,0)}}
              className="w-40 h-40 rounded-xl p-4 shadow-sm hover:shadow-md
                        transform hover:-translate-y-1 transition
                        flex flex-col items-center justify-center flex-shrink-0"
              style={{ backgroundColor: cat.bgColor }}
            >
              <img src={cat.image} alt={cat.text} className="h-16 w-16 object-contain mb-3" />
              <p className="text-sm font-semibold text-gray-800 text-center">{cat.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
